import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../../../lib/common/css/products/Listing.module.css";
import { Const } from "../../../../lib/constants/index";
import { addToCart } from "../../../../../src/store/slice/cartSlice";

import OverLayLoader from "../overLayLoader/OverLayLoader";
const ProductList = () => {
  const { products } = useSelector((state) => state.products);
  const { items: cartItems } = useSelector((state) => state.cart);

  /**
   * we need to add changes on loaderCategories once service is placed
   */
  const [loaderCategories, serLoaderCategories] = useState(true);

  const location = useLocation();
  const path = location.pathname.slice(10);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedQuantities, setSelectedQuantities] = useState({});
  const [selectedWeights, setSelectedWeights] = useState({});

  const getCategory = () => {
    if (location.pathname.includes("seasonalVegetables")) {
      return { category: "vegetables", seasonal: true };
    } else if (location.pathname.includes("vegetables")) {
      return { category: "vegetables" };
    } else if (location.pathname.includes("seasonalFruits")) {
      return { category: "fruits", seasonal: true };
    } else if (location.pathname.includes("fruits")) {
      return { category: "fruits" };
    } else if (location.pathname.includes("milkProducts")) {
      return { category: "milkProducts" };
    } else {
      return {};
    }
  };

  const filteredProducts = (() => {
  useEffect(() => {
    setProducts(products);
    fetchData(products);
    /**
     * this TimeOut function we need to re-wramp once service is in place
     */
    serLoaderCategories(true);
    setTimeout(() => {
      serLoaderCategories(false);
    }, 1500);
  }, [products, location.pathname]);

  /**
   * This function is need to be change once BE end points are deployed on server
   * @param {*} callByRef
   */
  const fetchData = (callByRef) => {

    const filter = getCategory();
    let filtered = products;

    if (filter.category) {
      filtered = filtered.filter((p) => p.category === filter.category);
    }
    if (filter.seasonal !== undefined) {
      filtered = filtered.filter((p) => p.isSeasonal === filter.seasonal);
    }

    return filtered;
  })();

  useEffect(() => {
    const initialQuantities = {};
    const initialWeights = {};
    filteredProducts.forEach((p) => {
      initialQuantities[p.id] = 1;
      const weights = Object.keys(p.priceByWeight || {});
      initialWeights[p.id] = weights.length > 0 ? weights[0] : null;
    });
    setSelectedQuantities(initialQuantities);
    setSelectedWeights(initialWeights);
  }, [products, location.pathname]);

  const getCartQuantity = (id, weight) => {
    const item = cartItems.find(
      (item) => item.id === id && item.selectedWeight === weight
    );
    return item ? item.quantity : 0;
  };

  const onWeightChange = (productId, value) => {
    setSelectedWeights((prev) => ({
      ...prev,
      [productId]: value,
    }));
  };

  const handleProductClick = (id) => {
    navigate(`/productDetails/${id}`);
  };

  return (
    <div className={styles.listingContainer}>
      <OverLayLoader isLoader={loaderCategories} />
      <h1 className={styles.pageTitle}>
        {path === "all-categories"
          ? "All Products"
          : `Get Fresh ${path} Delivered Online`}
      </h1>
      <div className={styles.productGrid}>
        {filteredProducts.map((product) => {
          const selectedQty = selectedQuantities[product.id] || 1;
          const selectedWeight =
            selectedWeights[product.id] ||
            Object.keys(product.priceByWeight || {})[0] ||
            null;

          const priceByWeight = selectedWeight
            ? product.priceByWeight?.[selectedWeight] || product.price
            : product.price;

          const qtyInCart = getCartQuantity(product.id, selectedWeight);

          return (
            <div key={product.id} className={styles.productCard}>
              <div
                className={styles.imgCon}
                style={{
                  backgroundColor: product.Colour,
                  filter: product.stockCount === 0 ? "grayscale(100%)" : "none",
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className={styles.productImage}
                  onClick={() => handleProductClick(product.id)}
                />
              </div>

              <h2 className={styles.productName}>{product.name}</h2>

              {product.priceByWeight &&
                Object.keys(product.priceByWeight).length > 0 && (
                  <select
                    className={styles.productQuantity}
                    value={selectedWeight || ""}
                    onChange={(e) => onWeightChange(product.id, e.target.value)}
                  >
                    {Object.keys(product.priceByWeight).map((weight) => (
                      <option key={weight} value={weight}>
                        {weight}
                      </option>
                    ))}
                  </select>
                )}

              <div className={styles.priceSection}>
                <span className={styles.discountPrice}>
                  €{priceByWeight * selectedQty}
                </span>
                <span className={styles.originalPrice}>
                  €{product.originalPrice * selectedQty}
                </span>
              </div>

              {product.stockCount > 0 ? (
                qtyInCart > 0 ? (
                  <div className={styles.quantityControls}>
                    <button
                      className={styles.qtyButton}
                      onClick={() => {
                        dispatch(
                          addToCart({
                            ...product,
                            selectedWeight,
                            priceByWeight: product.priceByWeight,
                            quantityChange: -1,
                          })
                        );
                      }}
                    >
                      -
                    </button>
                    <span className={styles.qtyValue}>{qtyInCart}</span>
                    <button
                      className={styles.qtyButton}
                      onClick={() => {
                        dispatch(
                          addToCart({
                            ...product,
                            selectedWeight,
                            priceByWeight: product.priceByWeight,
                            quantityChange: 1,
                          })
                        );
                      }}
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <button
                    className={styles.addToCart}
                    onClick={() => {
                      dispatch(
                        addToCart({
                          ...product,
                          selectedWeight,
                          quantity: selectedQty,
                          price: priceByWeight,
                        })
                      );
                    }}
                  >
                    Add to cart
                  </button>
                )
              ) : (
                <button className={styles.outOfStock} disabled>
                  Out of Stock
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
