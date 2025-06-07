import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "../../../../lib/common/css/products/Listing.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Const } from "../../../../lib/constants/index";
import { addToCart } from "../../../../../src/store/slice/cartSlice";

const ProductList = () => {
  const [productsList, setProducts] = useState([]);
  const [selectedQuantities, setSelectedQuantities] = useState({});
  const [selectedWeights, setSelectedWeights] = useState({});

import OverLayLoader from "../overLayLoader/OverLayLoader";
const ListingComponent = () => {
  /**
   * call store object with using of selectors
   */
  const { products } = useSelector((state) => state.products);
  const { items: cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const location = useLocation();
  const path = location.pathname.slice(10);
  // const quantityOptions = Const?.QTY_OPTIONS || ["1", "2", "3", "4", "5"];
  const navigate = useNavigate();
  /**
   * we need to add changes on loaderCategories once service is placed
   */
  const [loaderCategories, serLoaderCategories] = useState(true);

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

  useEffect(() => {
    setProducts(products);
    fetchData(products);
  }, [products, location.pathname]);

  useEffect(() => {
    const initialQuantities = {};
    const initialWeights = {};
    productsList.forEach((p) => {
      initialQuantities[p.id] = 1;
      const weights = Object.keys(p.priceByWeight || {});
      initialWeights[p.id] = weights.length > 0 ? weights[0] : null;
    });
    setSelectedQuantities(initialQuantities);
    setSelectedWeights(initialWeights);
  }, [productsList]);

  const fetchData = (callByRef) => {
    const filter = getCategory();
    let filteredProducts = callByRef;

    if (filter.category) {
      filteredProducts = filteredProducts.filter(
        (p) => p.category === filter.category
      );
    }
    if (filter.seasonal !== undefined) {
      filteredProducts = filteredProducts.filter(
        (p) => p.isSeasonal === filter.seasonal
      );
    }
    setProducts(filteredProducts);
  };

  // const onQuantityChange = (productId, value) => {
  //   setSelectedQuantities((prev) => ({
  //     ...prev,
  //     [productId]: parseInt(value, 10),
  //   }));
  // };

  const onWeightChange = (productId, value) => {
    setSelectedWeights((prev) => ({
      ...prev,
      [productId]: value,
    }));
  };

  const getCartQuantity = (id, weight) => {
    const item = cartItems.find(
      (item) => item.id === id && item.selectedWeight === weight
    );
    return item ? item.quantity : 0;
  };
    /**
     * this TimeOut function we need to re-wramp once service is in place
     */
    serLoaderCategories(true);
    setTimeout(() => {
      serLoaderCategories(false);
    }, 1500);
  }, [products]);

  const filteredProducts =
    path === "products/all-categories"
      ? productsList
      : productsList.filter(
          (p) => p.category.toLowerCase() === path.toLowerCase()
        );
  const handleProductClick = (id) => {
    navigate(`/productDetails/${id}`);
  };

  return (
    <div className={styles.listingContainer}>
      <h1 className={styles.pageTitle}>
    <div className={ListingStyle.listingContainer}>
      <OverLayLoader isLoader={loaderCategories} />
      <h1 className={ListingStyle.pageTitle}>
        {path === "all-categories"
          ? "All Products"
          : `Get Fresh ${path} Delivered Online`}
      </h1>
      <div className={styles.productGrid}>
        {productsList.map((product) => {
          const selectedQty = selectedQuantities[product.id] || 1;
          const selectedWeight =
            selectedWeights[product.id] ||
            Object.keys(product.priceByWeight || {})[0] ||
            null;

          const priceByWeight = selectedWeight
            ? product.priceByWeight?.[selectedWeight] || product.price
            : product.price;

          const qtyInCart = getCartQuantity(product.id, selectedWeight);
          const disableAdd = product.stockCount === 0;

          return (
            <div key={product.id} className={styles.productCard}>
              <div
                className={styles.imgCon}
                style={{
                  backgroundColor: product.Colour,
                  filter: disableAdd ? "grayscale(100%)" : "none",
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

              {disableAdd ? (
                <button className={styles.outOfStock} disabled>
                  Out of Stock
                </button>
              ) : qtyInCart > 0 ? (
                <div className={styles.quantityControls}>
                  <button
                    className={styles.qtyButton}
                    onClick={() =>
                      dispatch(
                        addToCart({
                          ...product,
                          selectedWeight,
                          priceByWeight: product.priceByWeight,
                          quantityChange: -1,
                        })
                      )
                    }
                  >
                    -
                  </button>
                  <span className={styles.qtyValue}>{qtyInCart}</span>
                  <button
                    className={styles.qtyButton}
                    onClick={() =>
                      dispatch(
                        addToCart({
                          ...product,
                          selectedWeight,
                          priceByWeight: product.priceByWeight,
                          quantityChange: 1,
                        })
                      )
                    }
                  >
                    +
                  </button>
                </div>
              ) : (
                <button
                  className={styles.addToCart}
                  onClick={() =>
                    dispatch(
                      addToCart({
                        ...product,
                        selectedWeight,
                        quantity: selectedQty,
                        price: priceByWeight,
                      })
                    )
                  }
                >
                  Add to Cart
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
