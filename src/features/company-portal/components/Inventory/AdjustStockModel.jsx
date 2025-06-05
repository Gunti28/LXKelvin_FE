import React from "react";

const AdjustStockModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-opacity-0 flex justify-center items-center">
      <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 relative">
        <button
          onClick={onClose}
          className="absolute right-7 text-gray-500 hover:text-black"
        >
          &times;
        </button>

        <h2 className="text-lg font-semibold mb-1">Adjust Stock</h2>
        <p className="text-sm text-gray-500 mb-4">
          Update the stock level for{" "}
          <strong>Wireless Bluetooth Headphones (WBH-001)</strong>
        </p>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="text-sm">Current Stock</label>
            <input
              type="text"
              className="w-full border rounded px-2 py-1 text-sm"
              value="45"
              readOnly
            />
          </div>
          <div>
            <label className="text-sm">Available Stock</label>
            <input
              type="text"
              className="w-full border rounded px-2 py-1 text-sm"
              value="40"
              readOnly
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="text-sm">Adjustment Type</label>
          <select className="w-full border rounded px-2 py-1 text-sm">
            <option>Set Stock</option>
            <option>Increase Stock</option>
            <option>Decrease Stock</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="text-sm">Quantity</label>
          <input
            type="number"
            className="w-full border rounded px-2 py-1 text-sm"
          />
        </div>

        <div className="mb-4">
          <label className="text-sm">Reason</label>
          <select className="w-full border rounded px-2 py-1 text-sm">
            <option>Purchase</option>
            <option>Damage</option>
            <option>Lost</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="text-sm">Notes</label>
          <textarea
            className="w-full border rounded px-2 py-1 text-sm"
            placeholder="Add any additional note here..."
          />
        </div>

        <div className="mb-4">
          <label className="text-sm">Reference Number (Optional)</label>
          <input
            type="text"
            className="w-full border rounded px-2 py-1 text-sm"
            placeholder="e.g., PO-12345"
          />
        </div>

        <div className="flex justify-between">
          <button
            onClick={onClose}
            className="px-3 py-1 text-sm rounded border border-gray-300 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button onClick={onClose}
           className="px-3 py-1 text-sm rounded bg-black text-white hover:bg-gray-800">
            Confirm Adjustment
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdjustStockModal;
