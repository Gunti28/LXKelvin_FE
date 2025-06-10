import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPaymentMethod } from "../../../../store/slice/orderSummarySlice";
import styles from "../../../../lib/common/css/cart/OrderSummary.module.css";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { Const, ORDER_CONSTANTS } from "../../../../lib/constants/index";
import { addOrder } from "../../../../store/slice/orderSlice";
import { clearCart } from "../../../../store/slice/cartSlice";
const OrderSummery = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deliveryAddress = useSelector(
    (state) => state.deliveryAddress.currentAddress
  );
  const cartItems = useSelector((state) => state.cart.items);
  const selectedPaymentMethod = useSelector(
    (state) => state.orderSummary.selectedPaymentMethod
  );

  const { DELIVERY_CHARGES, VAT_RATE, getPromotionDiscount } = ORDER_CONSTANTS;

  useEffect(() => {
    if (!deliveryAddress?.houseNo) {
      navigate("/deliveryAddress");
    }
  }, [deliveryAddress, navigate]);

  const handleChange = (e) => {
    dispatch(setPaymentMethod(e.target.value));
  };

  const handleProceed = () => {
    if (selectedPaymentMethod === "card") {
      const itemsPrice = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      const promotionDiscount = getPromotionDiscount(itemsPrice);
      const deliveryCharges = DELIVERY_CHARGES;
      const vatAmount = (itemsPrice + deliveryCharges) * (VAT_RATE / 100);
      const total = itemsPrice + deliveryCharges + vatAmount;
      const totalPayable = total - promotionDiscount;

      const newOrder = {
        id: Date.now(),
        items: cartItems,
        deliveryAddress,
        paymentMethod: selectedPaymentMethod,
        itemsPrice,
        promotionDiscount,
        deliveryCharges,
        vatAmount,
        totalPayable,
        orderDate: new Date().toISOString(),
        status: "Pending",
      };

      dispatch(addOrder(newOrder));
      dispatch(clearCart());
      navigate("/orderCardPayment");
    } else if (selectedPaymentMethod === "net") {
      const itemsPrice = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      const promotionDiscount = getPromotionDiscount(itemsPrice);
      const deliveryCharges = DELIVERY_CHARGES;
      const vatAmount = (itemsPrice + deliveryCharges) * (VAT_RATE / 100);
      const total = itemsPrice + deliveryCharges + vatAmount;
      const totalPayable = total - promotionDiscount;

      const newOrder = {
        id: Date.now(),
        items: cartItems,
        deliveryAddress,
        paymentMethod: selectedPaymentMethod,
        itemsPrice,
        promotionDiscount,
        deliveryCharges,
        vatAmount,
        totalPayable,
        orderDate: new Date().toISOString(),
        status: "Order Placed",
      };

      dispatch(addOrder(newOrder));
      dispatch(clearCart());

      navigate("/orderUpiPayment");
    } else if (selectedPaymentMethod === "cash") {
      const itemsPrice = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      const promotionDiscount = getPromotionDiscount(itemsPrice);
      const deliveryCharges = DELIVERY_CHARGES;
      const vatAmount = (itemsPrice + deliveryCharges) * (VAT_RATE / 100);
      const total = itemsPrice + deliveryCharges + vatAmount;
      const totalPayable = total - promotionDiscount;

      const newOrder = {
        id: Date.now().toString(),
        items: cartItems.map((item) => item.name),
        deliveryAddress,
        paymentMethod: selectedPaymentMethod,
        price: `€ ${totalPayable.toFixed(2)}`,
        date: `Placed on ${new Date().toLocaleDateString()}, ${new Date().toLocaleTimeString()}`,
        status: "Pending",
        showReorder: true,
      };

      dispatch(addOrder(newOrder));
      dispatch(clearCart());

      alert("Cash on Delivery selected. Order placed successfully!");
    } else {
      alert("Please select a payment method.");
    }
  };

  const hasItems = cartItems.length > 0;

  const itemsPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const promotionDiscount = hasItems ? getPromotionDiscount(itemsPrice) : 0;
  const deliveryCharges = hasItems ? DELIVERY_CHARGES : 0;
  const vatAmount = hasItems
    ? (itemsPrice + deliveryCharges) * (VAT_RATE / 100)
    : 0;
  const total = itemsPrice + deliveryCharges + vatAmount;
  const totalPayable = total - promotionDiscount;
  const savings = promotionDiscount;

  return (
    <div className={styles.SummCon}>
      <div className={styles.TopCon}>
        <p className={styles.DelHeading}>Delivery Address</p>
        <div className={styles.AddCon}>
          <p className={styles.AddText}>
            {deliveryAddress.houseNo}, {deliveryAddress.landMark},{" "}
            {deliveryAddress.city}, {deliveryAddress.state} -{" "}
            {deliveryAddress.pincode}
          </p>
          <button
            className={styles.ChangeBtn}
            onClick={() => navigate("/deliveryAddress")}
          >
            Change
          </button>
        </div>
      </div>

      <div className={styles.BottomCon}>
        <div className={styles.BtmLeft}>
          <p className={styles.selectText}>Select a Payment method</p>
          <div className={styles.RadioCon}>
            {Const.PAYMENT_OPTIONS.map(({ label, value, icons }) => (
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
              <span>€ {DELIVERY_CHARGES.toFixed(2)}</span>
            </div>
            <div className={styles.summaryRow}>
              <span>VAT :</span>
              <span>{VAT_RATE}%</span>
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
