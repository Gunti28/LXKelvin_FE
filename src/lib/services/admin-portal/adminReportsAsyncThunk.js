
import { createAsyncThunk } from "@reduxjs/toolkit";
import reportData from "../../../../public/mocks/admin-portal/adminReports.json";

// Helper to filter data by date range
const isInRange = (itemDate, startDate, endDate) => {
  const date = new Date(itemDate);
  return (!startDate || date >= new Date(startDate)) &&
         (!endDate || date <= new Date(endDate));
};

export const fetchSalesReport = createAsyncThunk(
  "salesReport/fetchSalesReport",
  async ({ startDate, endDate }) => {
    const filterByRange = (data) =>
      data.filter((item) => isInRange(item.date, startDate, endDate));

    return {
      salesByProduct: filterByRange(reportData.salesByProduct),
      salesByCustomer: filterByRange(reportData.salesByCustomer),
      salesByCategory: filterByRange(reportData.salesByCategory),
      salesByDate: filterByRange(reportData.salesByDate),
      summaryKPIs: reportData.summaryKPIs, 
    };
  }
);
