
import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setMainImage,
  addGalleryImage,
  removeGalleryImage,
  reorderGalleryImage,
  setStatus,
} from "../../../../../store/slice/admin-portal/admin-productImagesSlice";
import { ArrowUp, ArrowDown, X, ImagePlus } from "lucide-react";

const ImagesTab = ({onSave, onCancel}) => {
  const dispatch = useDispatch();
  const mainImageInputRef = useRef(null);
  const galleryInputRef = useRef(null);

  const { main, gallery, status } = useSelector((state) => state.adminProductImages);

  const handleMainImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      dispatch(setMainImage(imageUrl));
    }
  };

  const handleGalleryUpload = (e) => {
    const files = Array.from(e.target.files);
    files.forEach((file) => {
      const imageUrl = URL.createObjectURL(file);
      dispatch(addGalleryImage(imageUrl));
    });
  };

  const handleRemoveImage = (imageId) => {
    dispatch(removeGalleryImage(imageId));
  };

  const handleMoveImage = (index, direction) => {
    const toIndex = direction === "up" ? index - 1 : index + 1;
    if (toIndex >= 0 && toIndex < gallery.length) {
      dispatch(reorderGalleryImage({ fromIndex: index, toIndex }));
    }
  };

  const handleMainImageClick = () => {
    mainImageInputRef.current?.click();
  };

  const handleGalleryImageClick = () => {
    galleryInputRef.current?.click();
  };

  return (
    <div className="bg-white p-2 space-y-6 max-w-4xl mx-auto">
      {/* Main Product Image */}
      <div>
        <label className="block font-medium mb-2">Main Product Image</label>
        <div className="border-2 border-dashed rounded-md p-6 text-center">
          {main ? (
            <div className="relative">
              <img src={main} alt="Main" className="mx-auto h-40 object-contain" />
              <button
                type="button"
                className="mt-2 px-4 py-1 bg-gray-100 rounded border"
                onClick={handleMainImageClick}
              >
                Change Image
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-3">
              <ImagePlus className="w-8 h-8 text-gray-500" />
              <span className="text-gray-500">Drag and drop or click to browse</span>
              <button
                type="button"
                className="px-4 py-1 bg-gray-100 rounded border"
                onClick={handleMainImageClick}
              >
                Upload Image
              </button>
            </div>
          )}
          <input
            ref={mainImageInputRef}
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleMainImageUpload}
          />
        </div>
      </div>

      {/* Gallery Images */}
      <div>
        <label className="block font-medium mb-2">Gallery Images</label>
        <p className="text-sm text-gray-500 mb-2">
          Add multiple images to showcase your product. Use arrows to reorder.
        </p>
        <div className="flex flex-wrap gap-4">
          {gallery.map((img, index) => (
            <div
              key={index}
              className="relative w-24 h-24 border rounded-md overflow-hidden"
            >
              <img src={img} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover" />
              <div className="absolute top-1 right-1 flex flex-col items-center space-y-1">
                <button
                  type="button"
                  className="bg-red-500 p-1 rounded-full"
                  onClick={() => handleRemoveImage(index)}
                >
                  <X size={14} className="text-white" />
                </button>
                {index > 0 && (
                  <button
                    type="button"
                    className="bg-gray-300 p-1 rounded-full"
                    onClick={() => handleMoveImage(index, "up")}
                  >
                    <ArrowUp size={14} />
                  </button>
                )}
                {index < gallery.length - 1 && (
                  <button
                    type="button"
                    className="bg-gray-300 p-1 rounded-full"
                    onClick={() => handleMoveImage(index, "down")}
                  >
                    <ArrowDown size={14} />
                  </button>
                )}
              </div>
            </div>
          ))}

          {/* Add Image Button */}
          <div
            className="w-24 h-24 border-2 border-dashed flex items-center justify-center rounded-md cursor-pointer hover:bg-gray-50"
            onClick={handleGalleryImageClick}
          >
            <ImagePlus className="text-gray-500" />
          </div>
          <input
            ref={galleryInputRef}
            type="file"
            multiple
            className="hidden"
            accept="image/*"
            onChange={handleGalleryUpload}
          />
        </div>
      </div>

      {/* Product Status & Buttons */}
      <div className="flex flex-col md:flex-row items-center gap-4 justify-end">
        <div className="flex items-center gap-2">
          <label className="font-medium">Product Status:</label>
          <select
            value={status}
            onChange={(e) => dispatch(setStatus(e.target.value))}
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

export default ImagesTab;