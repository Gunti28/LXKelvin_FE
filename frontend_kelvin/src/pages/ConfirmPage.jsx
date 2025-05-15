import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import confrimstyle from "../css/Confirm.module.css";

function ConfirmPage() {
  return (
    <div className="mt-5 container-fluid justify-content-center align-items-center ">
      <strong>
        <h4 className="text-center mt-5 mb-4 fw-bold">Confirm Your details</h4>
      </strong>

      <div className="d-flex justify-content-center align-items-center flex-column">
        <Card
          className={`mt-3 border-top-0 ${confrimstyle.cardWrapper}`}
          style={{ borderRadius: "1px", background: "#D4E7F380" }}
        >
          <Card.Body className=" d-flex justify-content-between align-items-center">
            <div className="fs-bold text-start ">
              PREMUM
              <div>Place Plan Amount here</div>
            </div>
            <div>EditPlan </div>
          </Card.Body>
        </Card>
        <Card
          className={` border-bottom-0 ${confrimstyle.cardWrapper}`}
          style={{ borderRadius: "1px", background: "#D4E7F380" }}
        >
          <Card.Body className=" d-flex justify-content-between">
            <div className="fs-bold text-start "> PayPal
              <div>9434265721@ybl</div>
            </div>
            <div>Change</div>
          </Card.Body>
        </Card>
        <div className={`${confrimstyle.Para}`}>
        <p className="mt-5 mx-auto">
          By confirming, you authorize the platform to charge the selected
          payment <br />
          method for the subscription plan, including any applicable taxes or
          fees.
        </p>
      </div>
      
        <div className={`${confrimstyle.agree} mt-3 d-flex`}>
          <Form.Check
            type="checkbox"
            id="confirmCheck"
            style={{ width: "34px", height: "34px", marginTop: "5px" }}
          />
          <Form.Label
            htmlFor="confirmCheck"
            className={`${confrimstyle.checkboxLabel}`}
          >
            I accept <span style={{ color: "blue"}}> terms and Condition</span>?
          </Form.Label>
        </div>
      </div>
      <div className="mt-4">
        <style type="text/css">
          {`.btn-flat { background-color:orange;color: white; font-size:20px; width:250px; height:50px}`}
        </style>
        <Button
          variant="flat"
          className={confrimstyle.buttonResponsive}
          style={{ borderRadius: "4px" }}
        >
          Continue
        </Button>
      </div>
    </div>
  );
}
export default ConfirmPage;
