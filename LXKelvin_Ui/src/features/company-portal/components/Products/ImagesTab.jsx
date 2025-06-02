
import { useEffect, useState } from "react";
import { ArrowUp, ArrowDown, X, ImagePlus } from "lucide-react";

const ImagesTab = ({ data, onChange }) => {
  const [mainImage, setMainImage] = useState(data.images.main || null);
  const [galleryImages, setGalleryImages] = useState(data.images.gallery || []);

  
  useEffect(() => {
    onChange("images", { main: mainImage, gallery: galleryImages });
  }, [mainImage, galleryImages]);

  const handleMainImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setMainImage(imageUrl);
    }
  };

  const handleGalleryUpload = (e) => {
    const files = Array.from(e.target.files);
    const previews = files.map((file) => URL.createObjectURL(file));
    setGalleryImages((prev) => [...prev, ...previews]);
  };

  const removeImage = (index) => {
    setGalleryImages((prev) => {
      const updated = [...prev];
      updated.splice(index, 1);
      return updated;
    });
  };

  const moveImage = (index, direction) => {
    setGalleryImages((prev) => {
      const updated = [...prev];
      const newIndex = direction === "up" ? index - 1 : index + 1;
      if (newIndex < 0 || newIndex >= updated.length) return updated;
      [updated[index], updated[newIndex]] = [updated[newIndex], updated[index]];
      return updated;
    });
  };

  return (
    <div className="bg-white p-2 space-y-6 max-w-4xl mx-auto">
      {/* Main Product Image */}
      <div>
        <label className="block font-medium mb-2">Main Product Image</label>
        <div className="border-2 border-dashed rounded-md p-6 text-center">
          {mainImage ? (
            <img
              src={mainImage}
              alt="Main"
              className="mx-auto h-40 object-contain"
            />
          ) : (
            <div className=" flex flex-col items-center gap-3">
               <ImagePlus className="w-8 h-8 text-gray-500" />
            <label className="cursor-pointer space-y-2">
              <span className="text-gray-500">Drag and drop or click to browse</span>
              <input type="file" className="hidden" onChange={handleMainImageUpload} />
              </label>
              <button className=" px-4 py-1 bg-gray-100 rounded border">Upload Image</button>
            </div>
          )}
        </div>
      </div>

      {/* Gallery Images */}
      <div>
        <label className="block font-medium mb-2">Gallery Images</label>
        <p className="text-sm text-gray-500 mb-2">Add multiple images to showcase your product. Drag to reorder.</p>
        <div className="flex flex-wrap gap-4">
          {galleryImages.map((img, index) => (
            <div key={index} className="relative w-24 h-24 border rounded-md overflow-hidden">
              <img src={img} alt="Gallery" className="w-full h-full object-cover" />
              <div className="absolute top-1 right-1 flex flex-col items-center space-y-1">
                <button
                  className="bg-red-500 p-1 rounded-full"
                  onClick={() => removeImage(index)}
                >
                  <X size={14} className="text-white" />
                </button>
                <button
                  className="bg-gray-300 p-1 rounded-full"
                  onClick={() => moveImage(index, "up")}
                >
                  <ArrowUp size={14} />
                </button>
                <button
                  className="bg-gray-300 p-1 rounded-full"
                  onClick={() => moveImage(index, "down")}
                >
                  <ArrowDown size={14} />
                </button>
              </div>
            </div>
          ))}

          {/* Add Image Button */}
          <label className="w-24 h-24 border border-dashed flex items-center justify-center rounded-md cursor-pointer">
            <input type="file" multiple className="hidden" onChange={handleGalleryUpload} />
            <ImagePlus className="text-gray-500" />
          </label>
        </div>
      </div>

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

        <button className="border-1 px-3 py-1 rounded border-gray-400">
          Cancel
        </button>
        <button className="border-1 px-3 py-1 rounded border-gray-400 bg-black text-white">
          Add Product
        </button>
      </div>
    </div>
  );
};

export default ImagesTab;
