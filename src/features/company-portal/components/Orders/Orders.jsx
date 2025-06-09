

import React, { useEffect } from "react";
import { Printer, Upload, Plus } from "lucide-react";
import OrderFilters from "./OrderFilters";
import OrderTable from "./OrderTable";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../../../../lib/services/admin-portal/adminOrderSyncThunk";

function OrderPage() {
  const dispatch = useDispatch();
  const { loading, error, orders } = useSelector((state) => state.adminOrders);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  if (loading) return <div className="p-4">Loading orders...</div>;
  if (error) return <div className="p-4 text-red-500">Error: {error}</div>;

  return (
    <div className="space-y-4 mb-20">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-2">
        <p className="lg:text-3xl font-semibold text-center sm:text-left">
          Orders Management ({orders.length})
        </p>

        <div className="flex flex-wrap justify-center sm:justify-end gap-2">
          <button className="flex items-center px-4 py-2 border rounded-md text-sm font-medium hover:bg-gray-200 gap-2">
            <Printer className="w-3 h-3" />
            Print
          </button>
          <button className="flex items-center px-4 py-2 border rounded-md text-sm font-medium hover:bg-gray-200 gap-2">
            <Upload className="w-3 h-3" />
            Export
          </button>
          <button className="flex items-center px-4 py-2 bg-black text-white rounded-md text-sm font-medium hover:bg-gray-800 gap-2">
            <Plus className="w-3 h-3" />
            New Order
          </button>
        </div>
      </div>
      
      <div>
        <OrderFilters />
      </div>

      <div>
        <OrderTable />
      </div>
    </div>
  );
}

export default OrderPage;
