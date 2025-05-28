import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ListingStyle from "../../../../lib/common/css/products/Listing.module.css";
import productsData from "../../../../lib/common/mocks/products.json";

const Listing = () => {
  const location = useLocation();
  const path = location.pathname.slice(1);
  const [products, setProducts] = useState([]);
  const quantityOptions = ["500g", "1kg", "2kg"];

  useEffect(() => {
    setProducts(productsData.products);
  }, []);

  const filteredProducts = path === "products/all-categories" 
    ? products 
    : products.filter(p => p.category.toLowerCase() === path.toLowerCase());

  return (
    <div className="p-8 bg-[#f7f7f7] min-h-screen font-sans">
      <h1 className="text-left text-2xl mb-8 text-[#333] font-bold">
        {path === "all-categories" ? "All Products" : "Get Fresh Fruits & Vegetables Delivered Online"}
      </h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product, index) => (
          <div 
            key={index} 
            className="bg-[#F4F6FB] rounded-xl shadow-md p-4 text-center transform transition-transform duration-200 hover:-translate-y-2"
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
              />
            </div>
            
            <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
            
            <select className="w-full p-2 text-sm mb-3 rounded-md border border-gray-300">
              {quantityOptions.map((q, i) => (
                <option key={i}>{q}</option>
              ))}
            </select>
            
            <div className="mb-4">
              <span className="text-base font-medium">₹{product.price}</span>
              <span className="text-sm text-gray-500 line-through ml-2">
                ₹{product.originalPrice}
              </span>
            </div>
            
            {product.stockCount > 0 ? (
              <button className="px-8 py-2 text-sm bg-transparent text-black border border-[#F9A502] rounded hover:bg-[#45a049] hover:text-white transition-colors duration-200">
                Add to cart
              </button>
            ) : (
              <button className="px-4 py-2 bg-gray-500 text-white rounded-md cursor-not-allowed">
                Out of Stock
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listing;