import React, { useState } from "react";
import { Popover, Overlay, Button } from "react-bootstrap";
import PlacesAutocomplete from "react-places-autocomplete";
import styles from "../../../../lib/common/css/registration/Location.module.css";
import { IMAGES } from "../../../../lib/constants/Image_Constants";

const LocationModel = ({ show, target, container, onClose, onLocationSet }) => {
  const [address, setAddress] = useState("");
  const [location, setLocation] = useState("");

  const detectLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const response = await fetch(
              `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyAn8QaW9-ex8E_VtTWW-spyivlnyzDTm3w`
            );
            const data = await response.json();
            if (data.status === "OK" && data.results.length > 0) {
              const detectedAddress = data.results[0].formatted_address;
              setLocation(detectedAddress);
              setAddress(detectedAddress);
              onLocationSet(detectedAddress);
            } else {
              console.error("Reverse geocoding failed:", data);
              alert("Could not detect your address. Please try again.");
            }
          } catch (err) {
            console.error("Error calling Geocode API:", err);
            alert("An error occurred while detecting your location.");
          }
        },
        (error) => {
          if (error.code === error.PERMISSION_DENIED) {
            alert("Location permission denied. Please allow access.");
          } else if (error.code === error.TIMEOUT) {
            alert("Location request timed out. Try again.");
          } else {
            alert("Unable to fetch your location.");
          }
          console.error("Geolocation error:", error);
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0,
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const handleSelect = async (value) => {
    setAddress(value);
    setLocation(value);
    onLocationSet(value);
  };

  return (
    <Overlay
      target={target}
      show={show}
      placement="bottom-start"
      container={container}
      rootClose
      onHide={onClose}
    >
      <Popover id="location-popover" className={styles.popoverCustom}>
        <Popover.Body>
          <div className="text-center d-flex flex-row justify-content-center align-items-center">
            <img src={IMAGES.worldMap} width={60} className={styles.GlobeImage} alt="location icon" />
            <p className={styles.descriptionText}>
              To ensure the fastest delivery possible, please provide your
              current location.
            </p>
          </div>

          <div className="text-center d-flex flex-row justify-content-center align-items-center gap-3 mb-2">
            <Button
              variant="secondary"
              className="fs-6"
              onClick={detectLocation}
            >
              Current Location
            </Button>
            <p className={styles.orText}>OR</p>

            <PlacesAutocomplete
              value={address}
              onChange={setAddress}
              onSelect={handleSelect}
            >
              {({ getInputProps, suggestions, getSuggestionItemProps }) => (
                <div
                  style={{ position: "relative", width: "50%" }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <input
                    {...getInputProps({
                      placeholder: "Search delivery location",
                      className: "form-control",
                    })}
                  />
                  {suggestions.length > 0 && (
                    <div
                      className="border rounded bg-white"
                      style={{
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        right: 0,
                        zIndex: 1050,
                        maxHeight: "200px",
                        overflowY: "auto",
                      }}
                    >
                      {suggestions.map((suggestion, idx) => (
                        <div
                          key={idx}
                          {...getSuggestionItemProps(suggestion, {
                            className: `p-2 suggestion-item`,
                          })}
                        >
                          {suggestion.description}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </PlacesAutocomplete>
          </div>

          {location && <span className={styles.locationText}>{location}</span>}
        </Popover.Body>
      </Popover>
    </Overlay>
  );
};

export default LocationModel;
