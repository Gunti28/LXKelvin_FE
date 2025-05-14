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

const quantityOptions = ["500g", "1kg", "2kg"];

function getMessage(stockCount, discount) {
  if (stockCount === 0) return { text: "Out of stock", className: "out-of-stock" };
  if (stockCount <= 2) return { text: `Hurry up, Only ${stockCount} items left`, className: "low-stock" };
  if (discount > 0) return { text: `Buy 3, Get ${discount}% OFF`, className: "discount" };
  return { text: "Available Soon", className: "available-soon" };
}

export default function Listing() {
  const location = useLocation();
  const path = location.pathname.slice(1);

  const filteredProducts =
    path === "all-categories"
      ? products
      : products.filter(
          (p) => p.category.toLowerCase() === path.toLowerCase()
        );

  return (
    <div className="page-container">
      <h1 className="page-title">
        {path === "all-categories" ? "All Products" : `Get Fresh ${path} Delivered Online`}
      </h1>
      <div className="cards-grid">
        {filteredProducts.map((product, index) => {
          const message = getMessage(product.stockCount, product.discount);

          return (
            <div
              key={index}
              className={`product-card ${!product.stockCount ? 'out-of-stock' : ''}`}
              style={{ backgroundColor: product.Colour || "#f4f4f4" }}
            >
              <img src={product.image} alt={product.name} className="product-image" />
              <h2 className="product-name">{product.name}</h2>
              {product.stockCount ? (
                <>
                  <select className="product-quantity">
                    {quantityOptions.map((q, i) => (
                      <option key={i}>{q}</option>
                    ))}
                  </select>
                  <div className="product-price">
                    ₹{product.price} <span className="original-price">₹{product.originalPrice}</span>
                  </div>
                  <button className="add-to-cart">Add to cart</button><br/>
                                <span className={`product-message ${message.className}`}>{message.text}</span>

                </>
              ) : (
                <div className="out-of-stock-overlay">
                                <span className={`product-message ${message.className}`}>{message.text}</span>

                </div>
                
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}