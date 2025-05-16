import React, { useState } from "react";
import { Icon } from "@iconify/react";
import styles from "../css/OrderSummery.module.css";
import visa from "../assets/summaryImg/Group 1000004820.jpg";
import amexp from "../assets/summaryImg/logos_amex-digital.jpg";
import appay from "../assets/summaryImg/cib_apple-pay.jpg";
import mascar from "../assets/summaryImg/Group 1000004821.jpg";
import paypal from "../assets/summaryImg/image 591.jpg";

const OrderSummery = () => {
  const [addressList, setAddressList] = useState({
    name: "Rakesh chappali",
    address: "tirumala pg for gents",
    landmark: "2nd cross, kondapur",
    city: "Hyderbad",
    state: "Telangana",
  });
  const [selectedOption, setSelectedOption] = useState("");
  const [itemsPrice, setItemsPrice] = useState(250.76);
  const [deliveryCharges, setDeliveryCharges] = useState(50.06);
  const [vatRate, setVatRate] = useState(14);
  const [promotionDiscount, setPromotionDiscount] = useState(50.76);
  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };
  const vatAmount = (itemsPrice + deliveryCharges) * (vatRate / 100);
  const total = itemsPrice + deliveryCharges + vatAmount;
  const totalPayable = total - promotionDiscount;
  const savings = promotionDiscount;

  return (
    <div className={styles.SummCon}>
      <div className={styles.TopCon}>
        <p className={styles.DelHeading}>Delivery Address</p>
        <div className={styles.AddCon}>
          <p className={styles.AddText}>
            {addressList.name},{addressList.address},{addressList.landmark},
            {addressList.city},{addressList.state}.
          </p>
          <button className={styles.ChangeBtn}>Change</button>
        </div>
      </div>
      <div className={styles.BottomCon}>
        <div className={styles.BtmLeft}>
          <p className={styles.selectText}>Select a Payment method</p>
          <div className={styles.RadioCon}>
            <div className={styles.radioGroup}>
              <label>
                <input
                  type="radio"
                  value="card"
                  checked={selectedOption === "card"}
                  onChange={handleChange}
                  className={styles.customRadio}
                />
                <p className={styles.radioText}>Credit or debit card</p>
                <div className={styles.cardImgCon}>
                  <img src={visa} alt="visa" className={styles.cardImg} />
                  <img
                    src={amexp}
                    alt="american express"
                    className={styles.cardImg}
                  />
                  <img
                    src={mascar}
                    alt="master card"
                    className={styles.cardImg}
                  />
                </div>
              </label>
            </div>

            <div className={styles.radioGroup}>
              <label>
                <input
                  type="radio"
                  value="net"
                  checked={selectedOption === "net"}
                  onChange={handleChange}
                  className={styles.customRadio}
                />
                <p className={styles.radioText}>Net Banking</p>
                <div className={styles.netImgCon}>
                  <img src={paypal} alt="paypal" className={styles.netImg} />
                  <img src={appay} alt="apple pay" className={styles.cardImg} />
                </div>
              </label>
            </div>

            <div className={styles.radioGroup}>
              <label>
                <input
                  type="radio"
                  transform
                  value="cash"
                  checked={selectedOption === "cash"}
                  onChange={handleChange}
                  className={styles.customRadio}
                />
                <p className={styles.radioText}>Cash on delivery</p>
              </label>
            </div>
          </div>
          <button className={styles.ProBtn}>Proceed</button>
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
                </span>{" "}
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
