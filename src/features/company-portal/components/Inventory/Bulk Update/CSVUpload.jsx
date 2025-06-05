import React, { useState } from "react";
import { ImagePlus } from "lucide-react";
import { MdOutlineUploadFile, MdOutlineFileUpload } from "react-icons/md";

const CSVUpload = ({ sampleData }) => {
  const [mainImage, setMainImage] = useState(null);

  const handleMainImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setMainImage(imageUrl);
    }
  };

  return (
    <div className="mb-10">
      <div className="border p-4">
        <p className="text-lg  font-medium">Upload CSV File</p>
        <p className="text-sm text-gray-400 mb-3">
          Upload a CSV file with product IDs or SKUs and their new stock levels
        </p>

        <div className="border-2 border-dashed rounded p-4 text-center mb-2">
          {mainImage ? (
            <img
              src={mainImage}
              alt="Main"
              className="mx-auto h-40 object-contain"
            />
          ) : (
            <div className="flex flex-col items-center gap-2">
              <MdOutlineUploadFile className="w-10 h-10 text-gray-500" />
              <label className="cursor-pointer">
                <span className="text-xl font-semibold">
                  Drag and drop your CSV file here
                </span>
                <p className="text-gray-500">
                  or click to browse your files (max 5MB)
                </p>
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleMainImageUpload}
                />
              </label>
              <button className=" flex flex-row gap-2 items-center bg-black rounded px-2 py-1 text-white">
                {" "}
                <MdOutlineFileUpload />
                Browse Files
              </button>
            </div>
          )}
        </div>

        <div>
          <p className="text-sky-600">Download CSV Template</p>
          <div className="flex flex-row justify-between">
            <div>
              <button className="border-1 rounded px-2 py-1">Cancel</button>
            </div>
            <button className=" bg-black rounded px-2 py-1 text-white">
              Browse Files
            </button>
          </div>
        </div>
      </div>

      <div className="border border-gray-300 mt-6 px-4 py-2 rounded-md hover:shadow">
        <p className="text-lg ms-4 font-medium">CSV Preview</p>
        <p className="text-sm text-gray-400 ms-4 mb-3">
          Review your data before updating inventory
        </p>

        <div className="overflow-x-auto border border-gray-300 rounded-md">
          <table className="min-w-full text-left text-sm text-gray-400">
            <thead>
              <tr>
                <th className="px-4 py-3">Product Id</th>
                <th className="px-4 py-3">SKU</th>
                <th className="px-4 py-3">Current Stock</th>
                <th className="px-4 py-3">New Stock</th>
                <th className="px-4 py-3">Adjustment Type</th>
                <th className="px-4 py-3">Reason</th>
              </tr>
            </thead>
            <tbody className="text-black">
              {sampleData.map((item, idx) => (
                <tr key={idx} className="border-t border-gray-300">
                  <td className="px-4 py-3">{item.productId}</td>
                  <td className="px-4 py-3">{item.sku}</td>
                  <td className="px-4 py-3">{item.currentStock}</td>
                  <td className="px-4 py-3">{item.newStock}</td>
                  <td className="px-4 py-3">{item.adjustmentType}</td>
                  <td className="px-4 py-3">{item.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between mt-5">
          <button className="text-black border border-gray-300 px-4 py-2 rounded-md hover:shadow">
            Cancel
          </button>
          <button className="bg-black text-white px-4 py-2 rounded-md hover:shadow">
            Confirm Bulk Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default CSVUpload;
