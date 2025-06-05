import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaEye, FaTrash, FaEdit } from "react-icons/fa";

const generateOrders = () => {
  const statuses = ["Pending", "Paid", "Processing", "Failed"];
  const fulfillments = ["Pending", "Shipped", "Delivered", "Cancelled", "Returned"];
  const customers = Array.from({ length: 100 }, (_, idx) => ({
    id: `ORD-76${52 - idx}`,
    name: `Customer ${idx + 1}`,
    email: `customer${idx + 1}@example.com`,
    date: new Date(2023, 4, Math.floor(Math.random() * 20) + 1, Math.floor(Math.random() * 24), Math.floor(Math.random() * 60)),
    amount: 99 + idx * 25,
    paymentStatus: statuses[idx % statuses.length],
    fulfillment: fulfillments[idx % fulfillments.length],
  }));
  return customers;
};

const statusClasses = {
  Pending: "bg-gray-100 text-gray-600",
  Paid: "bg-gray-800 text-white",
  Processing: "bg-indigo-200 text-indigo-800",
  Failed: "bg-red-500 text-white",
};

const fulfillmentClasses = {
  Pending: "bg-gray-100 text-gray-600",
  Shipped: "bg-gray-100 text-gray-600",
  Delivered: "bg-green-100 text-green-700",
  Returned: "bg-yellow-100 text-yellow-700",
  Cancelled: "bg-red-100 text-red-600",
};

const OrderTable = () => {
  const allOrders = generateOrders();
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;
  const filteredOrders = allOrders.filter((order) =>
    `${order.id} ${order.name} ${order.email}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );
  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
  const paginatedOrders = filteredOrders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="bg-gray-100 min-h-screen space-x-4 ">
      <div className="bg-white rounded-xl p-4 shadow">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-4">
          <p className="text-xl font-bold">Orders</p>
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Search orders……"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full border border-gray-300 rounded-lg pl-10 pr-3 py-2 text-sm"
            />
            <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left border table-fixed">
            <thead className="bg-gray-200 text-gray-500 text-sm ">
              <tr>
                <th className="px-4 py-2 ">Order ID</th>
                <th className="px-4 py-2">Customer</th>
                <th className="px-4 py-2">Date & Time</th>
                <th className="px-4 py-2">Amount</th>
                <th className="px-4 py-2">Payment Status <span className="text-xs text-gray-400">↑↓</span></th>
                <th className="px-4 py-2">Fulfillment <span className="text-xs text-gray-400">↑↓</span></th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedOrders.map((order, idx) => (
                <tr key={order.id} className="border hover:bg-gray-50">
                  <td className="px-4 py-2">{order.id}</td>
                  <td className="px-4 py-2">
                    <div className="flex flex-col">
                      <span className="font-semibold">{order.name}</span>
                      <span className="text-gray-500 text-xs">{order.email}</span>
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    {order.date.toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}{" "}<br/>
                    {order.date.toLocaleTimeString("en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </td>
                  <td className="px-4 py-2">${order.amount.toFixed(2)}</td>
                  <td className="px-4 py-2">
                    <span className={`text-xs px-2 py-1 rounded-full ${statusClasses[order.paymentStatus]}`}>
                      {order.paymentStatus}
                    </span>
                  </td>
                  <td className="px-4 py-2">
                    <span className={`text-xs px-2 py-1 rounded-full ${fulfillmentClasses[order.fulfillment]}`}>
                      {order.fulfillment}
                    </span>
                  </td>
                  <td className="py-4 flex items-center gap-3 text-gray-600 text-base">
                    <FaEye className="cursor-pointer hover:text-black" />
                    <FaEdit className="cursor-pointer hover:text-black" />
                    <FaTrash className="cursor-pointer hover:text-red-500" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center mt-4 text-sm text-gray-600">
          <p>Showing {paginatedOrders.length} of {filteredOrders.length} orders</p>
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
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
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

export default OrderTable;
