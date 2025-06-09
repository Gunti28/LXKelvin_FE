import React, { useState } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { CalendarDays, Download } from "lucide-react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa6";

import SalesByDate from "./SalesByDate";
import SalesByCustomer from "./SalesByCustomers";
import CustomReport from "./CustomReport";
import SalesByCategory from "./SalesByCategory";
import SalesByProduct from "./SalesByProduct";

const ReportPage = () => {
  const [activeTab, setActiveTab] = useState("SalesByDate");
  const [chartType, setChartType] = useState("Line");
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

  const selectedRange = hasSelected
    ? { startDate: selectionRange.startDate, endDate: selectionRange.endDate }
    : null;

  const kpis = [
    {
      label: "Average Order value",
      value: "€67.00",
      change: 5.2,
    },
    {
      label: "Conversion Rate",
      value: "5.24%",
      change: 0.8,
    },
    {
      label: "Cart Abandonment",
      value: "68.7%",
      change: -2.2,
    },
    {
      label: "Customer Acquisition cost",
      value: "€24.01",
      change: -5.2,
    },
  ];

  return (
    <div className="space-y-4 mb-20">
      <p className="lg:text-2xl font-semibold sm:text-base">Reports & Analytics</p>

      <div className="bg-white p-4 rounded shadow">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5 me-2 relative">
          <div className="w-full sm:w-auto">
            <button
              onClick={() => setShowCalendar(!showCalendar)}
              className="w-full sm:w-auto border border-black flex items-center justify-center sm:justify-start gap-2 px-4 py-2 rounded-md text-gray-700 hover:shadow"
            >
              <CalendarDays size={16} />
              {hasSelected
                ? `${format(selectionRange.startDate, "MMM d, yyyy")} - ${format(
                    selectionRange.endDate,
                    "MMM d, yyyy"
                  )}`
                : "Select the date"}
            </button>

            {showCalendar && (
              <div className="absolute z-50 mt-2">
                <DateRange
                  ranges={[selectionRange]}
                  onChange={handleSelect}
                  moveRangeOnFirstSelection={false}
                  rangeColors={["#243c5a"]}
                />
              </div>
            )}
          </div>

          <div className="w-full sm:w-auto">
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 border border-black px-4 py-2 rounded-md text-gray-700 hover:shadow">
              <Download size={16} />
              Export
            </button>
          </div>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
          {kpis.map((kpi, index) => (
            <div
              key={index}
              className="border rounded p-4 flex flex-col justify-between"
            >
              <p className="text-sm text-gray-500 mb-1">{kpi.label}</p>
              <p className="text-xl font-semibold">{kpi.value}</p>
              <div className="flex items-center text-green-600 text-sm">
                {kpi.change >= 0 ? (
                  <>
                    <FaArrowUp className="mr-1" /> +{kpi.change}%
                  </>
                ) : (
                  <span className="text-red-600 flex items-center">
                    <FaArrowDown className="mr-1" /> {kpi.change}%
                  </span>
                )}
              </div>
              <p className="text-xs text-gray-400">Vs. previous period</p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="bg-gray-200 px-4 sm:px-6 py-2 rounded mb-6 flex flex-wrap justify-between">
          {[
            { id: "SalesByDate", label: "Sale by Date" },
            { id: "SalesByProduct", label: "Sales by Product" },
            { id: "SalesByCategory", label: "Sales by Category" },
            { id: "SalesByCustomer", label: "Sales by Customer" },
            { id: "customReport", label: "Custom Report" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`text-sm px-2 sm:px-3 py-1 rounded ${
                activeTab === tab.id ? "bg-white text-black" : "text-gray-500"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === "SalesByDate" && (
          <SalesByDate
            selectedRange={selectedRange}
            chartType={chartType}
            setChartType={setChartType}
          />
        )}

        {activeTab === "SalesByProduct" && <SalesByProduct selectedRange={selectedRange} />}

        {activeTab === "SalesByCategory" && <SalesByCategory selectedRange={selectedRange} />}

        {activeTab === "SalesByCustomer" && <SalesByCustomer selectedRange={selectedRange} />}

        {activeTab === "customReport" && <CustomReport />}
      </div>
    </div>
  );
};

export default ReportPage;
