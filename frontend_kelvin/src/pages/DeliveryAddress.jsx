import React, { useState, useEffect, useRef } from 'react';
import '../css/DeliveryAddress.css';

const DeliveryAddress = () => {
    const [formData, setFormData] = useState({
        houseNumber: '',
        landmark: '',
        mobileNo: '',
        town: '',
        addressType: 'Home',
        isDefaultAddress: false
    });

    const [map, setMap] = useState(null);
    const [marker, setMarker] = useState(null);
    const [currentLocation, setCurrentLocation] = useState(null);
    const mapRef = useRef(null);
    const googleMapRef = useRef(null);

    // Initialize Google Maps
    useEffect(() => {
        const googleMapScript = document.createElement('script');
        googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_API_KEY&libraries=places`;
        googleMapScript.async = true;
        googleMapScript.defer = true;

        window.document.body.appendChild(googleMapScript);
        googleMapScript.addEventListener('load', initializeMap);

        return () => {
            googleMapScript.removeEventListener('load', initializeMap);
        };
    }, []);

    const initializeMap = () => {
        const defaultLocation = { lat: 47.4715, lng: 48.1755 };

        const mapOptions = {
            zoom: 15,
            center: defaultLocation,
            mapTypeControl: false,
            streetViewControl: false,
            fullscreenControl: false
        };

        const mapInstance = new window.google.maps.Map(mapRef.current, mapOptions);
        setMap(mapInstance);

        // Create a marker
        const markerInstance = new window.google.maps.Marker({
            position: defaultLocation,
            map: mapInstance,
            draggable: true,
            animation: window.google.maps.Animation.DROP
        });
        setMarker(markerInstance);

        // Add event listener for marker drag end
        markerInstance.addListener('dragend', handleMarkerDragEnd);

        // Add event listener for map click
        mapInstance.addListener('click', (event) => {
            markerInstance.setPosition(event.latLng);
            reverseGeocode(event.latLng);
        });
    };

    // Get current user location
    const getCurrentLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const userLocation = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };

                    setCurrentLocation(userLocation);

                    if (map && marker) {
                        map.setCenter(userLocation);
                        marker.setPosition(userLocation);
                        reverseGeocode(userLocation);
                    }
                },
                (error) => {
                    console.error('Error getting location:', error);
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    };

    // Handle marker drag end
    const handleMarkerDragEnd = (event) => {
        const newPosition = {
            lat: event.latLng.lat(),
            lng: event.latLng.lng()
        };
        reverseGeocode(newPosition);
    };

    // Reverse geocode to get address details
    const reverseGeocode = (location) => {
        const geocoder = new window.google.maps.Geocoder();

        geocoder.geocode({ location: location }, (results, status) => {
            if (status === 'OK' && results[0]) {
                const addressComponents = results[0].address_components;

                // Extract relevant address components
                let houseNumber = '';
                let town = '';
                let landmark = '';

                addressComponents.forEach(component => {
                    const types = component.types;

                    if (types.includes('street_number')) {
                        houseNumber = component.long_name;
                    } else if (types.includes('route')) {
                        houseNumber = `${houseNumber} ${component.long_name}`.trim();
                    } else if (types.includes('locality') || types.includes('administrative_area_level_3')) {
                        town = component.long_name;
                    } else if (types.includes('point_of_interest') || types.includes('establishment')) {
                        landmark = component.long_name;
                    }
                });

                // Update form data
                setFormData(prevData => ({
                    ...prevData,
                    houseNumber,
                    town,
                    landmark: landmark || prevData.landmark
                }));
            } else {
                console.error('Geocoder failed due to:', status);
            }
        });
    };

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    // Handle address type selection
    const handleAddressType = (type) => {
        setFormData({
            ...formData,
            addressType: type
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Here you would typically send the data to your server
        console.log('Form submitted:', formData);

        // For demo purposes, show an alert
        alert('Address saved successfully!');

        // Close the modal (in a real app, you'd have proper modal handling)
        // closeModal();
    };

    // Handle auto-fill button click
    const handleAutoFill = () => {
        getCurrentLocation();
    };

    return (
        <div className="delivery-address-container">
            <div className="delivery-address-modal">
                <div className="modal-header">
                    <h5 className="modal-title">Delivery Address</h5>
                    <button type="button" className="close-button" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                <div className="modal-body">
                    <div className="autofill-section">
                        <span>Save time. Auto fill your current location</span>
                        <button
                            className="btn btn-light autofill-btn"
                            onClick={handleAutoFill}
                        >
                            Autofill
                        </button>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div
                                ref={mapRef}
                                id="googleMap"
                                className="google-map"
                            ></div>
                        </div>

                        <div className="col-md-6">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="House Number & Floor *"
                                        name="houseNumber"
                                        value={formData.houseNumber}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>

                                <div className="form-group mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Land mark & Area Name *"
                                        name="landmark"
                                        value={formData.landmark}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>

                                <div className="form-group mb-3">
                                    <input
                                        type="tel"
                                        className="form-control"
                                        placeholder="Mobile No *"
                                        name="mobileNo"
                                        value={formData.mobileNo}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>

                                <div className="form-group mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Town / City *"
                                        name="town"
                                        value={formData.town}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>

                                <div className="address-type-section">
                                    <p>Type of Address *</p>
                                    <div className="address-type-options">
                                        <div className={`address-option ${formData.addressType === 'Home' ? 'active' : ''}`}>
                                            <input
                                                type="radio"
                                                id="homeAddress"
                                                name="addressType"
                                                checked={formData.addressType === 'Home'}
                                                onChange={() => handleAddressType('Home')}
                                            />
                                            <label htmlFor="homeAddress">Home</label>
                                        </div>

                                        <div className={`address-option ${formData.addressType === 'Office' ? 'active' : ''}`}>
                                            <input
                                                type="radio"
                                                id="officeAddress"
                                                name="addressType"
                                                checked={formData.addressType === 'Office'}
                                                onChange={() => handleAddressType('Office')}
                                            />
                                            <label htmlFor="officeAddress">Office</label>
                                        </div>

                                        <div className={`address-option ${formData.addressType === 'WorkPlace' ? 'active' : ''}`}>
                                            <input
                                                type="radio"
                                                id="workplaceAddress"
                                                name="addressType"
                                                checked={formData.addressType === 'WorkPlace'}
                                                onChange={() => handleAddressType('WorkPlace')}
                                            />
                                            <label htmlFor="workplaceAddress">WorkPlace</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-check mb-3">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="defaultAddress"
                                        name="isDefaultAddress"
                                        checked={formData.isDefaultAddress}
                                        onChange={handleInputChange}
                                    />
                                    <label className="form-check-label" htmlFor="defaultAddress">
                                        Make this as your default address
                                    </label>
                                </div>
                                <button type="submit" className="btn btn-warning btn-block save-btn">
                                    Save & Continue
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeliveryAddress;