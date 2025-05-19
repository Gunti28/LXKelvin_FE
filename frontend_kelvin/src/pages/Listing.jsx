import React from "react";
import { useLocation } from "react-router-dom";
import "../css/Listing.css";
import Tomato from '../assets/Listing/image 30.svg';
import Cauliflower from '../assets/Listing/image 8.svg';
import Beans from '../assets/Listing/image 17.svg';
import Garlic from '../assets/Listing/image 18.svg';
import Apple from '../assets/Listing/Apple.svg';
import Banana from '../assets/Listing/Banana.svg';
import Watermelon from '../assets/Listing/Watermelon.svg';
import Kiwi from '../assets/Listing/Kiwi.svg';

const products = [
  { name: "Tomato", image: Tomato, price: 40, originalPrice: 50, Colour: "#fbd7d7", category: "vegetables", stockCount: 0, discount: 20 },
  { name: "Beans", image: Beans, price: 35, originalPrice: 45, Colour: "#c6f5c3", category: "vegetables", stockCount: 5, discount: 10 },
  { name: "Apple", image: Apple, price: 28, originalPrice: 35, Colour: "#fbd7d7", category: "fruits", stockCount: 1, discount: 0 },
  { name: "Cauliflower", image: Cauliflower, price: 25, originalPrice: 35, Colour: "#e9f1d7", category: "vegetables", stockCount: 10, discount: 5 },
  { name: "Banana", image: Banana, price: 28, originalPrice: 35, Colour: "#EDD251", category: "fruits", stockCount: 0, discount: 0 },
  { name: "Garlic", image: Garlic, price: 30, originalPrice: 40, Colour: "#fef0dd", category: "vegetables", stockCount: 2, discount: 15 },
  { name: "Watermelon", image: Watermelon, price: 28, originalPrice: 35, Colour: "#E24C36", category: "fruits", stockCount: 3, discount: 0 },
  { name: "Kiwi", image: Kiwi, price: 28, originalPrice: 35, Colour: "#c6f5c3", category: "fruits", stockCount: 7, discount: 0 }
];

const Listing = () => {
  const location = useLocation();
  const path = location.pathname.slice(1);

  const filteredProducts = path === "products/all-categories" ? products : products.filter(p => p.category.toLowerCase() === path.toLowerCase());
  return (
    <div className="listing-container">
      <h1 className="page-title">{path === "products/all-categories" ? "All Products" : `Get Fresh ${path} Delivered Online`}</h1>
      <div className="product-grid">
        {filteredProducts.map((product, index) => ( 
          <div key={index} className="product-card" style={{ backgroundColor: product.Colour, filter: product.stockCount === 0 ? "grayscale(100%)" : "none" }}>
            <img src={product.image} alt={product.name} className="product-image" />
            <h2 className="product-name">{product.name}</h2>
            <div className="price-section">
              <span className="discount-price">₹{product.price}</span>
              <span className="original-price">₹{product.originalPrice}</span>
            </div>
            {product.stockCount > 0 ? (
              <button className="add-to-cart">Add to cart</button>
            ) : (
              <button className="out-of-stock">Out of Stock</button>
    
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listing;