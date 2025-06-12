import React, { useState, useRef, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { MdNoteAlt } from "react-icons/md";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { CalendarDays, Upload } from "lucide-react";

const generateProducts = () => {
  return Array.from({ length: 100 }, (_, idx) => ({
    id: `PRD-${(idx + 1).toString().padStart(4, "100")}`,
    name: idx % 3 === 0 ? "Tomato" : idx % 2 === 0 ? "Apple" : "Lassi",
    category:
      idx % 3 === 0 ? "Vegetables" : idx % 2 === 0 ? "Fruits" : "Milk-Products",
    inventory: 55,
    reserved: 5,
    available: 50,
    reorder: 14,
    status: idx === 4 ? "Out of Stock" : "Active",
  }));
};

const StockHistoryData = () => {
  const products = generateProducts();
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dropdownRefs = useRef([]);

  const [PaymentStatus, setPaymentStatus] = useState("");
  const [type, setType] = useState("");
  const [ reason, setReason] = useState('');
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const [hasSelected, setHasSelected] = useState(false);

  const handleSelect = (ranges) => {
    const selected = ranges.selection;
    setSelectionRange(selected);
    setShowCalendar(false);
    setHasSelected(true);
  };

  const handleReset = () => {
    setReason("");
    setType("");
    setPaymentStatus("");
    setHasSelected(false);
    setSelectionRange({
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    });
  };

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      dropdownRefs.current.forEach((ref, idx) => {
        if (ref && !ref.contains(event.target)) {
          if (openDropdown === idx) {
            setOpenDropdown(null);
          }
        }
      });
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openDropdown]);

  return (
    <div className="border min-h-screen space-x-4 mb-20">
      <div className=" border p-4 rounded space-y-6 mx-4  mt-4  relative">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Stock History Filters
          </h2>
          <p className="text-gray-400 text-sm">
            Filter stock history by date, product, or adjustment type
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="w-full relative">
            <label className="text-sm font-medium text-gray-700 ">
              Date Range
            </label>
            <button
              onClick={() => setShowCalendar(!showCalendar)}
              className="w-full border-1 border-gray-600 flex items-center justify-between gap-2 px-4 py-2 h-10 rounded text-gray-700"
            >
              <span className="flex items-center gap-2">
                <CalendarDays size={16} />
                {hasSelected
                  ? `${format(
                      selectionRange.startDate,
                      "MMM d, yy"
                    )} - ${format(selectionRange.endDate, "MMM d, yy")}`
                  : "Select the date"}
              </span>
            </button>

            {showCalendar && (
              <div className="absolute z-50 mt-2 bg-white shadow-lg rounded">
                <DateRange
                  ranges={[selectionRange]}
                  onChange={handleSelect}
                  moveRangeOnFirstSelection={false}
                  rangeColors={["#243c5a"]}
                />
              </div>
            )}
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Products
            </label>
            <select
              value={PaymentStatus}
              onChange={(e) => setPaymentStatus(e.target.value)}
              className="border-1 border-gray-600 rounded px-3 py-2 text-sm w-full"
            >
              <option value="">All Products</option>
              <option value="Pending">Vegetables</option>
              <option value="Paid">Fruits</option>
              <option value="Processing">Seasonal Vegetables</option>
              <option value="Failed">Seasonal Fruits</option>
              <option value="Failed">Milk</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Adjustment Type
            </label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="border-1 border-gray-600 rounded px-3 py-2 text-sm w-full"
            >
              <option value="">All Types</option>
              <option value="Card">Type-1</option>
              <option value="Cash">Type-2</option>
              <option value="UPI">Type-3</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Reason
            </label>
            <select
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="border-1 border-gray-600 rounded px-3 py-2 text-sm w-full"
            >
              <option value="">All reasons</option>
              <option value="Card">reason-1</option>
              <option value="Cash">reason-2</option>
              <option value="UPI">reason-3</option>
            </select>
          </div>
        </div>

        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row gap-4">
            <div className="flex flex-row sm:flex-col gap-2">
              <div className="relative w-full sm:w-64">
                <input
                  type="text"
                  placeholder="Search by product or reference....."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="w-full border-1 rounded-lg pl-10 pr-3 py-2 text-sm"
                />
                <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
              </div>
            </div>
            <button className="bg-black text-white flex items-center gap-2 px-5 py-2 rounded shadow hover:bg-gray-800">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L15 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 019 21v-7.586L3.293 6.707A1 1 0 013 6V4z" />
              </svg>
              Apply Filters
            </button>
            <button
              onClick={handleReset}
              className="border-1 border-gray-600 text-black px-4 py-2 rounded "
            >
              Reset
            </button>
          </div>
          <div>
            <button className=" flex flex-row items-center gap-2 border-1 border-gray-600 text-black px-4 py-2 rounded ">
              <Upload className="w-5 h-5 " />
              Export
            </button>
          </div>
        </div>
      </div>
      <div className=" rounded p-4">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left border table-fixed">
            <thead className="bg-gray-50 text-gray-600 font-semibold">
              <tr>
                <th className="px-4 py-2 text-center">Product ID</th>
                <th className="px-4 py-2 text-center">Product Name</th>
                <th className="px-4 py-2 text-center">SKU</th>
                <th className="px-4 py-2 text-center">Current Stock</th>
                <th className="px-4 py-2 text-center">Reserved</th>
                <th className="px-4 py-2 text-center">Available</th>
                <th className="px-4 py-2 text-center">Reorder Level</th>
                <th className="px-4 py-2 text-center">Status</th>
                <th className="px-4 py-2 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedProducts.map((product, index) => (
                <tr key={product.id} className="border hover:bg-gray-50">
                  <td className="px-4 py-2 text-center">{product.id}</td>
                  <td className="px-4 py-2 text-center">{product.name}</td>
                  <td className="px-4 py-2 text-center">{product.category}</td>
                  <td className="px-4 py-2 text-center">{product.inventory}</td>
                  <td className="px-4 py-2 text-center">{product.reserved}</td>
                  <td className="px-4 py-2 text-center">{product.available}</td>
                  <td className="px-4 py-2 text-center">{product.reorder}</td>
                  <td className="px-4 py-2 text-center">
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
                  <td
                    className="px-4 py-2 text-center relative"
                    ref={(el) => (dropdownRefs.current[index] = el)}
                  >
                    <button
                      onClick={() =>
                        setOpenDropdown(openDropdown === index ? null : index)
                      }
                      className="text-xl hover:text-gray-700 focus:outline-none"
                    >
                      ⋯
                    </button>
                    {openDropdown === index && (
                      <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg z-10">
                        <ul className="text-sm text-left">
                          <li
                            onClick={() => {
                              setIsModalOpen(true);
                              setOpenDropdown(null);
                            }}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
                          >
                            <MdNoteAlt className="text-base" />
                            Adjust Stock
                          </li>

                          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            View History
                          </li>
                          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            View Product
                          </li>
                          <li className="px-4 hover:bg-gray-100 cursor-pointer">
                            Create Purchase Order
                          </li>
                        </ul>
                      </div>
                    )}
                  </td>
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

export default StockHistoryData;
