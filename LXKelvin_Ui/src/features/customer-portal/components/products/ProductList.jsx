import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "../../../../lib/common/css/products/Listing.module.css";
import { useSelector } from "react-redux";
import { Const } from "../../../../lib/constants/index";

const ProductList = () => {
  const [productsList, setProducts] = useState([]);
  const { products } = useSelector((state) => state.products);
  const location = useLocation();
  const path = location.pathname.slice(10);
  const quantityOptions = Const?.QTY_OPTIONS;

  const getCategory = () => {
    if (
      location.pathname.includes("vegetables") &&
      location.pathname.includes("seasonal")
    ) {
      return { category: "vegetables", seasonal: true };
    } else if (location.pathname.includes("vegetables")) {
      return { category: "vegetables" };
    } else if (
      location.pathname.includes("fruits") &&
      location.pathname.includes("seasonal")
    ) {
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

  /**
   * This function is need to be change once BE end points are deployed on server
   * @param {*} callByRef
   */
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

  return (
    <div className={styles.listingContainer}>
      <h1 className={styles.pageTitle}>
        {path === "all-categories"
          ? "All Products"
          : `Get Fresh ${path} Delivered Online`}
      </h1>
      <div className={styles.productGrid}>
        {productsList.map((product, index) => (
          <div key={index} className={styles.productCard}>
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
              />
            </div>
            <h2 className={styles.productName}>{product.name}</h2>
            <select className={styles.productQuantity}>
              {quantityOptions.map((q, i) => (
                <option key={i}>{q}</option>
              ))}
            </select>
            <div className={styles.priceSection}>
              <span className={styles.discountPrice}>₹{product.price}</span>
              <span className={styles.originalPrice}>
                ₹{product.originalPrice}
              </span>
            </div>
            {product.stockCount > 0 ? (
              <button className={styles.addToCart}>Add to cart</button>
            ) : (
              <button className={styles.outOfStock}>Out of Stock</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
