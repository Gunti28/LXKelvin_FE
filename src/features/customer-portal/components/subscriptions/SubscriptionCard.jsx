import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardStyle from "../../../../lib/common/css/SubscriptionCards/SubscriptionCards.module.css";
import { MdOutlineEuroSymbol } from "react-icons/md";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlans } from "../../../../lib/services/subscriptionCardAsyncThunk";
import { useLocation, useNavigate } from "react-router-dom";
import {
  setSelectedPlanId,
  setPrice,
} from "../../../../store/slice/subscriptionPaySlice";

const SubscriptionCards = () => {
  const dispatch = useDispatch();
  const { plans, loading, error } = useSelector((state) => state.plans);
  const navigate = useNavigate();
  const location = useLocation();
  const highlightIndex = location.state?.highlightIndex;

  useEffect(() => {
    dispatch(fetchPlans());
  }, [dispatch]);

  const handlePlanSelect = (planId, price) => {
    dispatch(setSelectedPlanId(planId));
    dispatch(setPrice(price));
    navigate("/choosePayment");
  };

  if (loading) return <p>Loading plans...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div className={CardStyle.MainContainer}>
      <h4 className="text-center mb-4 fw-bold">
        Choose the plan thats right for you
      </h4>
      <div className={CardStyle.CardContainer}>
        {plans.map((plan, index) => (
          <div className={CardStyle.card} key={index}>
            <Card
              className={`me-1 mb-1 h-100 text-center border-2 shadow-lg rounded-3 d-flex flex-column pt-4 ${
                CardStyle.CardHover
              } ${index === highlightIndex ? CardStyle.highlight : ""}`}
            >
              <div className="d-flex justify-content-center mb-3">
                <Button className="bg-white text-dark fw-400 border-dark px-4">
                  {plan.title}
                </Button>
              </div>
              <Card.Body className="flex-grow-1 d-flex flex-column">
                <Card.Title className={CardStyle.cardPrice}>
                  <MdOutlineEuroSymbol className="pb-2" />
                  {plan.price}
                </Card.Title>
                <Card.Text className="text-muted">{plan.Name}</Card.Text>
                <Card.Text className="flex-grow-1">
                  <ul className={`${CardStyle.listed} text-start content`}>
                    {plan.features.map((feature, i) => (
                      <li
                        key={i}
                        className={`${CardStyle.contentFont} d-flex align-items-center`}
                      >
                        <IoCheckmarkCircleOutline
                          color="green"
                          className="me-4"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card.Text>

                <Button
                  className={`${CardStyle.custombutton} w-100`}
                  style={{
                    background: plan.buttonColor.includes("linear")
                      ? undefined
                      : plan.buttonColor,
                    backgroundImage: plan.buttonColor.includes("linear")
                      ? plan.buttonColor
                      : undefined,
                    color: plan.buttonTextColor || "#000",
                    border: "none",
                  }}
                  onClick={() => handlePlanSelect(plan.plan_id, plan.price)}
                >
                  Select Plan
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionCards;
