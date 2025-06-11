<<<<<<< HEAD

import React from "react";

const PricingTab = ({ data, onChange }) => {
  // Destructure pricing info from parent's state and product status from top-level state
  const { regular, sale, taxSetting, taxExempt, onSale } = data.pricing;
  const productStatus = data.status;

  // Handler to update pricing fields
  const handlePricingChange = (field, value) => {
    onChange("pricing", { ...data.pricing, [field]: value });
  };

  // Handler to update product status (top-level state)
  const handleStatusChange = (value) => {
    onChange("status", value);
=======
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePricingField } from "../../../../../store/slice/admin-portal/admin-productPricingSlice";

const PricingTab = ({onSave, onCancel}) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.adminProductPricing);

  // Destructure pricing info
  const { regular, sale, taxSetting, taxExempt, onSale, status } = data;

  // Handler to update pricing fields
  const handlePricingChange = (field, value) => {
    dispatch(updatePricingField({ field, value }));
>>>>>>> 1aaa11657b10901bae6f23777070dbe03c84a405
  };

  return (
    <div className="bg-white p-2 w-full max-w-3xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
<<<<<<< HEAD
        <div className="">
=======
        <div>
>>>>>>> 1aaa11657b10901bae6f23777070dbe03c84a405
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Regular Price (€)
          </label>
          <input
            type="number"
            placeholder="0.00"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            value={regular}
            onChange={(e) => handlePricingChange("regular", e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Sale Price (€)
          </label>
          <input
            type="number"
            placeholder="0.00"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            value={sale}
            onChange={(e) => handlePricingChange("sale", e.target.value)}
          />
        </div>
      </div>

<<<<<<< HEAD
      <div className="flex items-center justify-between">
        <div>
          <label className="text-sm font-medium">On Sale</label>
          <p className="text-sm text-gray-500">
             Enable this to show the the product is on sale
=======
      <div className="flex items-center justify-between mb-4">
        <div>
          <label className="text-sm font-medium">On Sale</label>
          <p className="text-sm text-gray-500">
            Enable this to show the product is on sale
>>>>>>> 1aaa11657b10901bae6f23777070dbe03c84a405
          </p>
        </div>
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={onSale}
            onChange={() => handlePricingChange("onSale", !onSale)}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-checked:bg-blue-600 rounded-full peer relative after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white" />
        </label>
      </div>

      <div className="mb-3">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Tax Settings
        </label>
        <select
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
          value={taxSetting}
          onChange={(e) => handlePricingChange("taxSetting", e.target.value)}
        >
          <option>Standard Rate</option>
          <option>Reduced Rate</option>
          <option>Zero Rate</option>
        </select>
      </div>

<<<<<<< HEAD
      <div className="flex items-center justify-between">
=======
      <div className="flex items-center justify-between mb-4">
>>>>>>> 1aaa11657b10901bae6f23777070dbe03c84a405
        <div>
          <label className="text-sm font-medium">Tax exempt</label>
          <p className="text-sm text-gray-500">
            Enable this if the product is exempt from tax
          </p>
        </div>
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={taxExempt}
            onChange={() => handlePricingChange("taxExempt", !taxExempt)}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-checked:bg-blue-600 rounded-full peer relative after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white" />
        </label>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-4 justify-end">
        <div className="flex items-center gap-2">
          <label className="font-medium">Product Status :</label>
          <select
<<<<<<< HEAD
            value={data.status}
            onChange={(e) => handleStatusChange("status", e.target.value)}
=======
            value={status}
            onChange={(e) => handlePricingChange("status", e.target.value)}
>>>>>>> 1aaa11657b10901bae6f23777070dbe03c84a405
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>

<<<<<<< HEAD
        <button className="border-1 px-3 py-1 rounded border-gray-400">
          Cancel
        </button>
        <button className="border-1 px-3 py-1 rounded border-gray-400 bg-black text-white">
=======
        <button className="border-1 px-3 py-1 rounded border-gray-400" onClick={onCancel}>
          Cancel
        </button>
        <button className="border-1 px-3 py-1 rounded border-gray-400 bg-black text-white" onClick={onSave}>
>>>>>>> 1aaa11657b10901bae6f23777070dbe03c84a405
          Add Product
        </button>
      </div>
    </div>
  );
};

export default PricingTab;
