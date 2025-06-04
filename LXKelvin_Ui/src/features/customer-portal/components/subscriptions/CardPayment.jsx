import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Setupcardstyle from "../../../../lib/common/css/SubscriptionCards/CardPayment.module.css";
import Form from "react-bootstrap/Form";
import { CiCircleQuestion } from "react-icons/ci";
import { HiOutlineCreditCard } from "react-icons/hi";
import {
  VISA,
  AMEX,
  MASTER_CARD,
} from "../../../../lib/constants/Image_Constants";
import { useDispatch, useSelector } from "react-redux";
import { planNames } from "../../../../lib/constants";
import { confirmSubscription } from "../../../../store/slice/subscriptionPaySlice";
import { useNavigate } from "react-router-dom";

const CardPayment = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { selectedPlanId, price } = useSelector((state) => state.subscription);

  const [validated, setValidated] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    e.preventDefault();

    if (form.checkValidity() === false || !acceptedTerms) {
      e.stopPropagation();
    } else {
      dispatch(confirmSubscription());
      navigate("/my_account");
    }

    setValidated(true);
  };

  return (
    <div className={Setupcardstyle.CardContainer}>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <div className={Setupcardstyle.cardSection}>
          <h4 className={`text-center mb-4 fw-bold ${Setupcardstyle.heading} `}>
            Set Up your Credit Card or debit card
          </h4>

          <div className={`d-flex gap-2 mt-3 ${Setupcardstyle.imgs}`}>
            <img src={VISA} alt="Visa" style={{ height: "100%" }} />
            <img src={AMEX} alt="AMEX" style={{ height: "100%" }} />
            <img
              src={MASTER_CARD}
              alt="MasterCard"
              style={{ height: "100%" }}
            />
          </div>

          <Form.Group
            className="w-100 position-relative mt-2"
            controlId="cardNumber"
          >
            <Form.Control
              required
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={16}
              placeholder="Credit or Debit Card"
              className={`border-1 ${Setupcardstyle.card}`}
            />
            <HiOutlineCreditCard className={Setupcardstyle.cardIcon} />
            <Form.Control.Feedback
              type="invalid"
              className={Setupcardstyle.WarningMessages}
            >
              Please enter a valid card number.
            </Form.Control.Feedback>
          </Form.Group>

          <div className={`d-flex flex-row gap-2 mt-2 ${Setupcardstyle.cards}`}>
            <Form.Group className="w-50" controlId="expiryDate">
              <Form.Control
                required
                type="number"
                maxLength={5}
                placeholder="Expiry date"
                className={`border-1 ${Setupcardstyle.ExpiryContainer}`}
              />
              <Form.Control.Feedback type="invalid">
                Enter expiry date (MM/YY).
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="w-50 position-relative" controlId="cvv">
              <Form.Control
                required
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder="CVV"
                maxLength={3}
                className={`border-1 w-100 ${Setupcardstyle.ExpiryContainer}`}
              />
              <CiCircleQuestion className={Setupcardstyle.CircleIcon} />
              <Form.Control.Feedback type="invalid">
                Enter 3-digit CVV.
              </Form.Control.Feedback>
            </Form.Group>
          </div>

          <Form.Group
            className="w-100 position-relative mt-2"
            controlId="nameOnCard"
          >
            <Form.Control
              required
              type="text"
              placeholder="Name on Card"
              className={`border-1 ${Setupcardstyle.card}`}
            />
            <Form.Control.Feedback
              type="invalid"
              className={Setupcardstyle.WarningMessages}
            >
              Please enter the cardholder's name.
            </Form.Control.Feedback>
          </Form.Group>

          <Card
            className={`mt-2 border-1 ${Setupcardstyle.cardWrapper}`}
            style={{ borderRadius: "1px", background: "#D4E7F380" }}
          >
            <Card.Body>
              <div className="fs-bold text-start ">
                {planNames[selectedPlanId]}
                <div>
                  {price !== null && (
                    <div className="fw-semibold mt-2">&#8364;{price}</div>
                  )}
                </div>
              </div>
            </Card.Body>
          </Card>

          <Form.Group
            className={`mt-4 d-flex align-items-start gap-2 ${Setupcardstyle.checkboxLabel}`}
            controlId="termsCheck"
          >
            <Form.Check
              required
              type="checkbox"
              id="confirmCheck"
              checked={acceptedTerms}
              onChange={(e) => setAcceptedTerms(e.target.checked)}
              style={{ width: "20px", height: "20px" }}
              isInvalid={!acceptedTerms && validated}
            />
            <Form.Label htmlFor="confirmCheck" className={Setupcardstyle.text}>
              I accept{" "}
              <span style={{ color: "blue" }}>terms and conditions</span>
            </Form.Label>
            {/* <Form.Control.Feedback type="invalid" style={{ display: "block" }}>
              You must accept the terms and conditions.
            </Form.Control.Feedback> */}
          </Form.Group>

          <div>
            <button type="submit" className={Setupcardstyle.buttonResponsive}>
              Continue
            </button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default CardPayment;
