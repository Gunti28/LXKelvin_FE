import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateInventoryField } from "../../../../../store/slice/admin-portal/admin-productInventorySlice";

const InventoryTab = ({onSave, onCancel}) => {
  const dispatch = useDispatch();
  
  // Fixed: Changed from state.inventory to state.adminProductInventory
  const {
    stockQty,
    lowStockThreshold,
    manageStock,
    stockStatus,
    status,
  } = useSelector((state) => state.adminProductInventory);

  // Dispatch updates on field change
  const handleInventoryChange = (field, value) => {
    dispatch(updateInventoryField({ field, value }));
  };

  return (
    <div className="bg-white p-2 max-w-3xl mx-auto space-y-4 mt-0">
      {/* Stock Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 text-sm font-medium mb-2">Stock Quantity</label>
          <input
            type="number"
            value={stockQty}
            onChange={(e) => handleInventoryChange("stockQty", parseInt(e.target.value) || 0)}
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="0"
            min="0"
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium mb-2">Low Stock Threshold</label>
          <input
            type="number"
            value={lowStockThreshold}
            onChange={(e) => handleInventoryChange("lowStockThreshold", parseInt(e.target.value) || 0)}
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="0"
            min="0"
          />
        </div>
      </div>

      {/* Manage Stock Toggle */}
      <div className="flex items-center justify-between mb-0">
        <div>
          <label className="text-sm font-medium mb-1">Manage Stock</label>
          <p className="text-sm text-gray-500">Enable stock management at product level</p>
        </div>
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={manageStock}
            onChange={() => handleInventoryChange("manageStock", !manageStock)}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-checked:bg-blue-600 rounded-full peer relative
            after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all
            peer-checked:after:translate-x-full peer-checked:after:border-white"
          />
        </label>
      </div>

      {/* Stock Status Dropdown */}
      <div>
        <label className="block text-sm font-medium mb-2">Stock Status</label>
        <select
          value={stockStatus}
          onChange={(e) => handleInventoryChange("stockStatus", e.target.value)}
          className="w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
        >
          <option value="In Stock">In Stock</option>
          <option value="Out of Stock">Out of Stock</option>
          <option value="On Backorder">On Backorder</option>
        </select>
      </div>

      {/* Product Status Dropdown & Action Buttons */}
      <div className="flex flex-col md:flex-row items-center gap-4 justify-end">
        <div className="flex items-center gap-2">
          <label className="font-medium">Product Status:</label>
          <select
            value={status}
            onChange={(e) => handleInventoryChange("status", e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        <button 
          type="button"
          className="border px-3 py-1 rounded border-gray-400 hover:bg-gray-50"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button 
          type="button"
          className="border px-3 py-1 rounded border-gray-400 bg-black text-white hover:bg-gray-800"
          onClick={onSave}
        >
          Add Product
        </button>
      </div>
    </div>
  );
};

export default InventoryTab;