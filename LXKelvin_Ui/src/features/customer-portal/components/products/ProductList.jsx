<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import productsData from "../../../../lib/common/mocks/products.json";
=======
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "../../../../lib/common/css/products/Listing.module.css";
import { useSelector } from "react-redux";
import { Const } from "../../../../lib/constants/index";
>>>>>>> bfa53ab544020dd074e3a311dff8e0f8fe0483d0

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
<<<<<<< HEAD
    <div className="p-8 bg-[#f7f7f7] min-h-screen font-sans">
      <h1 className="text-left text-2xl mb-8 text-[#333] font-bold">
        {path === "all-categories" ? "All Products" : `Get Fresh ${path} Delivered Online`}
      </h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="inline-block bg-[#F4F6FB] rounded-xl shadow-md p-4 text-center transform transition-transform duration-200 hover:-translate-y-2"
          >
            <div 
              className="w-full h-44 p-12 rounded-lg mb-3 flex items-center justify-center"
              style={{ 
                backgroundColor: product.Colour,
                filter: product.stockCount === 0 ? "grayscale(100%)" : "none"
              }}
            >
              <img 
                src={product.image} 
                alt={product.name}
                className="w-[120px] h-[120px]"
=======
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
>>>>>>> bfa53ab544020dd074e3a311dff8e0f8fe0483d0
              />
            </div>
            
            <h2 className="text-lg font-semibold mb-2">
              {product.name}
            </h2>
            
            {/* Keep the select with module CSS for mobile responsiveness */}
            <select className="w-full p-2 text-sm mb-3 rounded-md border border-gray-300">
              {quantityOptions.map((q, i) => (
                <option key={i}>{q}</option>
              ))}
            </select>
<<<<<<< HEAD
            
            <div className="mb-4">
              <span className="text-base font-medium">₹{product.price}</span>
              <span className="text-sm text-gray-500 line-through ml-2">
=======
            <div className={styles.priceSection}>
              <span className={styles.discountPrice}>₹{product.price}</span>
              <span className={styles.originalPrice}>
>>>>>>> bfa53ab544020dd074e3a311dff8e0f8fe0483d0
                ₹{product.originalPrice}
              </span>
            </div>
            
            {product.stockCount > 0 ? (
              <button className="px-8 py-2 text-sm bg-transparent text-black border border-[#F9A502] rounded hover:bg-[#45a049] hover:text-white transition-colors duration-200">
                Add to cart
              </button>
            ) : (
<<<<<<< HEAD
              <button className="px-4 py-2 bg-gray-500 text-white rounded-md cursor-not-allowed">
                Out of Stock
              </button>
=======
              <button className={styles.outOfStock}>Out of Stock</button>
>>>>>>> bfa53ab544020dd074e3a311dff8e0f8fe0483d0
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
