
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import Image from "../assets/order1.svg";

const generateProducts = () => {
  return Array.from({ length: 100 }, (_, idx) => ({
    id: `PRD-${(idx + 1).toString().padStart(3, "0")}`,
    name: idx % 3 === 0 ? "Tomato" : idx % 2 === 0 ? "Apple" : "Lassi",
    category:
      idx % 3 === 0 ? "Vegetables" : idx % 2 === 0 ? "Fruits" : "Milk-Products",
    price: "€234",
    inventory: 45,
    status: idx === 4 ? "Out of Stock" : "Active",
  }));
};

const ProductFilters = () => {
  const products = generateProducts();
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const itemsPerPage = 10;

  const filteredProducts = products.filter((product) =>
    [product.id, product.name, product.category].some((field) =>
      field.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const toggleSelectAll = () => {
    const pageIds = paginatedProducts.map((p) => p.id);
    const allSelected = pageIds.every((id) => selectedProducts.includes(id));

    if (allSelected) {
      setSelectedProducts((prev) => prev.filter((id) => !pageIds.includes(id)));
    } else {
      const newSelected = [...new Set([...selectedProducts, ...pageIds])];
      setSelectedProducts(newSelected);
    }
  };

  const toggleSelectProduct = (id) => {
    setSelectedProducts((prev) =>
      prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id]
    );
  };

  const isAllSelected = paginatedProducts.every((p) =>
    selectedProducts.includes(p.id)
  );

  return (
    <div className=" bg-gray-100 min-h-screen space-x-4">
            <div className="bg-white rounded-xl p-4 shadow">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-4">
                <p className="text-xl font-bold">Products</p>
                <div className="flex flex-wrap gap-3 items-center">
                  <div className="relative w-full sm:w-64">
                    <input
                      type="text"
                      placeholder="Search Products"
                      value={searchQuery}
                      onChange={handleSearchChange}
                      className="w-full border border-gray-300 rounded-lg pl-10 pr-3 py-2 text-sm"
                    />
                    <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
                  </div>
                  <label className="flex items-center gap-2 text-sm text-gray-700">
                    <input
                      type="checkbox"
                      checked={isAllSelected}
                      onChange={toggleSelectAll}
                    />
                    Select All
                  </label>
                  <button className="bg-white border border-gray-300 rounded px-4 py-2 text-sm hover:bg-gray-100">
                    Batch Actions
                  </button>
                </div>
              </div>
    
              {/* Table */}
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm text-left border  table-fixed">
                  <thead className="bg-gray-50 text-gray-600 font-semibold">
                    <tr>
                      <th className="px-4 py-2 ">Image</th>
                      <th className="px-4 py-2 ">Product ID</th>
                      <th className="px-4 py-2 ">Name</th>
                      <th className="px-4 py-2 ">Category</th>
                      <th className="px-4 py-2 ">Price</th>
                      <th className="px-4 py-2 ">Inventory</th>
                      <th className="px-4 py-2 ">Status</th>
                      <th className="px-4 py-2 ">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedProducts.map((product) => (
                      <tr key={product.id} className="border hover:bg-gray-50">
                        <td className="px-4 py-2  flex flex-row gap-3">
                          <input
                            type="checkbox"
                            checked={selectedProducts.includes(product.id)}
                            onChange={() => toggleSelectProduct(product.id)}
                          />
                          <img src={Image}/>
                        </td>
                        <td className="px-4 py-2 ">{product.id}</td>
                        <td className="px-4 py-2 ">{product.name}</td>
                        <td className="px-4 py-2 ">{product.category}</td>
                        <td className="px-4 py-2 ">{product.price}</td>
                        <td className="px-4 py-2 ">{product.inventory}</td>
                        <td className="px-4 py-2 ">
                          {product.status === "Out of Stock" ? (
                            <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">
                              Out of Stock
                            </span>
                          ) : (
                            <span className="bg-black text-white text-xs px-2 py-1 rounded-full">
                              Active
                            </span>
                          )}
                        </td>
                        <td className="px-4 py-2  text-center">⋯</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
    
              {/* Footer */}
              <div className="flex flex-col sm:flex-row justify-between items-center mt-4 text-sm text-gray-600">
                <p>
                  Showing {paginatedProducts.length} of {filteredProducts.length}{" "}
                  Products
                </p>
                <div className="flex gap-2 mt-2 sm:mt-0">
                  <button
                    className="border px-4 py-1 rounded hover:bg-gray-100 disabled:opacity-50"
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </button>
                  <button
                    className="border px-4 py-1 rounded hover:bg-gray-100 disabled:opacity-50"
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
  );
};

export default ProductFilters;
