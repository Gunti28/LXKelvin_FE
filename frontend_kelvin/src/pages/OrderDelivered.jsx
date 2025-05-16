import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/orderDelivered.css';
import Delivery from '../assets/delivery_man.svg';
import icon1 from '../assets/d1.svg';
import icon2 from '../assets/d2.svg';
import icon3 from '../assets/d3.svg';
const OrderDelivered = ({ toggleChat }) => {
    return (
        <>
        <div className="page-background">
            <h1 className="delivery-title">Your order has Delivered!</h1>

            <button className="help-option ">
                <div className="icon-wrapper">
                    <img src={icon3} alt="Icon 3" className="bi bi-headset" />
                </div>
                <span>Need help with your order?</span>
            </button>

                <button className="chat-option" onClick={toggleChat}>
                <div className="icon-wrapper  ">
                    <img src={icon1} alt="Icon 1" className="icon1" /> 
                </div>
                <span className="green-text">chat with us..</span>
            </button>

            <button className="call-option">
                <div className="icon-wrapper">
                    <img src={icon2} alt="Icon 2" className="icon2" />
                </div>
                <span className="green-text">Get a call back....</span>
            </button>

            <div className="rating-card">
                <h5 className="rating-title">Rate us</h5>
                <div className="stars">
                    <span className="star active">★</span>
                    <span className="star active">★</span>
                    <span className="star active">★</span>
                    <span className="star active">★</span>
                    <span className="star">★</span>
                </div>
                <p className="rating-comment">Leave a comment</p>
                <textarea className="form-control comment-box" placeholder="write any comments..."></textarea>
                <button className="btn submit-btn">Submit</button>
            </div>

            <div className="left-scooter-container">
                <img src={Delivery} alt="Delivery Person" className="scooter-img" />
            </div>

            <div className="right-scooter-container">
                <img src={Delivery} alt="Delivery Person" className="scooter-img" />
            </div>
        </div>

        </>
    );
};

export default OrderDelivered;