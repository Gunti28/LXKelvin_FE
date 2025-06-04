import React from "react";
import Card from "react-bootstrap/Card";
import { CiLock } from "react-icons/ci";
import Form from "react-bootstrap/Form";
import { IoIosArrowForward } from "react-icons/io";
import Button from "react-bootstrap/Button";
import Paymentstyles from "../../../../lib/common/css/SubscriptionCards/ChoosePayment.module.css";

import {
  VISA,
  AMEX,
  APPLE_PAY,
  PAYPAL,
  MASTER_CARD,
  SECURED_PAYMENT,
} from "../../../../lib/constants/Image_Constants";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPaymentMethod } from "../../../../store/slice/subscriptionPaySlice";
const ChoosePayment = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlePaymentSelect = (method) => {
    dispatch(setPaymentMethod(method));
    if (method === "upi") {
      navigate("/upiPayment");
    } else {
      navigate("/cardPayment");
    }
  };

  return (
    <div className={Paymentstyles.ChoosePayContainer}>
      <h5 className="text-center mb-4">Choose Your Payment Method</h5>
      <div className="d-flex justify-content-center align-items-center flex-column">
        <Card
          className={`mt-3 border-dark ${Paymentstyles.cardWrapper}`}
          style={{ borderRadius: "1px" }}
        >
          <Card.Body className="d-flex justify-content-between align-items-center">
            <div className="d-flex flex-row">
              <div className={Paymentstyles.nameContainer}>
                Credit Or Debit Card
              </div>
              <div className={Paymentstyles.imgContainer}>
                <img
                  src={VISA}
                  alt="Encrypted Icon"
                  style={{ marginLeft: "8px" }}
                />
                <img
                  src={AMEX}
                  alt="American Express Logo"
                  className="image-fluid ms-2"
                />
                <img
                  src={MASTER_CARD}
                  alt="Group Illustration"
                  className="ms-2"
                />
              </div>
            </div>
            <Button
              variant="link"
              className="p-0"
              onClick={() => handlePaymentSelect("card")}
            >
              <IoIosArrowForward size={22} />
            </Button>
          </Card.Body>
        </Card>

        <Card
          className={`mt-3 border-dark ${Paymentstyles.cardWrapper}`}
          style={{ borderRadius: "1px" }}
        >
          <Card.Body className="d-flex justify-content-between align-items-center">
            <div className="d-flex flex-row">
              <div className={Paymentstyles.nameContainer}>Net banking</div>
              <div className={Paymentstyles.imgContainer}>
                <img src={PAYPAL} alt="paypal" className="ms-2" />
                <img
                  src={APPLE_PAY}
                  alt="Apple Pay"
                  className={`ms-2 ${Paymentstyles.AppleImg}`}
                />
              </div>
            </div>
            <Button
              variant="link"
              className="p-0"
              onClick={() => handlePaymentSelect("upi")}
            >
              <IoIosArrowForward size={22} />
            </Button>
          </Card.Body>
        </Card>
        <div className={`${Paymentstyles.cardWrapper}`}>
          <div
            className={`d-flex justify-content-end ${Paymentstyles.encryptedNote}`}
          >
            <span style={{ borderBottom: "1px solid" }}>End-end encrypted</span>
            <CiLock size={14} className="ms-1 mb-1" />
          </div>

          <Form className={`mt-3 ${Paymentstyles.form}`}>
            <div className={`d-flex ${Paymentstyles.check}`}>
              <Form.Check type="checkbox" id="confirmCheck" />
              <Form.Label
                htmlFor="confirmCheck"
                className={`${Paymentstyles.termsLabel}`}
              >
                By confirming, you authorize the platform to charge the selected
                payment method for the subscription plan, including any
                applicable taxes or fees.
              </Form.Label>
            </div>
          </Form>
        </div>

        <div className={`${Paymentstyles.vector} `}>
          <img
            src={SECURED_PAYMENT}
            alt="Vector Icon"
            style={{ marginRight: "8px" }}
          />
          <div className="text-start">
            <div>100% safe &</div>
            <div>Secure Payments</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChoosePayment;
