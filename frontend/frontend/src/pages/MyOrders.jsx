import React from "react";
import styles from "../css/Myorders.module.css";
import { Icon } from "@iconify/react";
import banana from "../assets/OrderIcons/Bitmap.svg";
import tomato from "../assets/OrderIcons/image 31.svg";
import kiwi from "../assets/OrderIcons/image 588.svg";

const MyOrders = () => {
  const orderHistory = [
    {
      id: "AECB142GSEV2845",
      status: "Delivered",
      date: "Delivered on 30th nov 2024, 4:20pm",
      items: [tomato, banana, kiwi,banana,kiwi,tomato,kiwi,banana,kiwi],
      price: "€ 106.30",
      showReorder: true,
    },
    {
      id: "AECB142GSEV2B45",
      status: "Cancelled",
      date: "Cancelled on 30th nov 2024, 4:20pm",
      items: [tomato, kiwi],
      price: "€ 105.38",
      showReorder: false,
    },
    {
      id: "AECB142GSEV2B45",
      status: "Refunded",
      date: "Your refund has been completed",
      items: [banana],
      price: "€ 105.40",
      showReorder: false,
    },
  ];
  const imageBgColors = {
    [tomato]: "#F7B18C",
    [banana]: "#EDD251",
    [kiwi]: "#929C69",
  };
  return (
    <div className={styles.OrderCon}>
      <div className={styles.headerCon}>
        <div className={styles.titleSection}>
          <div className={styles.IconCon}>
            <Icon
              icon="solar:bag-bold"
              width="48"
              height="48"
              style={{ color: "#E1712B" }}
              className={styles.MainIcon}
            />
          </div>
          <h2 className={styles.heading}>My Orders</h2>
        </div>
        <p className={styles.addNew}>History</p>
      </div>

      {orderHistory.map((order, index) => (
        <div className={styles.orderCard} key={index}>
          <div className={styles.orderInfo}>
            <div className={styles.orderLeft}>
              <div className={styles.orderId}>
                Order ID:
                <span
                  style={{
                    color:
                      order.status === "Cancelled"
                        ? "#ff0000"
                        : order.status === "Delivered"
                        ? "darkgreen"
                        : "#5B5F62",
                    marginLeft: 6,
                  }}
                >
                  {order.id}
                </span>
              </div>
              <div className={styles.itemsRow}>
                {order.items.map((img, idx) => (
                  <div
                    className={styles.imageCon}
                    style={{ backgroundColor: imageBgColors[img] || "#f0f0f0" }}
                  >
                    <img
                      key={idx}
                      src={img}
                      alt={`item-${idx}`}
                      className={styles.productImg}
                    />
                  </div>
                ))}
              </div>
              <div
                className={styles.statusText}
                style={{
                  color:
                    order.status === "Cancelled"
                      ? "#ff0000"
                      : order.status === "Delivered"
                      ? "darkgreen"
                      : "#5B5F62",
                }}
              >
                {order.status}
              </div>
              <div
                className={styles.dateText}
                style={{
                  color:
                    order.status === "Cancelled"
                      ? "#ff0000"
                      : order.status === "Delivered"
                      ? "darkgreen"
                      : "#5B5F62",
                }}
              >
                {order.date}
              </div>
            </div>

            <div className={styles.orderRight}>
              <div className={styles.reorderCon}>
                {order.showReorder && (
                  <button className={styles.reorderText}>Re-order</button>
                )}
              </div>
              <button className={styles.arrowbutton}>
                <Icon
                  icon="weui:arrow-filled"
                  width="20"
                  height="40"
                  style={{ color: "#5B5F62" }}
                />
              </button>
              <div className={styles.price}
              style={{
                  color:
                    order.status === "Cancelled"
                      ? "#ff0000"
                      : order.status === "Delivered"
                      ? "darkgreen"
                      : "#5B5F62",
                }}>{order.price}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyOrders;
