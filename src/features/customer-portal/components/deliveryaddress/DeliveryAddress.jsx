import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";

import {
  fetchAddresses,
  updateCurrentAddress,
  saveCurrentAddress,
} from "../../../../store/slice/deliveryAddressSlice";
import "../../../../lib/common/css/deliveryaddress/DeliveryAddress.css";
import { useNavigate } from "react-router-dom";

const DeliveryAddress = () => {
  const dispatch = useDispatch();
  const { currentAddress, loading, error } = useSelector(
    (state) => state.deliveryAddress
  );

  const navigate = useNavigate();

  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const mapInstanceRef = useRef(null);

  // Load addresses on mount
  useEffect(() => {
    const savedAddress = localStorage.getItem("savedAddress");
    if (savedAddress) {
      dispatch(updateCurrentAddress(JSON.parse(savedAddress)));
    } else {
      dispatch(fetchAddresses());
    }
  }, [dispatch]);

  useEffect(() => {
    const googleMapScript = document.createElement("script");
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAn8QaW9-ex8E_VtTWW-spyivlnyzDTm3w&libraries=places`;
    googleMapScript.async = true;
    googleMapScript.defer = true;

    window.document.body.appendChild(googleMapScript);
    googleMapScript.addEventListener("load", initializeMap);

    return () => {
      googleMapScript.removeEventListener("load", initializeMap);
    };
  }, []);

  const initializeMap = () => {
    const defaultLocation = { lat: 47.4715, lng: 48.1755 };

    const mapOptions = {
      zoom: 15,
      center: defaultLocation,
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: false,
    };

    mapInstanceRef.current = new window.google.maps.Map(
      mapRef.current,
      mapOptions
    );

    markerRef.current = new window.google.maps.Marker({
      position: defaultLocation,
      map: mapInstanceRef.current,
      draggable: true,
      animation: window.google.maps.Animation.DROP,
    });

    markerRef.current.addListener("dragend", handleMarkerDragEnd);

    mapInstanceRef.current.addListener("click", (event) => {
      markerRef.current.setPosition(event.latLng);
      reverseGeocode(event.latLng);
    });

    if (currentAddress) {
      const pos = {
        lat: currentAddress.lat || defaultLocation.lat,
        lng: currentAddress.lng || defaultLocation.lng,
      };
      mapInstanceRef.current.setCenter(pos);
      markerRef.current.setPosition(pos);
    }
  };

  const handleMarkerDragEnd = (event) => {
    const newPosition = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };
    reverseGeocode(newPosition);
  };

  const reverseGeocode = (location) => {
    const geocoder = new window.google.maps.Geocoder();

    geocoder.geocode({ location: location }, (results, status) => {
      if (status === "OK" && results[0]) {
        const addressComponents = results[0].address_components;

        let houseNo = "";
        let landmark = "";
        let city = "";
        let state = "";
        let pincode = "";

        addressComponents.forEach((component) => {
          const types = component.types;

          if (types.includes("street_number")) {
            houseNo = component.long_name;
          } else if (types.includes("route")) {
            houseNo = `${houseNo} ${component.long_name}`.trim();
          } else if (
            types.includes("sublocality") ||
            types.includes("neighborhood")
          ) {
            landmark = component.long_name;
          } else if (types.includes("locality")) {
            city = component.long_name;
          } else if (types.includes("administrative_area_level_1")) {
            state = component.long_name;
          } else if (types.includes("postal_code")) {
            pincode = component.long_name;
          }
        });

        dispatch(
          updateCurrentAddress({
            houseNo,
            landMark: landmark,
            city,
            state,
            pincode,
            lat: location.lat,
            lng: location.lng,
          })
        );
      } else {
        console.error("Geocoder failed due to:", status);
      }
    });
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;

    if (name === "type") {
      dispatch(updateCurrentAddress({ [name]: val.toLowerCase() }));
    } else {
      dispatch(updateCurrentAddress({ [name]: val }));
    }
  };

  const handleAutoFill = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          mapInstanceRef.current.setCenter(userLocation);
          markerRef.current.setPosition(userLocation);
          reverseGeocode(userLocation);
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation not supported.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveCurrentAddress());
    localStorage.setItem("savedAddress", JSON.stringify(currentAddress));
    navigate("/orderSummary");
  };

  if (loading) return <div>Loading addresses...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!currentAddress) return <div>No address data available</div>;

  return (
    <div className="delivery-address-container">
      <div className="delivery-address-modal">
        <div className="modal-header">
          <NavLink to="/cart">
            <Icon
              icon="material-symbols:arrow-back"
              width="28"
              height="28"
              color="black"
            />
          </NavLink>
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
              type="button"
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
                style={{ height: "400px" }}
              ></div>
            </div>

            <div className="col-md-6">
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="House Number & Floor *"
                    name="houseNo"
                    value={currentAddress.houseNo || ""}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Land mark & Area Name *"
                    name="landMark"
                    value={currentAddress.landMark || ""}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="City *"
                    name="city"
                    value={currentAddress.city || ""}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="State *"
                    name="state"
                    value={currentAddress.state || ""}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Pin Code *"
                    name="pincode"
                    value={currentAddress.pincode || ""}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group mb-3">
                  <label>
                    <input
                      type="radio"
                      name="type"
                      value="home"
                      checked={currentAddress.type === "home"}
                      onChange={handleInputChange}
                    />
                    Home
                  </label>

                  <label className="ms-3">
                    <input
                      type="radio"
                      name="type"
                      value="office"
                      checked={currentAddress.type === "office"}
                      onChange={handleInputChange}
                    />
                    Office
                  </label>

                  <label className="ms-3">
                    <input
                      type="radio"
                      name="type"
                      value="others"
                      checked={currentAddress.type === "others"}
                      onChange={handleInputChange}
                    />
                    Others
                  </label>
                </div>

                <button
                  type="submit"
                  style={{ backgroundColor: "#ff9900" }}
                  className="btn"
                >
                  Save and Continue
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
