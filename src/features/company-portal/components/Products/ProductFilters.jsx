import React, { useState } from "react";
import { GrPowerCycle } from "react-icons/gr";
import { LuFilter } from "react-icons/lu";

const ProductFilters = () => {
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [inventory, setInventory] = useState("");
  const [status, setStatus] = useState("");

  const handleReset = () => {
    setCategory("");
    setMinPrice("");
    setMaxPrice("");
    setInventory("");
    setStatus("");
  };

  return (
    <div className="bg-white p-4 rounded-xl space-y-4 mx-auto">
      <div className="mb-4">
        <p className="text-xl font-bold text-gray-900 mt-1">Filters & Search</p>
        <p className="text-gray-400 text-sm mt-0">
          Products filtered by Category, Price, Inventory or Status
        </p>
      </div>

      {/* Responsive Grid for Filter Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Category */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border rounded px-3 py-2 text-sm w-full"
          >
            <option value="">All Categories</option>
            <option value="Vegetables">Vegetables</option>
            <option value="Fruits">Fruits</option>
            <option value="Seasonal Vegetables">Seasonal Vegetables</option>
            <option value="Seasonal Fruits">Seasonal Fruits</option>
            <option value="Milk Products">Milk Products</option>
          </select>
        </div>

        {/* Price Range */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Price range
          </label>
          <div className="flex gap-2">
            <input
              type="number"
              placeholder="Min"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="border rounded px-3 py-2 text-sm w-1/2"
            />
            <input
              type="number"
              placeholder="Max"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="border rounded px-3 py-2 text-sm w-1/2"
            />
          </div>
        </div>

        {/* Inventory */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Inventory
          </label>
          <select
            value={inventory}
            onChange={(e) => setInventory(e.target.value)}
            className="border rounded px-3 py-2 text-sm w-full"
          >
            <option value="">All</option>
            <option value="Fruits">Fruits</option>
            <option value="Vegetables">Vegetables</option>
            <option value="Milk products">Milk products</option>
          </select>
        </div>

        {/* Status */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Status
          </label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="border rounded px-3 py-2 text-sm w-full"
          >
            <option value="">All Status</option>
            <option value="Active">Active</option>
            <option value="Pending">Pending</option>
            <option value="Out of stock">Out of stock</option>
          </select>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4">
        <button
          className="bg-black text-white flex items-center gap-2 px-3 py-2 rounded shadow hover:bg-gray-800"
          onClick={() =>
            console.log({ category, minPrice, maxPrice, inventory, status })
          }
        >
          <LuFilter />
          Apply Filters
        </button>
        <button
          className="border border-gray-300 text-black px-3 py-2 rounded bg-white hover:bg-gray-100 flex  gap-2 items-center"
          onClick={handleReset}
        >
          <GrPowerCycle /> <span>Reset</span>
        </button>
      </div>
    </div>
  );
};

export default ProductFilters;
