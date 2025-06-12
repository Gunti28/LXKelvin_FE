import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrackingMock } from "../../../../store/slice/trackingDetailsSlice";
import style from "../../../../lib/common/css/orderTracking/TrackingDetails.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";

const TrackingDetails = () => {
  const dispatch = useDispatch();

  const { orderPlacedTime, partnerName, phone, address, partnerImage, status } =
    useSelector((state) => state.trackingDetails || {});

  useEffect(() => {
    dispatch(fetchTrackingMock());
  }, [dispatch]);

  if (status === "loading") return <p>Loading tracking details...</p>;
  if (status === "failed") return <p>Error loading tracking details.</p>;

  return (
    <div className={style.pageWrapper}>
      <div className={style.trackingdetailscontainer}>
        <NavLink to="/orderTracking">
          <Icon
            icon="material-symbols:arrow-back"
            width="28"
            height="28"
            color="black"
          />
        </NavLink>

        <h2>Tracking Details</h2>

        <div className={style.trackingcard}>
          <h4>Order Placed</h4>
          <p className={style.orderinfo}>Placed on {orderPlacedTime}</p>
        </div>

        <div className={style.deliverypartner}>
          <div className={style.partnerinfo}>
            <img
              src={partnerImage}
              alt="Delivery Partner"
              className={style.partnerimage}
            />
            <p className={style.para}>
              HELLO! I'm {partnerName}, your delivery partner
            </p>
          </div>
          <a href={`tel:${phone}`} className={style.callbutton}>
            <FaPhoneAlt />
          </a>
        </div>

        <div className={style.trackingcard}>
          <h4>Address</h4>
          <p className={style.addressinfo}>{address}</p>
        </div>
      </div>
    </div>
  );
};

export default TrackingDetails;
