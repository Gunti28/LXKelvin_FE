import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from "../../../../lib/common/css/products/Listing.module.css";
import productsData from "../../../../lib/common/mocks/products.json";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const path = location.pathname.slice(10);
  const quantityOptions = ["500g", "1kg", "2kg"];

  const getCategory = () => {
    if (location.pathname.includes("vegetables") && location.pathname.includes("seasonal")) {
      return { category: "vegetables", seasonal: true };
    } else if (location.pathname.includes("vegetables")) {
      return { category: "vegetables" };
    } else if (location.pathname.includes("fruits") && location.pathname.includes("seasonal")) {
      return { category: "fruits", seasonal: true };
    } else if (location.pathname.includes("fruits")) {
      return { category: "fruits" };
    } else if (location.pathname.includes("milk-products")) {
      return { category: "milk-products" };
    } else {
      return {};
    }
  };

  useEffect(() => {
    const fetchData = () => {
      const filter = getCategory();
      let filteredProducts = productsData.products;

      if (filter.category) {
        filteredProducts = filteredProducts.filter(p => p.category === filter.category);
      }
      if (filter.seasonal !== undefined) {
        filteredProducts = filteredProducts.filter(p => p.isSeasonal === filter.seasonal);
      }

      setProducts(filteredProducts);
    };

    fetchData();
  }, [location.pathname]);


  return (
    <div  className={styles.listingContainer}>
            <h1 className={styles.pageTitle}>{path === "all-categories" ? "All Products" : `Get Fresh ${path} Delivered Online`}</h1>
      <div className={styles.productGrid}>
        {products.map((product, index) => (
          <div
            key={index}
            className={styles.productCard}
          >
            <div className={styles.imgCon} style={{ backgroundColor: product.Colour, filter: product.stockCount === 0 ? "grayscale(100%)" : "none" }}>
            <img src={product.image} alt={product.name}  className={styles.productImage} />
            </div>
            <h2 className={styles.productName}>{product.name}</h2>
            <select className={styles.productQuantity}>
              {quantityOptions.map((q, i) => (
                <option key={i}>{q}</option>
              ))}
            </select>
            <div className={styles.priceSection}>
              <span className={styles.discountPrice}>₹{product.price}</span>
              <span className={styles.originalPrice}>₹{product.originalPrice}</span>
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