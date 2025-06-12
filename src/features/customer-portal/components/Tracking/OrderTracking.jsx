import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "../../../../lib/common/css/orderTracking/OrderTracking.module.css";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

// Group items by name
const groupItems = (items) => {
  const grouped = {};
  items.forEach(({ name, price }) => {
    if (!grouped[name]) grouped[name] = { count: 0, total: 0 };
    grouped[name].count += 1;
    grouped[name].total += price;
  });
  return grouped;
};

const OrderTracking = () => {
  const navigate = useNavigate();

  const {
    items = [],
    bikePosition = 0,
    orderNumber = "N/A",
    createdAt = "N/A",
    lastUpdate = "N/A",
    onTimeMessage = "",
    vatPercentage = 18,
    deliveryFee = 2.5,
  } = useSelector((state) => state.orders.orderMeta || {});

  const groupedItems = groupItems(items);

  const subtotal = Object.values(groupedItems).reduce(
    (acc, item) => acc + item.total,
    0
  );
  const vatAmount = (subtotal * vatPercentage) / 100;
  const totalAmount = (subtotal + vatAmount + deliveryFee).toFixed(2);

  useEffect(() => {
    console.log("🛒 Order Meta Items:", items);
  }, [items]);

  return (
    <div className={styles.OrderCon}>
      <header className={styles.orderHeader}>
        <h2>Order Summary</h2>
      </header>

      <div className={styles.trackingContainer}>
        {/* Left Section */}
        <div className={styles.leftSection}>
          <div className={styles.progressSection}>
            <div
              className={styles.bike}
              style={{
                left: `calc(${bikePosition}% - 0.2rem)`,
                marginLeft: bikePosition >= 90 ? "-3rem" : null,
              }}
            />
            <Icon
              icon="fluent-emoji:house"
              width="30"
              height="30"
              className={styles.houseIcon}
            />
            <div className={styles.progressBar}>
              <div
                className={styles.progressFill}
                style={{ width: `${bikePosition}%` }}
              />
              <div className={styles.circleCon}>
                {[0, 50, 100].map((pos) => (
                  <span
                    key={pos}
                    className={styles.circle}
                    style={{
                      backgroundColor: bikePosition >= pos ? "#F2BE23" : "gray",
                    }}
                  />
                ))}
              </div>
            </div>
            <div className={styles.progressLabels}>
              <span className="green">Order placed</span>
              <span style={{ color: bikePosition >= 50 ? "green" : "gray" }}>
                Order processed
              </span>
              <span style={{ color: bikePosition >= 100 ? "green" : "gray" }}>
                Order delivered
              </span>
            </div>
          </div>

          {/* Order Info */}
          <div className={styles.orderDetails}>
            <h4>Making Your Order</h4>
            <div className={styles.updateTime}>
              <div>
                {[
                  {
                    label: "Order Number",
                    value: (
                      <span className={styles.highlight}>{orderNumber}</span>
                    ),
                  },
                  { label: "Created At", value: createdAt },
                  { label: "Last Update", value: lastUpdate },
                ].map(({ label, value }) => (
                  <div key={label} className={styles.NumberCon}>
                    <p className={styles.ValueCon}>{label}</p>
                    <p>: {value}</p>
                  </div>
                ))}
              </div>
              <div className={styles.rightDetails}>
                <p className={styles.onTime}>{onTimeMessage}</p>
                <button
                  className={styles.trackOrderButton}
                  onClick={() => navigate("/trackingDetails")}
                >
                  Track Order
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Items Summary */}
        <div className={styles.rightSection}>
          <div className={styles.totalItems}>
            <center className={styles.sumhead}>Total Items</center>
            <div className={styles.MainScroll}>
              {Object.keys(groupedItems).length === 0 ? (
                <p style={{ padding: "1rem", color: "gray" }}>
                  No items in this order.
                </p>
              ) : (
                <ul className={styles.scrollContainer}>
                  {Object.entries(groupedItems).map(
                    ([name, { count, total }]) => (
                      <li key={name} className={styles.itemCon}>
                        <p>
                          {name} {count > 1 ? `x${count}` : ""}
                        </p>
                        <p>€ {total}</p>
                      </li>
                    )
                  )}
                </ul>
              )}
            </div>

            {/* Summary Footer */}
            <div className={styles.summarySection}>
              <ul className={styles.scrollContainer}>
                <li className={styles.itemCon} style={{ paddingTop: "1rem" }}>
                  <p>Delivery Fees</p>
                  <p>€ {deliveryFee}</p>
                </li>
                <li className={styles.itemCon}>
                  <p>VAT</p>
                  <p>{vatPercentage}%</p>
                </li>
                <li className={styles.itemCon}>
                  <p>
                    <strong>Total Amount</strong>
                  </p>
                  <p>
                    <strong>€ {totalAmount}</strong>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;
