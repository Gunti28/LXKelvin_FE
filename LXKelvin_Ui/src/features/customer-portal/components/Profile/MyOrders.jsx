import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "@iconify/react";
import styles from "../../../../lib/common/css/profile/Myorders.module.css";
import { fetchOrders } from "../../../../lib/services/ordersAsyncThunk";
import {imageMap, imageBgColors} from "../../../../lib/constants/Image_Constants"
import { ORDER_STATUS_COLORS } from "../../../../lib/constants/index";

const MyOrders = () => {
  const dispatch = useDispatch();
  const { orders, status, error } = useSelector((state) => state.orders);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchOrders());
    }
  }, [dispatch, status]);

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
        orders.map((order, index) => {
          const statusColor =
            ORDER_STATUS_COLORS[order.status] || ORDER_STATUS_COLORS.Default;
          return (
            <div className={styles.orderCard} key={index}>
              <div className={styles.orderInfo}>
                <div className={styles.orderLeft}>
                  <div className={styles.orderId}>
                    Order ID:
                    <span style={{ color: statusColor, marginLeft: 6 }}>
                      {order.id}
                    </span>
                  </div>
                  <div className={styles.itemsRow}>
                    {order.items.map((itemName, idx) => (
                      <div
                        className={styles.imageCon}
                        key={idx}
                        style={{
                          backgroundColor:
                            imageBgColors[itemName] || "#f0f0f0",
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
                  <div className={styles.statusText} style={{ color: statusColor }}>
                    {order.status}
                  </div>
                  <div className={styles.dateText} style={{ color: statusColor }}>
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
                      style={{ color: ORDER_STATUS_COLORS.Default }}
                    />
                  </button>
                  <div className={styles.price} style={{ color: statusColor }}>
                    {order.price}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default MyOrders;