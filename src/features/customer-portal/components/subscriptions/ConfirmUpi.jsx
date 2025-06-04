import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import confirmstyle from "../../../../lib/common/css/SubscriptionCards/ConfirmUpi.module.css";
import { useDispatch, useSelector } from "react-redux";
import { planNames } from "../../../../lib/constants";
import { confirmSubscription } from "../../../../store/slice/subscriptionPaySlice";
import { useNavigate } from "react-router-dom";
const ConfirmUpi = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { selectedPlanId, price, selectedUpiApp, upiId } = useSelector(
    (state) => state.subscription
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(confirmSubscription());
    navigate("/my_account");
  };
  const handleEditPlan = () => {
    navigate("/subscriptions");
  };
  const handleChangeUpi = () => {
    navigate("/upiPayment");
  };

  return (
    <div className={confirmstyle.ConfirmContainer}>
      <strong>
        <h4 className="text-center mb-4 fw-bold">Confirm Your details</h4>
      </strong>

      <div className="d-flex justify-content-center align-items-center flex-column">
        <Card
          className={`mt-3 border-top-0 ${confirmstyle.cardWrapper}`}
          style={{ borderRadius: "1px", background: "#D4E7F380" }}
        >
          <Card.Body className=" d-flex justify-content-between align-items-center">
            <div className="fs-bold text-start ">
              {planNames[selectedPlanId]}
              <div>
                {" "}
                {price !== null && (
                  <div className="fw-semibold mt-2">&#8364;{price}</div>
                )}
              </div>
            </div>

            <Button variant="link" onClick={handleEditPlan}>
              Edit Plan
            </Button>
          </Card.Body>
        </Card>
        <Card
          className={` border-bottom-0 ${confirmstyle.cardWrapper}`}
          style={{ borderRadius: "1px", background: "#D4E7F380" }}
        >
          <Card.Body className=" d-flex justify-content-between">
            <div className="fs-bold text-start ">
              {" "}
              {selectedUpiApp}
              <div>{upiId}</div>
            </div>
            <Button variant="link" onClick={handleChangeUpi}>
              {" "}
              change
            </Button>
          </Card.Body>
        </Card>
        <div className={`${confirmstyle.Para}`}>
          <p className="mt-5 mx-auto">
            By confirming, you authorize the platform to charge the selected
            payment <br />
            method for the subscription plan, including any applicable taxes or
            fees.
          </p>
        </div>

        <div className={`${confirmstyle.agree} mt-3 d-flex`}>
          <Form.Check
            type="checkbox"
            id="confirmCheck"
            style={{ width: "34px", height: "34px", marginTop: "5px" }}
          />
          <Form.Label
            htmlFor="confirmCheck"
            className={confirmstyle.checkboxLabel}
          >
            I accept <span style={{ color: "blue" }}> terms and Condition</span>
            ?
          </Form.Label>
        </div>
      </div>
      <div className="w-100 d-flex justify-content-center align-items-center">
        <button
          className={confirmstyle.buttonResponsive}
          onClick={handleSubmit}
        >
          Continue
        </button>
      </div>
    </div>
  );
};
export default ConfirmUpi;
