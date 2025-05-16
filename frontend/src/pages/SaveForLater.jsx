import React from "react";
import styles from "../css/SaveForLater.module.css";
import { Icon } from "@iconify/react";
import banana from "../assets/SaveforLaterIcons/Bitmap.svg";
import tomato from "../assets/SaveforLaterIcons/image 31.svg";

const savedItems = [
  {
    id: 1,
    name: "Tomato",
    bgColor: "#F7B18C",
    image: tomato,
    rating: 4.2,
    price: 40,
    originalPrice: 52,
    discount: "28% OFF",
  },
  {
    id: 2,
    name: "Banana",
    bgColor: "#EDD251",
    image: banana,
    rating: 4.1,
    price: 40,
    originalPrice: 52,
    discount: "28% OFF",
  },
];
const SaveForLater = () => {
  const handleDelete = (id) => {
    console.log("Delete item:", id);
  };

  const handleMoveToCart = (id) => {
    console.log("Move to cart:", id);
  };
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

      {savedItems.map((item) => (
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
