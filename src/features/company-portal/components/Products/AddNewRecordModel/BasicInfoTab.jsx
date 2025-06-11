<<<<<<< HEAD
import { useEffect, useState } from "react";

const BasicInfoTab = ({ data, onChange }) => {
  const [tagInput, setTagInput] = useState("");

  // Keep tags in sync with parent state
  const tags = data.tags || [];

  const handleAddTag = () => {
    const trimmed = tagInput.trim();
    if (trimmed && !tags.includes(trimmed)) {
      const newTags = [...tags, trimmed];
      onChange("tags", newTags);
=======
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateBasicInfoField,
  addTag,
  removeTag,
} from "../../../../../store/slice/admin-portal/admin-productBasicInfoSlice";

const BasicInfoTab = ({onSave , onCancel}) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.adminProductBasicInfo);
  const [tagInput, setTagInput] = useState("");

  const handleFieldChange = (field, value) => {
    dispatch(updateBasicInfoField({ field, value }));
  };

  const handleAddTag = () => {
    if (tagInput.trim()) {
      dispatch(addTag(tagInput));
>>>>>>> 1aaa11657b10901bae6f23777070dbe03c84a405
      setTagInput("");
    }
  };

<<<<<<< HEAD
  const handleRemoveTag = (tagToRemove) => {
    const newTags = tags.filter((tag) => tag !== tagToRemove);
    onChange("tags", newTags);
=======
  const handleRemoveTag = (tag) => {
    dispatch(removeTag(tag));
>>>>>>> 1aaa11657b10901bae6f23777070dbe03c84a405
  };

  const categories = [
    "Vegetables",
    "Fruits",
    "Seasonal Fruits",
    "Seasonal Vegetables",
  ];

  return (
    <form
<<<<<<< HEAD
      className="max-w-4xl mx-auto p-2 bg-white  rounded-lg space-y-4"
=======
      className="max-w-4xl mx-auto p-2 bg-white rounded-lg space-y-4"
>>>>>>> 1aaa11657b10901bae6f23777070dbe03c84a405
      onSubmit={(e) => e.preventDefault()}
    >
      {/* Product Name and SKU */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<<<<<<< HEAD
        <div className="">
          <label
            htmlFor="product-name"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Product Name
          </label>
          <input
            id="product-name"
            type="text"
            placeholder="Enter Product Name"
            value={data.name}
            onChange={(e) => onChange("name", e.target.value)}
=======
        <div>
          <label className="block text-sm font-medium mb-2">Product Name</label>
          <input
            type="text"
            placeholder="Enter Product Name"
            value={data.name}
            onChange={(e) => handleFieldChange("name", e.target.value)}
>>>>>>> 1aaa11657b10901bae6f23777070dbe03c84a405
            className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

<<<<<<< HEAD
        <div className="">
          <label
            htmlFor="SKU"
            className="block text-sm font-medium text-gray-700 mb-2 "
          >
            SKU
          </label>
=======
        <div>
          <label className="block text-sm font-medium mb-2">SKU</label>
>>>>>>> 1aaa11657b10901bae6f23777070dbe03c84a405
          <input
            type="text"
            placeholder="Enter Product SKU"
            value={data.sku}
<<<<<<< HEAD
            onChange={(e) => onChange("sku", e.target.value)}
=======
            onChange={(e) => handleFieldChange("sku", e.target.value)}
>>>>>>> 1aaa11657b10901bae6f23777070dbe03c84a405
            className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Category Dropdown */}
<<<<<<< HEAD

      <div className="mb-3">
        <label
          htmlFor="Categories"
          className="block text-sm font-medium text-gray-700 mb-2 "
        >
          Categories
        </label>
        <select
          value={data.category}
          onChange={(e) => onChange("category", e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Category</option>
          {categories.map((category, index) => (
            <option key={index} value={category.toLowerCase()}>
              {category}
=======
      <div>
        <label className="block text-sm font-medium mb-2">Category</label>
        <select
          value={data.category}
          onChange={(e) => handleFieldChange("category", e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Category</option>
          {categories.map((cat, idx) => (
            <option key={idx} value={cat.toLowerCase()}>
              {cat}
>>>>>>> 1aaa11657b10901bae6f23777070dbe03c84a405
            </option>
          ))}
        </select>
      </div>

      {/* Tags Input */}
      <div>
<<<<<<< HEAD
        <div className="flex  gap-2 ">
          <div className="mb-2 flex flex-col w-full ">
            <label
              htmlFor="Tags"
              className="block text-sm font-medium text-gray-700 mb-2 "
            >
              Tags
            </label>
            <input
              type="text"
              placeholder="Add tags"
              className="border border-gray-300 rounded px-3 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
=======
        <div className="flex gap-2">
          <div className="mb-2 flex flex-col w-full">
            <label className="block text-sm font-medium mb-2">Tags</label>
            <input
              type="text"
              placeholder="Add tags"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
>>>>>>> 1aaa11657b10901bae6f23777070dbe03c84a405
            />
          </div>
          <button
            type="button"
            onClick={handleAddTag}
<<<<<<< HEAD
            className="bg-gray-300 hover:bg-gray-700  text-white px-4 h-10 rounded transition mt-4"
=======
            className="bg-gray-300 hover:bg-gray-700 text-white px-4 h-10 rounded transition mt-4"
>>>>>>> 1aaa11657b10901bae6f23777070dbe03c84a405
          >
            Add
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
<<<<<<< HEAD
          {tags.map((tag, index) => (
            <span
              key={index}
              className=" text-sm px-3 py-1 rounded border-1 flex items-center"
=======
          {data.tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-sm px-3 py-1 rounded border border-gray-400 flex items-center"
>>>>>>> 1aaa11657b10901bae6f23777070dbe03c84a405
            >
              {tag}
              <button
                type="button"
                onClick={() => handleRemoveTag(tag)}
<<<<<<< HEAD
                className="ml-2 text-black ps-1  hover:text-black"
=======
                className="ml-2 text-black hover:text-black"
>>>>>>> 1aaa11657b10901bae6f23777070dbe03c84a405
              >
                &times;
              </button>
            </span>
          ))}
        </div>
      </div>

      {/* Brand and Descriptions */}
      <div>
<<<<<<< HEAD
        <div className="mb-2 flex flex-col w-full ">
          <label
            htmlFor="Brand"
            className="block text-sm font-medium text-gray-700 mb-2 "
          >
            Brand
          </label>
          <input
            type="text"
            placeholder="Enter Product Brand"
            value={data.brand}
            onChange={(e) => onChange("brand", e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-2 flex flex-col w-full ">
          <label
            htmlFor="Short Description"
            className="block text-sm font-medium text-gray-700 mb-2 "
          >
            Short Description
          </label>
          <input
            type="text"
            placeholder=" Enter Short description of the product"
            value={data.description}
            onChange={(e) => onChange("description", e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-2 flex flex-col w-full ">
          <label
            htmlFor="Full Description"
            className="block text-sm font-medium text-gray-700 mb-2 "
          >
            Full Description
          </label>
          <textarea
            placeholder="Enter detailed  product description....."
            value={data.longDescription || ""}
            onChange={(e) => onChange("longDescription", e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 w-full h-28 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
=======
        <label className="block text-sm font-medium mb-2">Brand</label>
        <input
          type="text"
          placeholder="Enter Product Brand"
          value={data.brand}
          onChange={(e) => handleFieldChange("brand", e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Short Description</label>
        <input
          type="text"
          placeholder="Short description of the product"
          value={data.description}
          onChange={(e) => handleFieldChange("description", e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Full Description</label>
        <textarea
          placeholder="Enter detailed product description..."
          value={data.longDescription}
          onChange={(e) => handleFieldChange("longDescription", e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 w-full h-28 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
>>>>>>> 1aaa11657b10901bae6f23777070dbe03c84a405
      </div>

      {/* Status and Buttons */}
      <div className="flex flex-col md:flex-row items-center gap-4 justify-end">
        <div className="flex items-center gap-2">
          <label className="font-medium">Product Status :</label>
          <select
            value={data.status}
<<<<<<< HEAD
            onChange={(e) => onChange("status", e.target.value)}
=======
            onChange={(e) => handleFieldChange("status", e.target.value)}
>>>>>>> 1aaa11657b10901bae6f23777070dbe03c84a405
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>

<<<<<<< HEAD
        <button className="border-1 px-3 py-1 rounded border-gray-400" >
          Cancel
        </button>
        <button className="border-1 px-3 py-1 rounded border-gray-400 bg-black text-white">
=======
        <button className="border px-3 py-1 rounded border-gray-400" onClick={onCancel}>
          Cancel
        </button>
        <button className="border px-3 py-1 rounded border-gray-400 bg-black text-white" onClick={onSave}>
>>>>>>> 1aaa11657b10901bae6f23777070dbe03c84a405
          Add Product
        </button>
      </div>
    </form>
  );
<<<<<<< HEAD
}

export default BasicInfoTab;
=======
};

export default BasicInfoTab;
>>>>>>> 1aaa11657b10901bae6f23777070dbe03c84a405
