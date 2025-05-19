import React from "react";
import Card from "react-bootstrap/Card";
import AMEX from "../assets/Paymentpage/AMEX.jpg"
import visa from "../assets/Paymentpage/visa.jpg"
import applePay from "../assets/Paymentpage/applepay.jpg";
import { CiLock } from "react-icons/ci";
import Pay from "../assets/Paymentpage/Pay.jpg";
import Form from "react-bootstrap/Form";
import paypal from "../assets/Paymentpage/paypal.jpg";
import vector from "../assets/Paymentpage/Vector.png"
import { IoIosArrowForward } from "react-icons/io";
import Button from "react-bootstrap/Button";
import Paymentstyles from "../css/Payment.module.css";

const Paymentpage = () => {

  return (
    <div className="container justify-content-center align-items-center ">
      <strong>
        <h4 className="text-center mt-5 mb-4 fw-bold">
          Choose Your Payment Method
        </h4>
      </strong>
      <div className="d-flex justify-content-center align-items-center flex-column">
        <Card
          className={`mt-3 border-dark ${Paymentstyles.cardWrapper}`}
          style={{ borderRadius: "1px" }}
        >
          <Card.Body className="p-2 d-flex justify-content-between align-items-center">
            <div>
              Credit Card
              <img
                src={visa}
                alt="Encrypted Icon"
                style={{  marginLeft: "8px" }}
              />
              <img
                src={AMEX}
                alt="American Express Logo"
                className="image-fluid ms-2"
              />
              <img
                src={Pay}
                alt="Group Illustration"
                className="ms-2"
              />
            </div>
            <Button
              variant="link"
              className="p-0"
              onClick={() => console.log("Net banking selected")}
            >
              <IoIosArrowForward size={22} />
            </Button>
          </Card.Body>
        </Card>

        <Card
          className={`mt-3 border-dark ${Paymentstyles.cardWrapper}`}
          style={{ borderRadius: "1px" }}
        >
          <Card.Body className="p-2 d-flex justify-content-between align-items-center">
            <div>
              Net banking
              <img
                src={paypal}
                alt="paypal"
                className="ms-2"
              />
              <img
                src={applePay}
                alt="Apple Pay"
                className="ms-2"
              />
            </div>
            <Button
              variant="link"
              className="p-0"
              onClick={() => console.log("Net banking selected")}
            >
              <IoIosArrowForward size={22} />
            </Button>
          </Card.Body>
        </Card>
<div className={`${Paymentstyles.cardWrapper}`}>
  <div className={`d-flex justify-content-end ${Paymentstyles.encryptedNote}`}>
    <span style={{ borderBottom: "1px solid" }}>End-end encrypted</span>
    <CiLock size={14} className="ms-1 mb-1" />
  </div>

<Form className={`mt-3 ${Paymentstyles.form}`}>
  <div className={`d-flex ${Paymentstyles.check}`}>
    <Form.Check
      type="checkbox"
      id="confirmCheck"
    />
    <Form.Label htmlFor="confirmCheck" className={`${Paymentstyles.termsLabel}`}>
      By confirming, you authorize the platform to charge the selected payment method for the subscription plan, including any applicable taxes or fees.
    </Form.Label>
  </div>
</Form>

</div>

        <div className={`${Paymentstyles.vector} `}>
          <img
            src={vector}
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
}

export default Paymentpage;
