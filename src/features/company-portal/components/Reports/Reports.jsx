import React, { useState } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { CalendarDays, Download } from "lucide-react";
import { FaArrowUp } from "react-icons/fa6";
import SalesByDate from "./SalesByDate";
import SalesByCustomer from "./SalesByCustomers";
import CustomReport from "./CustomReport";
import SalesByCategory from "./SalesByCategory";
import SalesByProduct from "./SalesByProduct";

const ReportPage = ({ onDateSelect }) => {
  const [activeTab, setActiveTab] = useState("SalesByDate");
  const [chartType, setChartType] = useState("Line");
  const [selectedRange, setSelectedRange] = useState(null);
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
    onDateSelect && onDateSelect(selected);
  };

  return (
    <div className="space-y-4 mb-20">
      <p className="lg:text-2xl font-semibold sm:text-base">
        Reports & Analytics
      </p>
      <div className="bg-white p-4 rounded shadow">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5 me-2 relative">
          <div className="w-full sm:w-auto">
            <button
              onClick={() => setShowCalendar(!showCalendar)}
              className="w-full sm:w-auto border border-black flex items-center justify-center sm:justify-start gap-2 px-4 py-2 rounded-md text-gray-700 hover:shadow"
            >
              <CalendarDays size={16} />
              {hasSelected
                ? `${format(
                    selectionRange.startDate,
                    "MMM d, yyyy"
                  )} - ${format(selectionRange.endDate, "MMM d, yyyy")}`
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-5 ">
          <div className="bg-white p-3 rounded border border-black">
            <div className="flex flex-row justify-between">
              <h6 className="text-sm mb-1 text-gray-500">
                Average Order Value
              </h6>
              <div className="flex flex-row text-green-900 text-[10px] h-[18px] bg-green-200 px-1 py-[2px] rounded">
                <FaArrowUp />
                <p>+5.2%</p>
              </div>
            </div>
            <p className="text-xl font-bold">$67.00</p>
            <p className="text-sm text-gray-400">Vs. previous period</p>
          </div>
          <div className="bg-white p-3 rounded border border-black">
            <div className="flex flex-row justify-between">
              <h6 className="text-sm text-gray-500 ">Conversion Rate</h6>
              <div className="flex flex-row text-green-900 text-[10px] h-[18px] bg-green-200 px-1 py-[2px] rounded">
                <FaArrowUp />
                <p>+5.2%</p>
              </div>
            </div>
            <p className="text-xl font-bold">5.24%</p>
            <p className="text-sm text-gray-400">Vs. previous period</p>
          </div>
          <div className="bg-white p-3 rounded border border-black">
            <div className="flex flex-row justify-between">
              <h6 className="text-sm text-gray-500 ">Cart Abandonment</h6>
              <div className="flex flex-row text-green-900 text-[10px] h-[18px] bg-green-200 px-1 py-[2px] rounded">
                <FaArrowUp />
                <p>+5.2%</p>
              </div>
            </div>
            <p className="text-xl font-bold">68.7%</p>
            <p className="text-sm text-gray-400 ">Vs. previous period</p>
          </div>
          <div className="bg-white p-3 rounded border border-black">
            <div className="flex flex-row justify-between">
              <h6 className="text-sm text-gray-500 ">
                Customer Acquisition Cost
              </h6>
              <div className="flex flex-row text-green-900 text-[10px] h-[18px] bg-green-200 px-1 py-[2px] rounded">
                <FaArrowUp />
                <p>+5.2%</p>
              </div>
            </div>
            <p className="text-xl font-bold">$24.01</p>
            <p className="text-sm text-gray-400">Vs. previous period</p>
          </div>
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
                activeTab === tab.id ? " bg-white text-black" : "text-gray-500"
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
        {activeTab === "SalesByCustomer" && (
          <SalesByCustomer selectedRange={selectedRange} />
        )}
        {activeTab === "customReport" && <CustomReport />}
        {activeTab === "SalesByCategory" && <SalesByCategory />}
        {activeTab === "SalesByProduct" && <SalesByProduct />}
      </div>
    </div>
  );
};

export default ReportPage;
