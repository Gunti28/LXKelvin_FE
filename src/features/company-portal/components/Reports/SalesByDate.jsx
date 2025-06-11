<<<<<<< HEAD
import React from "react";

const SalesByDate = ({ selectedRange, chartType, setChartType }) => {
  return (
    <div className="rounded bg-white  border border-black p-6">
      <p className="text-lg font-semibold mb-2">Sales by Date</p>
      <p className="text-sm text-gray-500 mb-10">
        Showing report for:{" "}
        {selectedRange
          ? `${format(selectedRange.startDate, "MMM d, yyyy")} - ${format(
              selectedRange.endDate,
              "MMM d, yyyy"
            )}`
          : "No date selected"}
      </p>

      {/* Chart Type Toggle */}
      <div className="flex justify-center sm:justify-end sm:me-20 mb-6">
        <div className="flex gap-2 bg-gray-200 px-2 py-2 rounded">
          {["Line", "Bar", "Area"].map((type) => (
            <button
              key={type}
              onClick={() => setChartType(type)}
              className={`text-sm px-2 py-1 rounded ${
                chartType === type
                  ? " bg-white text-black "
                  : "text-gray-500"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <hr className="mb-6 sm:me-20 border-gray-300" />

      {/* Cards */}
      <div className="flex flex-col sm:flex-row gap-2 mb-6">
        <div className="rounded-xl bg-white border border-gray-400 p-6 w-full sm:w-[48%] md:w-[325px]">
          <p className="text-[16px] text-black-500">Top Revenue</p>
          <p className="text-black-500">€1,10.092</p>
        </div>
        <div className="rounded bg-white border border-gray-400 p-6 w-full sm:w-[48%] md:w-[325px]">
          <p className="text-[16px] text-black-500">Total Orders</p>
          <p className="text-black-500">1009</p>
        </div>
        <div className="rounded bg-white border border-gray-400 p-6 w-full sm:w-[48%] md:w-[325px]">
          <p className="text-[16px] text-black-500">Avg. Order Value</p>
          <p className="text-black-500">€130</p>
=======


import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSalesReport } from "../../../../lib/services/admin-portal/adminReportsAsyncThunk";

const SalesByDate = ({ selectedRange, chartType, setChartType }) => {
  const dispatch = useDispatch();
  const { salesByDate, loading, error } = useSelector((state) => state.adminSalesReport);

  useEffect(() => {
    if (selectedRange?.startDate && selectedRange?.endDate) {
      dispatch(fetchSalesReport(selectedRange));
    }
  }, [dispatch, selectedRange]);

  // Compute KPIs
  const totalRevenue = salesByDate?.reduce((sum, item) => sum + item.totalSales, 0) || 0;
  const totalOrders = salesByDate?.reduce((sum, item) => sum + item.orderCount, 0) || 0;
  const avgOrderValue = totalOrders > 0 ? (totalRevenue / totalOrders).toFixed(2) : 0;

  if (loading) return <p>Loading Sales by Date...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-4 bg-white rounded border-1">
      <h2 className="text-xl font-semibold mb-1">Sales by Date</h2>
      <p className="text-sm text-gray-500 mb-4">
        Revenue and order trends
        {selectedRange &&
          ` for ${new Date(selectedRange.startDate).toLocaleDateString()} - ${new Date(
            selectedRange.endDate
          ).toLocaleDateString()}`}
      </p>

      {/* Chart Type Buttons (Optional) */}
      <div className="flex gap-2 mb-4">
        {["Line", "Bar", "Area"].map((type) => (
          <button
            key={type}
            onClick={() => setChartType(type)}
            className={`px-3 py-1 border rounded ${
              chartType === type ? "bg-black text-white" : "bg-white text-black border-gray-400"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <div className="p-4 border rounded-md">
          <p className="text-sm text-gray-500 mb-1">Top Revenue</p>
          <p className="text-xl font-semibold">€{totalRevenue.toLocaleString()}</p>
        </div>
        <div className="p-4 border rounded-md">
          <p className="text-sm text-gray-500 mb-1">Total Orders</p>
          <p className="text-xl font-semibold">{totalOrders.toLocaleString()}</p>
        </div>
        <div className="p-4 border rounded-md">
          <p className="text-sm text-gray-500 mb-1">Avg. Order Value</p>
          <p className="text-xl font-semibold">€{avgOrderValue}</p>
>>>>>>> 1aaa11657b10901bae6f23777070dbe03c84a405
        </div>
      </div>
    </div>
  );
};

export default SalesByDate;
<<<<<<< HEAD
=======



>>>>>>> 1aaa11657b10901bae6f23777070dbe03c84a405
