import React from "react";
import "../css/TrackingDetails.css";
import { FaPhoneAlt } from "react-icons/fa";

const TrackingDetails = () => {
  return (
    <div className="tracking-details-container">
      <h2>Tracking Details</h2>

      <div className="tracking-card">
        <h4>Order Placed</h4>
        <p className="order-info">Placed on Sun, 12 Oct 23, 4:12</p>
      </div>

      <div className="tracking-card delivery-partner">
        <div className="partner-info">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" 
            alt="Delivery Partner"
            className="partner-image"
          />
          <p>
            HELLO! I'm Ajay Kumar, your delivery partner
          </p>
        </div>
        <a href="tel:+1234567890" className="call-button">
          <FaPhoneAlt />
        </a>
      </div>

      <div className="tracking-card">
        <h4>Address</h4>
        <p className="address-info">
          921 Church Street, San Francisco 912144
        </p>
      </div>
    </div>
  );
};

export default TrackingDetails;