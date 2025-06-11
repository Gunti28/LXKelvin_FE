

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSalesReport } from "../../../../lib/services/admin-portal/adminReportsAsyncThunk";

const SalesByProduct = ({ selectedRange }) => {
  const dispatch = useDispatch();
  const { byProduct, loading, error } = useSelector((state) => state.adminSalesReport);

  useEffect(() => {
    if (selectedRange?.startDate && selectedRange?.endDate) {
      dispatch(fetchSalesReport(selectedRange));
    }
  }, [dispatch, selectedRange]);

  if (loading) return <p>Loading Sales by Product...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="border-1 rounded p-4">
      <h3 className="text-lg font-semibold mb-4">Sales By Product</h3>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="border p-2">Product</th>
            <th className="border p-2">Units Sold</th>
            <th className="border p-2">Total Sales</th>
          </tr>
        </thead>
        <tbody>
          {byProduct?.length > 0 ? (
            byProduct.map((item) => (
              <tr key={item.productId}>
                <td className="border p-2">{item.productName}</td>
                <td className="border p-2">{item.unitsSold}</td>
                <td className="border p-2">${item.totalSales.toFixed(2)}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="p-4 text-center text-gray-500">
                No product sales data available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SalesByProduct;


