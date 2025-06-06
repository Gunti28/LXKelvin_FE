import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchOrderSummary,
  setPaymentMethod,
} from "../../../../store/slice/orderSummarySlice";
import styles from "../../../../lib/common/css/cart/OrderSummary.module.css";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import {
  AMEX,
  APPLE_PAY,
  MASTER_CARD,
  PAYPAL,
  VISA,
} from "../../../../lib/constants/Image_Constants";
const OrderSummery = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    address,
    selectedPaymentMethod,
    itemsPrice,
    deliveryCharges,
    vatRate,
    promotionDiscount,
    loading,
    error,
  } = useSelector((state) => state.orderSummary);

  useEffect(() => {
    dispatch(fetchOrderSummary());
  }, [dispatch]);

  const handleChange = (e) => {
    const value = e.target.value;
    dispatch(setPaymentMethod(value));
  };

  const handleProceed = () => {
    if (selectedPaymentMethod === "card") {
      navigate("/cardPayment");
    } else if (selectedPaymentMethod === "net") {
      navigate("/upiPayment");
    } else if (selectedPaymentMethod === "cash") {
      alert("Cash on Delivery selected. Order placed successfully!");
    } else {
      alert("Please select a payment method.");
    }
  };

  const vatAmount = (itemsPrice + deliveryCharges) * (vatRate / 100);
  const total = itemsPrice + deliveryCharges + vatAmount;
  const totalPayable = total - promotionDiscount;
  const savings = promotionDiscount;

  if (loading) return <p>Loading order summary...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={styles.SummCon}>
      <div className={styles.TopCon}>
        <p className={styles.DelHeading}>Delivery Address</p>
        <div className={styles.AddCon}>
          <p className={styles.AddText}>
            {address.name}, {address.address}, {address.landmark},{" "}
            {address.city}, {address.state}.
          </p>
          <button
            className={styles.ChangeBtn}
            onClick={() => navigate("/deliveryaddress")}
          >
            Change
          </button>
        </div>
      </div>

      <div className={styles.BottomCon}>
        <div className={styles.BtmLeft}>
          <p className={styles.selectText}>Select a Payment method</p>
          <div className={styles.RadioCon}>
            {[
              {
                label: "Credit or debit card",
                value: "card",
                icons: [VISA, AMEX, MASTER_CARD],
              },
              {
                label: "Net Banking",
                value: "net",
                icons: [PAYPAL, APPLE_PAY],
              },
              {
                label: "Cash on delivery",
                value: "cash",
                icons: [],
              },
            ].map(({ label, value, icons }) => (
              <div key={value} className={styles.radioGroup}>
                <label>
                  <input
                    type="radio"
                    value={value}
                    checked={selectedPaymentMethod === value}
                    onChange={handleChange}
                    className={styles.customRadio}
                  />

                  <p className={styles.radioText}>{label}</p>
                  <div className={styles.cardImgCon}>
                    {icons.map((icon, index) => (
                      <img
                        key={index}
                        src={icon}
                        alt={label}
                        className={styles.cardImg}
                      />
                    ))}
                  </div>
                </label>
              </div>
            ))}
          </div>
          <button className={styles.ProBtn} onClick={handleProceed}>
            Proceed
          </button>
        </div>

        <div className={styles.BtmRight}>
          <div className={styles.card}>
            <div className={styles.couponHeader}>
              <div className={styles.couponHeading}>
                <span className={styles.couponIcon}>
                  <Icon
                    icon="hugeicons:discount"
                    width="24"
                    height="24"
                    className={styles.Applyicon}
                  />
                </span>
                Apply Coupons
                <div className={styles.couponNote}>3 Coupons are available</div>
              </div>
              <button className={styles.viewAll}>View all</button>
            </div>

            <h2 className={styles.heading}>Order Summary</h2>
            <hr />
            <div className={styles.summaryRow}>
              <span>Items :</span>
              <span>€ {itemsPrice.toFixed(2)}</span>
            </div>
            <div className={styles.summaryRow}>
              <span>Delivery Charges :</span>
              <span>€ {deliveryCharges.toFixed(2)}</span>
            </div>
            <div className={styles.summaryRow}>
              <span>VAT :</span>
              <span>{vatRate}%</span>
            </div>
            <div className={styles.summaryRow}>
              <span>Total :</span>
              <span>€ {total.toFixed(2)}</span>
            </div>
            <div className={styles.summaryRow}>
              <span>Promotion redeemed :</span>
              <span>- € {promotionDiscount.toFixed(2)}</span>
            </div>
            <div
              className={styles.summaryRow}
              style={{
                borderTop: "1px solid #D9D9D9",
                paddingTop: "1rem",
                marginTop: "1.5rem",
              }}
            >
              <span>Total Amount payable :</span>
              <strong>€ {totalPayable.toFixed(2)}</strong>
            </div>
            <hr />
            <div className={styles.savings}>
              <span>Your Savings :</span>
              <span className={styles.savingAmount}>
                € {savings.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummery;
