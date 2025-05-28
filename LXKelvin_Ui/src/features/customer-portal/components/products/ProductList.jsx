import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
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

export default ProductList;