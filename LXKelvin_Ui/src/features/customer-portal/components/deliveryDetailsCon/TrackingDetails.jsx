import React from "react";
import style from "../css/TrackingDetails.module.css"
import { FaPhoneAlt } from "react-icons/fa";

const TrackingDetails = () => {
  return (
    <div className={style.trackingdetailscontainer}>
      <h2>Tracking Details</h2>

      <div className={style.trackingcard}>
        <h4>Order Placed</h4>
        <p className={style.orderinfo}>Placed on Sun, 12 Oct 23, 4:12</p>
      </div>
      <div className={style.deliverypartner}>
        <div className={style.partnerinfo}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" 
            alt="Delivery Partner"
            className={style.partnerimage}
          />
          <p className={style.para}>
            HELLO! I'm Ajay Kumar, your delivery partner
          </p>
        </div>
        <a href="tel:+1234567890" className={style.callbutton}>
          <FaPhoneAlt  />
        </a>
      </div>

      <div className={style.trackingcard}>
        <h4>Address</h4>
        <p className={style.addressinfo}>
          921 Church Street, San Francisco 912144
        </p>
      </div>
    </div>
  );
};

export default TrackingDetails;