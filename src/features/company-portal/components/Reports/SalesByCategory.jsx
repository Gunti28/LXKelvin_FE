<<<<<<< HEAD
import React from "react";

const SalesByCategory = () => (
  <div className="rounded bg-white p-6 border border-black">
<p>Sales By Category</p>
  </div>
);
=======

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSalesReport } from "../../../../lib/services/admin-portal/adminReportsAsyncThunk";

const SalesByCategory = ({ selectedRange }) => {
  const dispatch = useDispatch();
  const { byCategory, loading, error } = useSelector((state) => state.adminSalesReport);

  useEffect(() => {
    if (selectedRange?.startDate && selectedRange?.endDate) {
      dispatch(fetchSalesReport(selectedRange));
    }
  }, [dispatch, selectedRange]);

  if (loading) return <p>Loading Sales by Category...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="rounded p-4 border-1">
      <h3 className="text-lg font-semibold mb-4">Sales By Category</h3>
      <ul>
        {byCategory?.length > 0 ? (
          byCategory.map((cat) => (
            <li key={cat.categoryId} className="mb-2">
              <strong>{cat.categoryName}:</strong> ${cat.totalSales.toFixed(2)}
            </li>
          ))
        ) : (
          <p className="text-gray-500">No category sales data available.</p>
        )}
      </ul>
    </div>
  );
};
>>>>>>> 1aaa11657b10901bae6f23777070dbe03c84a405

export default SalesByCategory;
