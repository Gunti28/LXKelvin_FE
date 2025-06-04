import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import SignupUpistyle from "../../../../lib/common/css/SubscriptionCards/SelectUpi.module.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import {
  setSelectedUpiApp,
  setUpiId,
} from "../../../../store/slice/subscriptionPaySlice";
import { useDispatch } from "react-redux";

const SelectUpi = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [selectedApp, setSelectedApp] = useState(null);
  const [upiIdInput, setUpiIdInput] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [validated, setValidated] = useState(false);

  const upiApps = ["Apple Pay", "Paypal"];

  const handleAppSelect = (app) => {
    setSelectedApp(app);
    dispatch(setSelectedUpiApp(app));
  };

  const handleUpiIdChange = (e) => {
    setUpiIdInput(e.target.value);
    dispatch(setUpiId(e.target.value));
  };

  const handleNextClick = (e) => {
    e.preventDefault();
    const formIsValid = selectedApp && upiIdInput && acceptedTerms;

    if (formIsValid) {
      navigate("/confirmUpi");
    } else {
      setValidated(true);
    }
  };

  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleNextClick}
      className={SignupUpistyle.SelectContainer}
    >
      <h4 className={`${SignupUpistyle.heading} text-center mb-4 fw-semibold`}>
        Sign up UPI Pay
      </h4>

      <div className="d-flex justify-content-center align-items-center flex-column">
        <p className={`${SignupUpistyle.text} mb-6 `}>
          You can modify the active payment at any time through your settings.
        </p>

        <Card className={`w-50 ${SignupUpistyle.cardWrapper} ${
              validated && !selectedApp ? "is-invalid border-danger" : ""
            }`}>
          <Dropdown
            onSelect={handleAppSelect}
            className={`${SignupUpistyle.upiMenu}`}
          >
            <Dropdown.Toggle
              variant="link"
              className={`text-dark p-0 d-flex align-items-center ${SignupUpistyle.noCaret}`}
              style={{ textDecoration: "none" }}
            >
              <span className={SignupUpistyle.DropdownText}>
                {selectedApp || "Select your UPI app"}
              </span>
              <IoIosArrowDown size={22} />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {upiApps.map((app) => (
                <Dropdown.Item key={app} eventKey={app}>
                  {app}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Card>
        {validated && !selectedApp && (
          <div className="text-danger mt-1">Please select a UPI app.</div>
        )}

        <Form.Group controlId="upiIdInput" className="w-50 mt-3">
          <Form.Control
            required
            type="text"
            placeholder="Enter your UPI id"
            value={upiIdInput}
            onChange={handleUpiIdChange}
            className={SignupUpistyle.cardWrapper}
          />
          <Form.Control.Feedback type="invalid">
            Please enter your UPI ID.
          </Form.Control.Feedback>
        </Form.Group>
      </div>

      <Form.Group
        className="d-flex justify-content-center mt-4"
        controlId="confirmCheck"
      >
        <div className="w-50 d-flex">
          <Form.Check
            required
            className={`${SignupUpistyle.check} me-2 mt-1`}
            type="checkbox"
            id="confirmCheck"
            checked={acceptedTerms}
            isInvalid={!acceptedTerms && validated}
            onChange={(e) => setAcceptedTerms(e.target.checked)}
          />
          <Form.Label
            htmlFor="confirmCheck"
            className={SignupUpistyle.termsLabel}
          >
            By confirming, you authorize the platform to charge the selected
            payment method for the subscription plan, including any applicable
            taxes or fees.
          </Form.Label>
        </div>
        {/* <Form.Control.Feedback type="invalid" className="d-block ms-2">
            You must accept the terms.
          </Form.Control.Feedback> */}
      </Form.Group>

      <div className="d-flex justify-content-center align-items-center mt-3">
        <Button
          type="submit"
          variant="flat"
          className={SignupUpistyle.buttonResponsive}
        >
          Next
        </Button>
      </div>
    </Form>
  );
};

export default SelectUpi;
