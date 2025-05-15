import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Setupcardstyle from "../css/Setupcard.module.css";
import encryptedIcon from "../assets/Group 1000004820.jpg";
import amexLogo from "../assets/logos_amex-digital.jpg";
import groupImage from "../assets/Group 1000004821.jpg";
import Form from "react-bootstrap/Form";
import { CiCircleQuestion } from "react-icons/ci";
import { HiOutlineCreditCard } from "react-icons/hi";
function Setupcard() {
  return (
    <div className="container d-flex flex-column align-items-center">
  <div className={Setupcardstyle.cardSection}>
        <h4 className={`text-center mt-5 mb-4 fw-bold ${Setupcardstyle.heading} `}>
          Set Up your Credit Card or debit card
        </h4>

       <div className={`d-flex gap-2 mt-3 ${Setupcardstyle.imgs}`}>
        <img
          src={encryptedIcon}
          alt="Encrypted Icon"
          style={{ height: "20px" }}
        />
        <img
          src={amexLogo}
          alt="American Express Logo"
          style={{ height: "30px" }}
        />
        <img
          src={groupImage}
          alt="Group Illustration"
          style={{ height: "20px" }}
        />
      </div>
      <Card
        className={`mt-2 border-dark  ${Setupcardstyle.card}`}
      >
        <Card.Body className=" d-flex flex-row pb-1 justify-content-between align-items-center">
          <p> Credit or Debit Card</p>
          <div className="text-end mb-3">
            <HiOutlineCreditCard className=" w-100"/>
          </div>
        </Card.Body>
      </Card>
      <div className={`d-flex  flex-row gap-2 mt-2  ${Setupcardstyle.cards}`}>
        <Card className=" w-50  border-dark" style={{ borderRadius: "1px" }}>
          <Card.Body className=" pb-1 justify-content-between align-items-center ">
            <div className="text-start">
              <p>Expiry date</p>
            </div>
          </Card.Body>
        </Card>

        <Card className=" w-50 border-dark" style={{ borderRadius: "1px" }}>
          <Card.Body className="d-flex flex-row pb-1 justify-content-between align-items-center">
              <p>CVV</p>
              <div className="w-5 mb-3">
                <CiCircleQuestion />
            </div>
          </Card.Body>
        </Card>
      </div>

      <Card
        className={`mt-2 border-dark border-1 ${Setupcardstyle.card}`}
        style={{ borderRadius: "1px" }}
      >
        <Card.Body className=" pb-1 justify-content-between align-items-center ">
          <div className=" d-flex flex-row ">
            <p>Name on card </p>
          </div>
        </Card.Body>
      </Card>
      <Card
        className={`mt-2 border-1 ${Setupcardstyle.cardWrapper}`}
        style={{ borderRadius: "1px", background: "#D4E7F380" }}
      >
        <Card.Body>
          <div className="fs-bold text-start ">
            PREMUM
            <div>Place Plan Amount here</div>
          </div>
        </Card.Body>
      </Card>

        <div className={`mt-4 d-flex align-items-start gap-2 ${Setupcardstyle.checkboxLabel}`}>
      <Form.Check type="checkbox" id="confirmCheck" style={{ width: "20px", height: "20px" }} />
      <Form.Label htmlFor="confirmCheck" className={Setupcardstyle.text}>
        I accept <span style={{ color: "blue" }}>terms and Condition</span>
      </Form.Label>
    </div>
  <div className="mt-4">
      <Button  className={Setupcardstyle.buttonResponsive} style={{ borderRadius: "4px",backgroundColor:"#FF9900" }}>
        Continue
      </Button>
    </div>
      </div>
    </div>
  );
}

export default Setupcard;
