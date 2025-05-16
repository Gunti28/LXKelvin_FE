import React from "react";
import Card from "react-bootstrap/Card";
import amexLogo from "../assets/logos_amex-digital.jpg";
import encryptedIcon from "../assets/Group 1000004820.jpg";
import applePayLogo from "../assets/cib_apple-pay.jpg";
import { CiLock } from "react-icons/ci";
import groupImage from "../assets/Group 1000004821.jpg";
import Form from "react-bootstrap/Form";
import paypal from "../assets/paypal.jpg";
import vectorIcon from "../assets/Vector.png";
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
                src={encryptedIcon}
                alt="Encrypted Icon"
                style={{ height: "20px", marginLeft: "8px" }}
              />
              <img
                src={amexLogo}
                alt="American Express Logo"
                style={{ height: "20px" }}
                className="image-fluid ms-2"
              />
              <img
                src={groupImage}
                alt="Group Illustration"
                className="ms-2"
                style={{ height: "20px" }}
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
                style={{ height: "20px" }}
              />
              <img
                src={applePayLogo}
                alt="Apple Pay"
                className="ms-2"
                style={{ height: "20px" }}
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
      style={{ width: "20px", height: "20px", marginTop: "2px" }}
    />
    <Form.Label htmlFor="confirmCheck" className={`${Paymentstyles.termsLabel}`}>
      By confirming, you authorize the platform to charge the selected payment method for the subscription plan, including any applicable taxes or fees.
    </Form.Label>
  </div>
</Form>

</div>

        <div className={`${Paymentstyles.vector} `}>
          <img
            src={vectorIcon}
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
