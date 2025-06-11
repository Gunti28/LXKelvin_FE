

import React from "react";
import { GrPowerCycle } from "react-icons/gr";
import { LuFilter } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../../../../store/slice/admin-portal/admin-productSlice";

const ProductFilters = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.adminProducts.filters);

  const handleFilterChange = (filterName, value) => {
    dispatch(setFilters({ [filterName]: value }));
  };

  const handleReset = () => {
    dispatch(setFilters({
      category: "",
      minPrice: "",
      maxPrice: "",
      inventory: "",
      status: ""
    }));
  };

  return (
    <div className="bg-white p-4 rounded-xl space-y-4 mx-auto">
      <div className="mb-4">
        <p className="text-xl font-bold text-gray-900 mt-1">Filters & Search</p>
        <p className="text-gray-400 text-sm mt-0">
          Products filtered by Category, Price, Inventory or Status
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Category */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Category
          </label>
          <select
            value={filters.category}
            onChange={(e) => handleFilterChange('category', e.target.value)}
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
              value={filters.minPrice}
              onChange={(e) => handleFilterChange('minPrice', e.target.value)}
              className="border rounded px-3 py-2 text-sm w-1/2"
            />
            <input
              type="number"
              placeholder="Max"
              value={filters.maxPrice}
              onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
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
            value={filters.inventory}
            onChange={(e) => handleFilterChange('inventory', e.target.value)}
            className="border rounded px-3 py-2 text-sm w-full"
          >
            <option value="">All</option>
            <option value="In Stock">In Stock</option>
            <option value="Low Stock">Low Stock</option>
            <option value="Out of Stock">Out of Stock</option>
          </select>
        </div>

        {/* Status */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Status
          </label>
          <select
            value={filters.status}
            onChange={(e) => handleFilterChange('status', e.target.value)}
            className="border rounded px-3 py-2 text-sm w-full"
          >
            <option value="">All Status</option>
            <option value="Active">Active</option>
            <option value="Pending">Pending</option>
            <option value="Out of Stock">Out of Stock</option>
          </select>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4">
        <button
          className="bg-black text-white flex items-center gap-2 px-3 py-2 rounded shadow hover:bg-gray-800"
          onClick={() => console.log('Filters applied:', filters)}
        >
          <LuFilter />
          Apply Filters
        </button>
        <button
          className="border border-gray-300 text-black px-3 py-2 rounded bg-white hover:bg-gray-100 flex gap-2 items-center"
          onClick={handleReset}
        >
          <GrPowerCycle /> <span>Reset</span>
        </button>
      </div>
    </div>
  );
};

export default ProductFilters;