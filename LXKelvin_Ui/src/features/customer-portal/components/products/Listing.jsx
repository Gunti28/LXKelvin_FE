import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ListingStyle from  "../../../../lib/common/css/products/Listing.module.css";
import productsData from "../../../../lib/common/mocks/products.json";
const Listing = () => {
  const location = useLocation();
  const path = location.pathname.slice(1);
  const [products, setProducts] = useState([]);
   const quantityOptions = ["500g", "1kg", "2kg"];

  useEffect(() => {
    setProducts(productsData.products);
  }, []);


  const filteredProducts = path === "products/all-categories" ? products : products.filter(p => p.category.toLowerCase() === path.toLowerCase());
  return (
    <div className={ListingStyle.listingContainer}>

      <h1 className={ListingStyle.pageTitle}>{path === "all-categories" ? "All Products" : `Get Fresh Fruits& Vegetables Delivered Online`}</h1>
      <div className={ListingStyle.productGrid}>
        {filteredProducts.map((product, index) => ( 
          <div key={index} className={ListingStyle.productCard} >
            <div className={ListingStyle.imgCon}  style={{ backgroundColor: product.Colour, filter: product.stockCount === 0 ? "grayscale(100%)" : "none" }}>
            <img src={product.image} alt={product.name} className={ListingStyle.productImage}/>
            </div>
            <h2 className={ListingStyle.productName}>{product.name}</h2>
            <select className={ListingStyle.productQuantity}>
              {quantityOptions.map((q, i) => (
                <option key={i}>{q}</option>
              ))}
            </select>
            <div className={ListingStyle.priceSection}>
              <span className={ListingStyle.discountPrice}>₹{product.price}</span>
              <span className={ListingStyle.originalPrice}>₹{product.originalPrice}</span>
            </div>
            {product.stockCount > 0 ? (
              <button className={ListingStyle.addToCart}>Add to cart</button>
            ) : (
              <button className={ListingStyle.outOfStock}>Out of Stock</button>
    
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listing;