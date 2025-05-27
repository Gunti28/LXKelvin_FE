import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "@iconify/react";
import styles from "../../../../lib/common/css/profile/Myorders.module.css";
import kiwi from "/src/lib/common/assets/images/kiwi.svg";
import tomato from "/src/lib/common/assets/images/tomato.svg";
import banana from "/src/lib/common/assets/images/banana.svg";

import { fetchOrders } from "../../../../lib/services/ordersAsyncThunk";

const MyOrders = () => {
  const dispatch = useDispatch();
  const { orders, status, error } = useSelector((state) => state.orders);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchOrders());
    }
  }, [dispatch, status]);

  const imageMap = {
    tomato,
    banana,
    kiwi,
  };

  const imageBgColors = {
    tomato: "#F7B18C",
    banana: "#EDD251",
    kiwi: "#929C69",
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

      {status === "loading" && <p>Loading orders...</p>}
      {status === "failed" && <p>Error: {error}</p>}

      {status === "succeeded" &&
        orders.map((order, index) => (
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
                  {order.items.map((itemName, idx) => (
                    <div
                      className={styles.imageCon}
                      key={idx}
                      style={{
                        backgroundColor: imageBgColors[itemName] || "#f0f0f0",
                      }}
                    >
                      <img
                        src={imageMap[itemName]}
                        alt={`item-${itemName}`}
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
                <div
                  className={styles.price}
                  style={{
                    color:
                      order.status === "Cancelled"
                        ? "#ff0000"
                        : order.status === "Delivered"
                        ? "darkgreen"
                        : "#5B5F62",
                  }}
                >
                  {order.price}
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default MyOrders;