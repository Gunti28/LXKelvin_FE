<<<<<<< HEAD
import React from "react";
import { format } from "date-fns";

const SalesByCustomer = ({ selectedRange }) => (
  <div className="rounded bg-white border border-black p-6">
    <p className="text-lg font-semibold mb-2">Sales by Customer</p>
    <p className="text-sm text-gray-500 mb-10">
      Showing report for:{" "}
      {selectedRange
        ? `${format(selectedRange.startDate, "MMM d, yyyy")} - ${format(
            selectedRange.endDate,
            "MMM d, yyyy"
          )}`
        : "No date selected"}
    </p>
    <p className="text-md font-medium text-center text-black-500">
      Sales by Customer Table
    </p>
    <p className="text-[14px] text-center text-gray-400">
      This would display a table of customers sorted by purchase amount
    </p>
  </div>
);

export default SalesByCustomer;
=======


import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSalesReport } from "../../../../lib/services/admin-portal/adminReportsAsyncThunk";

const SalesByCustomers = ({ selectedRange }) => {
  const dispatch = useDispatch();
  const { salesByCustomer, loading, error } = useSelector((state) => state.adminSalesReport);

  useEffect(() => {
    if (selectedRange?.startDate && selectedRange?.endDate) {
      dispatch(fetchSalesReport(selectedRange));
    }
  }, [dispatch, selectedRange]);

  if (loading) return <p>Loading Sales by Customers...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Sales By Customers</h3>
      {salesByCustomer?.length > 0 ? (
         <div className="rounded bg-white border border-black p-6">
        <pre>{JSON.stringify(salesByCustomer, null, 2)}</pre>
        </div>
      ) : (
         <div className="rounded bg-white border border-black p-6">
    <p className="text-lg font-semibold mb-2">Customer Report Builder</p>
    <p className="text-sm text-gray-500 mb-10">
      Create a custom report by selecting dimensions and metrics.
    </p>
    <p className="text-md font-medium text-center text-black">
      Customer Report Builder
    </p>
    <p className="text-sm text-center text-gray-400">
      This allows users to build custom reports with selected dimensions and metrics.
    </p>
  </div>
      )}
    </div>
  );
};

export default SalesByCustomers;
>>>>>>> 1aaa11657b10901bae6f23777070dbe03c84a405
