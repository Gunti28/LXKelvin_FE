import React, { useEffect } from "react";
import styles from "../../../../lib/common/css/profile/SaveForLater.module.css";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSavedItems } from "../../../../lib/services/saveForLaterAsyncThunk";

const SaveForLater = () => {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.saveForLater);

  useEffect(() => {
    dispatch(fetchSavedItems());
  }, [dispatch]);

  const handleDelete = (id) => {
    console.log("Delete item:", id);
  };

  const handleMoveToCart = (id) => {
    console.log("Move to cart:", id);
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className={styles.SaveCon}>
      <div className={styles.headerCon}>
        <div className={styles.titleSection}>
          <div className={styles.IconCon}>
            <Icon
              icon="mynaui:heart-solid"
              width="54"
              height="54"
              style={{ color: "#E1712B" }}
              className={styles.MainIcon}
            />
          </div>
          <h2 className={styles.heading}>Save for later</h2>
        </div>
        <p className={styles.addNew}>items</p>
      </div>

      {items.map((item) => (
        <div key={item.id} className={styles.savedCard}>
          <div
            className={styles.imageCon}
            style={{ backgroundColor: item.bgColor }}
          >
            <img
              src={item.image}
              alt={item.name}
              className={styles.productImg}
            />
          </div>
          <div className={styles.productInfo}>
            <h5>{item.name}</h5>
            <div className={styles.rating}>
              {item.rating}
              <Icon
                icon="material-symbols:star-rounded"
                width="11"
                height="11"
              />
            </div>
            <div className={styles.priceRow}>
              <span className={styles.price}>€ {item.price}</span>
              <span className={styles.originalPrice}>
                € {item.originalPrice}
              </span>
              <span className={styles.discount}>{item.discount}</span>
            </div>
            <button
              className={styles.moveBtn}
              onClick={() => handleMoveToCart(item.id)}
            >
              Move to cart
            </button>
          </div>
          <button
            className={styles.deleteBtn}
            onClick={() => handleDelete(item.id)}
          >
            <Icon
              icon="weui:delete-outlined"
              width="30"
              height="30"
              style={{ color: "#5B5F62" }}
            />
          </button>
        </div>
      ))}
    </div>
  );
};

export default SaveForLater;
