import React, { useState } from "react";
import { Import, Plus, RefreshCw, ArrowUpFromLine } from "lucide-react";
import CSVUpload from "./Bulk Update/CSVUpload";
import ManualEntry from "./Bulk Update/ManualEntry";
import BarcodeScan from "./Bulk Update/BarcodeScan";
import Stock from "./Stock";
import StockHistoryData from "./StockHistory";


const InventoryPage = () => {
  const [activeTab, setActiveTab] = useState("Stock"); 
  const [chartType, setChartType] = useState("CSVUpload");

  const sampleData = [
    {
      productId: "PRD-1001",
      sku: "WBH-001",
      currentStock: 45,
      newStock: 50,
      adjustmentType: "Add",   
      reason: "Purchase",
    },
    {
      productId: "PRD-1002",
      sku: "PCT-002",
      currentStock: 120,
      newStock: 120,
      adjustmentType: "Set",
      reason: "Inventory Correction",
    },
  ];

  const renderChartContent = () => {
    switch (chartType) {
      case "CSVUpload":
        return <CSVUpload sampleData={sampleData} />;
      case "ManualEntry":
        return <ManualEntry />;
      case "BarcodeScan":
        return <BarcodeScan />;
      default:
        return null;
    }
  };

  return (
    <div className="mb-10">
      <div className="flex justify-between sm:items-center mb-3 relative ">
        <p className="text-2xl font-semibold text-black mb-2">Inventory Management</p>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-md text-gray-700 hover:shadow">
            <RefreshCw size={16} /> Refresh
          </button>
          <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-md text-gray-700 hover:shadow">
            <ArrowUpFromLine size={16} /> Export
          </button>
          <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-md text-gray-700 hover:shadow">
            <Import size={16} /> Import
          </button>
          <button className="bg-black text-white flex items-center gap-2 px-4 py-2 rounded-md hover:shadow">
            <Plus size={18} /> New Purchase Product
          </button>
        </div>
      </div>

      <div className="border border-gray-300 px-4 py-2 rounded">
        <p className="text-xl font-semibold ms-4 text-black">Inventory Overview</p>
        <p className="text-sm text-gray-400 ms-4">
          Manage your product stock, suppliers, purchase orders
        </p>

        <div className="mt-4 flex justify-between">
          {["Stock", "BulkUpdate", "Stock History", "Suppliers", "PurchaseOrders"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative text-sm px-3 py-1 rounded-md transition-all duration-200 ${
                activeTab === tab
                  ? 'text-black font-medium after:content-[""] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-[2px] after:bg-black'
                  : "text-gray-500"
              }`}
            >
              {tab.replace(/([A-Z])/g, " $1").trim()}
            </button>
          ))}
        </div>
      </div>

      {activeTab === "BulkUpdate" && (
        <div className="border border-gray-300 px-2 py-2 rounded mt-4">
          <div className="flex w-max gap-2 bg-gray-200 px-2 py-2 rounded mb-4">
            {["CSVUpload", "ManualEntry", "BarcodeScan"].map((type) => (
              <button
                key={type}
                onClick={() => setChartType(type)}
                className={`text-sm px-2 py-1 rounded ${
                  chartType === type ? "bg-white text-black" : "text-gray-500"
                }`}
              >
                {type.replace(/([A-Z])/g, " $1").trim()}
              </button>
            ))}
          </div>

          {renderChartContent()}
        </div>
      )}

      {activeTab === "Stock" && <Stock />}
      {activeTab === "Stock History" && <StockHistoryData/>}
    </div>
  );
};

export default InventoryPage;
