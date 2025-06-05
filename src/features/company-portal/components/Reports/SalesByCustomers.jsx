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
