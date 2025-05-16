import React, { useEffect, useState } from 'react';
import axios from '../api/axiosInstance';
import { useLocation } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();

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
      return { products };
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const filter = getCategory();
      let url = `http://localhost:5000/products?`;

      if (filter.category) url += `category=${filter.category}`;
      if (filter.seasonal !== undefined) url += `&seasonal=${filter.seasonal}`;

      const response = await axios.get(url);
      setProducts(response.data);
    };

    fetchData();
  }, [location.pathname]);

  return (
    <div>
      <h2>Products</h2>
      <div className="cards-grid">
        {products.map((product, index) => (
          <div
            key={index}
            className="product-card"
            style={{ backgroundColor: product.Colour || "#f4f4f4" }}
          >
            <img src={product.image} alt={product.name} className="product-image" />
            <h2 className="product-name">{product.name}</h2>
            <select className="product-quantity">
              {quantityOptions.map((q, i) => (
                <option key={i}>{q}</option>
              ))}
            </select>
            <div className="product-price">
              ₹{product.price}{" "}
              <span className="original-price">₹{product.originalPrice}</span>
            </div>
            <button className="add-to-cart">Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;