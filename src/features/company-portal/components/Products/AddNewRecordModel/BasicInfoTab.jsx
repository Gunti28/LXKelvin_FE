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
      setTagInput("");
    }
  };

  const handleRemoveTag = (tag) => {
    dispatch(removeTag(tag));
  };

  const categories = [
    "Vegetables",
    "Fruits",
    "Seasonal Fruits",
    "Seasonal Vegetables",
  ];

  return (
    <form
      className="max-w-4xl mx-auto p-2 bg-white rounded-lg space-y-4"
      onSubmit={(e) => e.preventDefault()}
    >
      {/* Product Name and SKU */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Product Name</label>
          <input
            type="text"
            placeholder="Enter Product Name"
            value={data.name}
            onChange={(e) => handleFieldChange("name", e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">SKU</label>
          <input
            type="text"
            placeholder="Enter Product SKU"
            value={data.sku}
            onChange={(e) => handleFieldChange("sku", e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Category Dropdown */}
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
            </option>
          ))}
        </select>
      </div>

      {/* Tags Input */}
      <div>
        <div className="flex gap-2">
          <div className="mb-2 flex flex-col w-full">
            <label className="block text-sm font-medium mb-2">Tags</label>
            <input
              type="text"
              placeholder="Add tags"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="button"
            onClick={handleAddTag}
            className="bg-gray-300 hover:bg-gray-700 text-white px-4 h-10 rounded transition mt-4"
          >
            Add
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {data.tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-sm px-3 py-1 rounded border border-gray-400 flex items-center"
            >
              {tag}
              <button
                type="button"
                onClick={() => handleRemoveTag(tag)}
                className="ml-2 text-black hover:text-black"
              >
                &times;
              </button>
            </span>
          ))}
        </div>
      </div>

      {/* Brand and Descriptions */}
      <div>
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
      </div>

      {/* Status and Buttons */}
      <div className="flex flex-col md:flex-row items-center gap-4 justify-end">
        <div className="flex items-center gap-2">
          <label className="font-medium">Product Status :</label>
          <select
            value={data.status}
            onChange={(e) => handleFieldChange("status", e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>

        <button className="border px-3 py-1 rounded border-gray-400" onClick={onCancel}>
          Cancel
        </button>
        <button className="border px-3 py-1 rounded border-gray-400 bg-black text-white" onClick={onSave}>
          Add Product
        </button>
      </div>
    </form>
  );
};

export default BasicInfoTab;
