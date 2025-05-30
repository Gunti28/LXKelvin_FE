import axios from "axios";

/**
 * axiosInstance will be used for maintain the api path across the application
 */
const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
