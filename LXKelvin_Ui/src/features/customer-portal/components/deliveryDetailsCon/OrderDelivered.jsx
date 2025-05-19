import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  OrderDeliveredStyles from '../css/orderDelivered.module.css';
import Delivery from '../assets/orderdeliveredImages/delivery_man.svg';
import icon1 from '../assets/orderdeliveredImages/d1.svg';
import icon2 from '../assets/orderdeliveredImages/d2.svg';
import icon3 from '../assets/orderdeliveredImages/d3.svg';

const OrderDelivered = ({ toggleChat }) => {
    return (
        <>
        <div className={OrderDeliveredStyles.pageBackground}>
            <h1 className={OrderDeliveredStyles.deliveryTitle}>Your order has Delivered!</h1>

            <button className={OrderDeliveredStyles.helpOption}>
                <div className={OrderDeliveredStyles.iconWrapper}>
                    <img src={icon3} alt="Icon 3" />
                </div>
                <span>Need help with your order?</span>
            </button>

                <button className={OrderDeliveredStyles.chatOption} onClick={toggleChat}>
                <div className={OrderDeliveredStyles.iconWrapper }>
                    <img src={icon1} alt="Icon 1" className={OrderDeliveredStyles.icon1} /> 
                </div>
                <span className={OrderDeliveredStyles.greenText}>chat with us..</span>
            </button>

            <button className={OrderDeliveredStyles.callOption}>
                <div className={OrderDeliveredStyles.iconWrapper}>
                    <img src={icon2} alt="Icon 2" className={OrderDeliveredStyles.icon2} />
                </div>
                <span className={OrderDeliveredStyles.greenText}>Get a call back....</span>
            </button>

            <div className={OrderDeliveredStyles.ratingCard}>
                <h5 className={OrderDeliveredStyles.ratingTitle}>Rate us</h5>
                <div className={OrderDeliveredStyles.stars}>
                    <span className={OrderDeliveredStyles.starActive}>★</span>
                    <span className={OrderDeliveredStyles.starActive}>★</span>
                    <span className={OrderDeliveredStyles.starActive}>★</span>
                    <span className={OrderDeliveredStyles.starActive}>★</span>
                    <span className={OrderDeliveredStyles.stars}>★</span>
                </div>
                <p className={OrderDeliveredStyles.ratingComment}>Leave a comment</p>
                <textarea className={`form-control ${OrderDeliveredStyles.commentBox}`} placeholder="write any comments..."></textarea>
                <button className={`btn ${OrderDeliveredStyles.submitBtn}`}>Submit</button>
            </div>

            <div className={OrderDeliveredStyles.leftScooterContainer}>
                <img src={Delivery} alt="Delivery Person" className={OrderDeliveredStyles.scooterImg} />
            </div>

            <div className={OrderDeliveredStyles.rightScooterContainer}>
                <img src={Delivery} alt="Delivery Person" cclassName={OrderDeliveredStyles.scooterImg} />
            </div>
        </div>

        </>
    );
};

export default OrderDelivered;