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
      setTagInput("");
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    const newTags = tags.filter((tag) => tag !== tagToRemove);
    onChange("tags", newTags);
  };

  const categories = [
    "Vegetables",
    "Fruits",
    "Seasonal Fruits",
    "Seasonal Vegetables",
  ];

  return (
    <form
      className="max-w-4xl mx-auto p-2 bg-white  rounded-lg space-y-4"
      onSubmit={(e) => e.preventDefault()}
    >
      {/* Product Name and SKU */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="">
          <label
            htmlFor="SKU"
            className="block text-sm font-medium text-gray-700 mb-2 "
          >
            SKU
          </label>
          <input
            type="text"
            placeholder="Enter Product SKU"
            value={data.sku}
            onChange={(e) => onChange("sku", e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Category Dropdown */}

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
            </option>
          ))}
        </select>
      </div>

      {/* Tags Input */}
      <div>
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
            />
          </div>
          <button
            type="button"
            onClick={handleAddTag}
            className="bg-gray-300 hover:bg-gray-700  text-white px-4 h-10 rounded transition mt-4"
          >
            Add
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className=" text-sm px-3 py-1 rounded border-1 flex items-center"
            >
              {tag}
              <button
                type="button"
                onClick={() => handleRemoveTag(tag)}
                className="ml-2 text-black ps-1  hover:text-black"
              >
                &times;
              </button>
            </span>
          ))}
        </div>
      </div>

      {/* Brand and Descriptions */}
      <div>
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
      </div>

      {/* Status and Buttons */}
      <div className="flex flex-col md:flex-row items-center gap-4 justify-end">
        <div className="flex items-center gap-2">
          <label className="font-medium">Product Status :</label>
          <select
            value={data.status}
            onChange={(e) => onChange("status", e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>

        <button className="border-1 px-3 py-1 rounded border-gray-400" >
          Cancel
        </button>
        <button className="border-1 px-3 py-1 rounded border-gray-400 bg-black text-white">
          Add Product
        </button>
      </div>
    </form>
  );
}

export default BasicInfoTab;