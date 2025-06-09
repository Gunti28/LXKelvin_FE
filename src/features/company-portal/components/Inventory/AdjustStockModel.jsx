

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  closeAdjustStockModal,
  setAdjustmentType,
  setQuantity,
  setReason,
  setNotes,
  setReferenceNumber,
} from "../../../../store/slice/admin-portal/admin-inventoryAdjustStockModelSlice";

const AdjustStockModal = ({ product, onClose }) => {
  const dispatch = useDispatch();

  const {
    adjustmentType,
    quantity,
    reason,
    notes,
    referenceNumber,
  } = useSelector((state) => state.adminInventoryAdjustStock);

  if (!product) return null;

  const handleClose = () => {
    dispatch(closeAdjustStockModal());
    onClose?.();
  };

  const handleConfirm = () => {
    console.log("Stock Adjusted:", {
      id: product.id,
      adjustmentType,
      quantity,
      reason,
      notes,
      referenceNumber,
    });

    dispatch(closeAdjustStockModal());
    onClose?.(); 
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-30 flex justify-center items-center">
      <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 relative">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute right-4 top-3 text-gray-500 hover:text-black text-2xl"
          aria-label="Close"
        >
          &times;
        </button>

        {/* Title & subtitle */}
        <h2 className="text-lg font-semibold mb-1">Adjust Stock</h2>
        <p className="text-sm text-gray-500 mb-4">
          Update stock for{" "}
          <strong>{product.name} ({product.id})</strong>
        </p>

        {/* Current & Available Stock */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="text-sm font-medium">Current Stock</label>
            <input
              type="text"
              className="w-full border rounded px-2 py-1 text-sm bg-gray-100"
              value={product.inventory}
              readOnly
            />
          </div>
          <div>
            <label className="text-sm font-medium">Available Stock</label>
            <input
              type="text"
              className="w-full border rounded px-2 py-1 text-sm bg-gray-100"
              value={product.available}
              readOnly
            />
          </div>
        </div>

        {/* Adjustment Type */}
        <div className="mb-4">
          <label className="text-sm font-medium">Adjustment Type</label>
          <select
            className="w-full border rounded px-2 py-1 text-sm"
            value={adjustmentType}
            onChange={(e) => dispatch(setAdjustmentType(e.target.value))}
          >
            <option value="">Select Type</option>
            <option value="Set Stock">Set Stock</option>
            <option value="Increase Stock">Increase Stock</option>
            <option value="Decrease Stock">Decrease Stock</option>
          </select>
        </div>

        {/* Quantity */}
        <div className="mb-4">
          <label className="text-sm font-medium">Quantity</label>
          <input
            type="number"
            className="w-full border rounded px-2 py-1 text-sm"
            value={quantity}
            onChange={(e) =>
              dispatch(setQuantity(Math.max(0, Number(e.target.value))))
            }
            min="0"
          />
        </div>

        {/* Reason */}
        <div className="mb-4">
          <label className="text-sm font-medium">Reason</label>
          <select
            className="w-full border rounded px-2 py-1 text-sm"
            value={reason}
            onChange={(e) => dispatch(setReason(e.target.value))}
          >
            <option value="">Select Reason</option>
            <option value="Purchase">Purchase</option>
            <option value="Damage">Damage</option>
            <option value="Lost">Lost</option>
          </select>
        </div>

        {/* Notes */}
        <div className="mb-4">
          <label className="text-sm font-medium">Notes</label>
          <textarea
            className="w-full border rounded px-2 py-1 text-sm"
            placeholder="Add any additional note here..."
            value={notes}
            onChange={(e) => dispatch(setNotes(e.target.value))}
            rows={3}
          />
        </div>

        {/* Reference Number */}
        <div className="mb-4">
          <label className="text-sm font-medium">Reference Number (Optional)</label>
          <input
            type="text"
            className="w-full border rounded px-2 py-1 text-sm"
            placeholder="e.g., PO-12345"
            value={referenceNumber}
            onChange={(e) => dispatch(setReferenceNumber(e.target.value))}
          />
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between mt-6">
          <button
            onClick={handleClose}
            className="px-4 py-2 text-sm rounded border border-gray-300 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            className="px-4 py-2 text-sm rounded bg-black text-white hover:bg-gray-800"
            disabled={!adjustmentType || quantity <= 0}
          >
            Confirm Adjustment
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdjustStockModal;
