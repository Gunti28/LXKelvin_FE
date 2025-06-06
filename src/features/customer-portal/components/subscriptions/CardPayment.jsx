import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import SetupCardStyle from "../../../../lib/common/css/SubscriptionCards/CardPayment.module.css";
import Form from "react-bootstrap/Form";
import { CiCircleQuestion } from "react-icons/ci";
import { HiOutlineCreditCard } from "react-icons/hi";

import { IMAGES } from "../../../../lib/constants/Image_Constants";
import { useDispatch, useSelector } from "react-redux";
import { planNames } from "../../../../lib/constants";
import {
  confirmSubscription,
  setCardDetails,
} from "../../../../store/slice/subscriptionPaySlice";
import { useNavigate } from "react-router-dom";

const CardPayment = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");

  const { selectedPlanId, price } = useSelector((state) => state.subscription);

  const [validated, setValidated] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    e.preventDefault();

    if (form.checkValidity() === false || !acceptedTerms) {
      e.stopPropagation();
    } else {
      dispatch(
        setCardDetails({
          number: cardNumber,
          expiry: expiryDate,
          cvv: cvv,
          name: nameOnCard,
        })
      );

      dispatch(confirmSubscription());
      navigate("/vipSuccess");
    }

    setValidated(true);
  };

  return (
    <div className={SetupCardStyle.CardContainer}>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <div className={SetupCardStyle.cardSection}>
          <h4 className={`text-center mb-4 fw-bold ${SetupCardStyle.heading} `}>
            Set Up your Credit Card or debit card
          </h4>

          <div className={`d-flex gap-2 mt-3 ${SetupCardStyle.imgs}`}>

            <img src={IMAGES.visa} alt="Visa" style={{ height: "100%" }} />
            <img src={IMAGES.amex} alt="AMEX" style={{ height: "100%" }} />
            <img
              src={IMAGES.masterCard}
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
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              className={`border-1 ${SetupCardStyle.card}`}
            />
            <HiOutlineCreditCard className={SetupCardStyle.cardIcon} />
            <Form.Control.Feedback
              type="invalid"
              className={SetupCardStyle.WarningMessages}
            >
              Please enter a valid card number.
            </Form.Control.Feedback>
          </Form.Group>

          <div className={`d-flex flex-row gap-2 mt-2 ${SetupCardStyle.cards}`}>
            <Form.Group className="w-50" controlId="expiryDate">
              <Form.Control
                required
                type="number"
                maxLength={5}
                placeholder="Expiry date"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                className={`border-1 ${SetupCardStyle.ExpiryContainer}`}
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
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                className={`border-1 w-100 ${SetupCardStyle.ExpiryContainer}`}
              />
              <CiCircleQuestion className={SetupCardStyle.CircleIcon} />
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
              value={nameOnCard}
              onChange={(e) => setNameOnCard(e.target.value)}
              className={`border-1 ${SetupCardStyle.card}`}
            />
            <Form.Control.Feedback
              type="invalid"
              className={SetupCardStyle.WarningMessages}
            >
              Please enter the cardholder's name.
            </Form.Control.Feedback>
          </Form.Group>

          <Card
            className={`mt-2 border-1 ${SetupCardStyle.cardWrapper}`}
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
            className={`mt-4 d-flex align-items-start gap-2 ${SetupCardStyle.checkboxLabel}`}
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
            <Form.Label htmlFor="confirmCheck" className={SetupCardStyle.text}>
              I accept{" "}
              <span style={{ color: "blue" }}>terms and conditions</span>
            </Form.Label>
            {/* <Form.Control.Feedback type="invalid" style={{ display: "block" }}>
              You must accept the terms and conditions.
            </Form.Control.Feedback> */}
          </Form.Group>

          <div>
            <button type="submit" className={SetupCardStyle.buttonResponsive}>
              Continue
            </button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default CardPayment;
