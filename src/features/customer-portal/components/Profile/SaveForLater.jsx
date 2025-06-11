import styles from "../../../../lib/common/css/profile/SaveForLater.module.css";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import { removeSavedItem } from "../../../../store/slice/saveLaterSlice";
import { useNavigate } from "react-router-dom";

const SaveForLater = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const { loading } = useSelector((state) => state.saveForLater);
  const savedItems = useSelector((state) => state.savedItems);

  const handleDelete = (id) => {
    dispatch(removeSavedItem(id));
  };

  const handleMoveToCart = (id) => {
    console.log("Move to cart:", id);
  };
  const handleProductClick = (id) => {
    navigate(`/productDetails/${id}`);
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
      {savedItems.length === 0 ? (
        <p>No items saved.</p>
      ) : (
        savedItems.map((item) => (
          <div key={item.id} className={styles.savedCard}>
            <div
              className={styles.imageCon}
              onClick={() => handleProductClick(item.id)}
            >
              <img
                src={item.images[0]}
                alt={item.productName}
                className={styles.productImg}
              />
            </div>
            <div className={styles.productInfo}>
              <h5>{item.productName}</h5>
              <div className={styles.priceRow}>
                <span className={styles.price}>€ {item.offerPrice}</span>
                <span className={styles.originalPrice}>
                  € {item.originalPrice}
                </span>
                <span className={styles.discount}>{item.discount}% off</span>
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
        ))
      )}
    </div>
  );
};
export default SaveForLater;
