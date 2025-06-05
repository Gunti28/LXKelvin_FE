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
        </div>
      </div>
    </div>
  );
};

export default SalesByDate;
