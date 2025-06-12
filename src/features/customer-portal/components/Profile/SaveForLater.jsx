import { useEffect } from "react";
import styles from "../../../../lib/common/css/profile/SaveForLater.module.css";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchProducts } from "../../../../lib/services/productsAsyncThunk";
import { addToCart } from "../../../../store/slice/cartSlice";
import { removeSavedItem } from "../../../../store/slice/saveLaterSlice";

const SaveForLater = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products, status } = useSelector((state) => state.products);

  const savedItemIds = useSelector((state) => state.savedItems);

  const savedItems = products.filter((p) =>
    savedItemIds.some((item) => item.id === p.id)
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(removeSavedItem(id));
  };

  const handleMoveToCart = (item) => {
    dispatch(addToCart(item));
    dispatch(removeSavedItem(item.id));
  };

  const handleProductClick = (id) => {
    navigate(`/productDetails/${id}`);
  };

  if (status === "loading") return <p>Loading...</p>;
  if (savedItems.length === 0) return <p>No items saved.</p>;

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
            onClick={() => handleProductClick(item.id)}
            style={{ backgroundColor: item.Colour }}
          >
            <img
              src={item.image}
              alt={item.productName}
              className={styles.productImg}
            />
          </div>
          <div className={styles.productInfo}>
            <h5>{item.productName}</h5>
            <div className={styles.priceRow}>
              <span className={styles.price}>€ {item.price}</span>
              <span className={styles.originalPrice}>
                € {item.originalPrice}
              </span>
              <span className={styles.discount}>{item.discount}% off</span>
            </div>
            <button
              className={styles.moveBtn}
              onClick={() => handleMoveToCart(item)}
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
