import React from "react";
import Card from "react-bootstrap/Card";
import SignupUpistyle from "../css/SinupUpi.module.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { IoIosArrowDown } from "react-icons/io";

function SignupUpi() {
  return (
    <div className="container justify-content-center align-items-center ">
      <strong>
        <h4
          className={`${SignupUpistyle.heading}text-center mt-5 mb-4 fw-bold`}
        >
          Choose Your Payment Method
        </h4>
      </strong>

      <div className="d-flex justify-content-center align-items-center flex-column">
        <p className={`${SignupUpistyle.text} mb-2 `}>
          You can modify the active payment at any time through your settings.
        </p>
        <Card
          className={` w-75 border-dark ${SignupUpistyle.cardWrapper}`}
          style={{ borderRadius: "1px" }}
        >
          <Card.Body className="p-2 d-flex justify-content-between align-items-center">
            <div> Select your UPI app </div>
            <Button
              variant="link"
              className="p-0"
              onClick={() => console.log("Seclect upi")}
            >
              <IoIosArrowDown size={22} />
            </Button>
          </Card.Body>
        </Card>
        <Card
          className={`mt-3 w-75 border-dark ${SignupUpistyle.cardWrapper}`}
          style={{ borderRadius: "1px" }}
        >
          <Card.Body className="p-2 d-flex justify-content-between align-items-center">
            <div> Enter your I'd </div>
          </Card.Body>
        </Card>
      </div>
<Form className="d-flex justify-content-center mt-3">
  <div className="w-75 d-flex align-items-start">
    <Form.Check
      className={`${SignupUpistyle.check} me-2 mt-1`}
      type="checkbox"
      id="confirmCheck"
      style={{ width: "20px", height: "20px" }}
    />
    <Form.Label
      htmlFor="confirmCheck"
      className={`${SignupUpistyle.termsLabel} m-0`}
    >
      By confirming, you authorize the platform to charge the selected payment method
      for the subscription plan, including any applicable taxes or fees.
    </Form.Label>
  </div>
</Form>


      <div className="mt-2">
        <style type="text/css">
          {`.btn-flat { background-color:orange;color: white; font-size:20px; width:250px; height:50px}`}
        </style>
        <Button
          variant="flat"
          className={SignupUpistyle.buttonResponsive}
          style={{ borderRadius: "4px" }}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default SignupUpi;
