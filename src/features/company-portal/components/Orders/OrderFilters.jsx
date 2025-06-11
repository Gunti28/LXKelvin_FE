<<<<<<< HEAD
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
=======
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../../../../store/slice/admin-portal/admin-ordersSlice";

const OrderFilters = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.adminOrders.filters);

  const [date, setDate] = useState(filters.date || "");
  const [status, setStatus] = useState(filters.status || "");
  const [payment, setPayment] = useState(filters.paymentMethod || "");
  const [minPrice, setMinPrice] = useState(filters.minPrice || "");
  const [maxPrice, setMaxPrice] = useState(filters.maxPrice || "");

  const handleApply = () => {
    dispatch(
      setFilters({
        date,
        status,
        paymentMethod: payment,
        minPrice,
        maxPrice,
      })
    );
  };

  const handleReset = () => {
    setDate("");
    setStatus("");
    setPayment("");
    setMinPrice("");
    setMaxPrice("");
    dispatch(
      setFilters({
        date: "",
        status: "",
        paymentMethod: "",
        minPrice: "",
        maxPrice: "",
      })
    );
>>>>>>> 1aaa11657b10901bae6f23777070dbe03c84a405
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
<<<<<<< HEAD
          <label className="text-sm font-medium text-gray-700 mb-1">
            Date Range
          </label>
=======
          <label className="text-sm font-medium text-gray-700 mb-1">Date</label>
>>>>>>> 1aaa11657b10901bae6f23777070dbe03c84a405
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
<<<<<<< HEAD
            <option>All Statuses</option>
            <option>Pending</option>
            <option>Paid</option>
            <option>Processing</option>
            <option>Failed</option>
=======
            <option value="">All Statuses</option>
            <option value="Pending">Pending</option>
            <option value="Paid">Paid</option>
            <option value="Processing">Processing</option>
            <option value="Failed">Failed</option>
>>>>>>> 1aaa11657b10901bae6f23777070dbe03c84a405
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
<<<<<<< HEAD
            <option>All Methods</option>
            <option>Card</option>
            <option>Cash</option>
            <option>UPI</option>
=======
            <option value="">All Methods</option>
            <option value="Card">Card</option>
            <option value="Cash">Cash</option>
            <option value="UPI">UPI</option>
>>>>>>> 1aaa11657b10901bae6f23777070dbe03c84a405
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
<<<<<<< HEAD
        <button className="bg-black text-white flex items-center gap-2 px-5 py-2 rounded shadow hover:bg-gray-800">
=======
        <button
          onClick={handleApply}
          className="bg-black text-white flex items-center gap-2 px-5 py-2 rounded shadow hover:bg-gray-800"
        >
>>>>>>> 1aaa11657b10901bae6f23777070dbe03c84a405
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
