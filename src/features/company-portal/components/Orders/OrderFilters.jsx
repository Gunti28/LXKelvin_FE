import React, { useState } from "react";

const OrderFilters = () => {
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");
  const [payment, setPayment] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleReset = () => {
    setDate("");
    setMaxPrice("");
    setMinPrice("");
    setPayment("");
    setStatus("");
  };

  return (
    <div className="bg-white p-4 rounded-xl space-y-6 mx-auto">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Filters</h2>
        <p className="text-gray-400 text-sm">
          Filter orders by date, status, payment method, or order value
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Date Range
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border rounded px-3 py-2 text-sm w-full"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Status
          </label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="border rounded px-3 py-2 text-sm w-full"
          >
            <option>All Statuses</option>
            <option>Pending</option>
            <option>Paid</option>
            <option>Processing</option>
            <option>Failed</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Payment Method
          </label>
          <select
            value={payment}
            onChange={(e) => setPayment(e.target.value)}
            className="border rounded px-3 py-2 text-sm w-full"
          >
            <option>All Methods</option>
            <option>Card</option>
            <option>Cash</option>
            <option>UPI</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Order Value
          </label>
          <div className="flex gap-2">
            <input
              type="number"
              placeholder="Min"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="border rounded px-3 py-2 text-sm w-1/2"
            />
            <input
              type="number"
              placeholder="Max"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="border rounded px-3 py-2 text-sm w-1/2"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-4">
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
          className="border border-gray-300 text-black px-5 py-2 rounded bg-white hover:bg-gray-100"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default OrderFilters;
