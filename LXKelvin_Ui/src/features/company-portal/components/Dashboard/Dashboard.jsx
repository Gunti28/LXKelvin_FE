import React, { useState } from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import { LuDollarSign } from "react-icons/lu";
import {User_1} from "../../../../lib/constants/Image_Constants/index";
import {User_2} from "../../../../lib/constants/Image_Constants/index";
import {User_3} from "../../../../lib/constants/Image_Constants/index";
import {User_4} from "../../../../lib/constants/Image_Constants/index";
import {Order_1} from "../../../../lib/constants/Image_Constants/index";
import {Order_2} from "../../../../lib/constants/Image_Constants/index";
import {Order_3} from "../../../../lib/constants/Image_Constants/index";
import {Order_4} from "../../../../lib/constants/Image_Constants/index";
import {Order_5} from "../../../../lib/constants/Image_Constants/index"

const orders = [
  {
    name: "John Smith",
    orderId: "ORD-7865",
    time: "May 6, 2023 - 10:30 AM",
    status: "Processing",
    payment: "Paid",
    amount: "$125.99",
    avatar: Order_1,
  },
  {
    name: "Sarah Johnson",
    orderId: "ORD-7862",
    time: "May 6, 2023 - 11:24 AM",
    status: "Shipped",
    payment: "Paid",
    amount: "$125.99",
    avatar: Order_2,
  },
  {
    name: "Michael Brown",
    orderId: "ORD-7863",
    time: "May 7, 2023 - 12:26 PM",
    status: "Pending",
    payment: "Pending",
    amount: "$125.99",
    avatar: Order_3,
  },
  {
    name: "Emily Davis",
    orderId: "ORD-7864",
    time: "May 7, 2023 - 03:46 PM",
    status: "Delivered",
    payment: "Paid",
    amount: "$125.99",
    avatar: Order_4,
  },
  {
    name: "Robert Wilson",
    orderId: "ORD-7866",
    time: "May 7, 2023 - 09:24 PM",
    status: "Canceled",
    payment: "Failed",
    amount: "$125.99",
    avatar: Order_5,
  },
  //     {
  //     name: "Robert Wilson",
  //     orderId: "ORD-7866",
  //     time: "May 7, 2023 - 09:24 PM",
  //     status: "Canceled",
  //     payment: "Failed",
  //     amount: "$125.99",
  //     avatar: order5,
  //   },
  //     {
  //     name: "Robert Wilson",
  //     orderId: "ORD-7866",
  //     time: "May 7, 2023 - 09:24 PM",
  //     status: "Canceled",
  //     payment: "Failed",
  //     amount: "$125.99",
  //     avatar: order5,
  //   },
];

const alerts = [
  {
    title: "Wireless Headphones",
    category: "Electronics",
    stock: 1,
    threshold: 5,
  },
  {
    title: "Cotton T-Shirt (Black, L)",
    category: "Apparel",
    stock: 2,
    threshold: 5,
  },
  {
    title: "Stainless Steel Water Bottle",
    category: "Accessories",
    stock: 1,
    threshold: 4,
  },
  {
    title: "Organic Face Cream",
    category: "Beauty",
    stock: 1,
    threshold: 3,
  },
];

const activeUsers = [
  {
    name: "Thomas Anderson",
    email: "t.anderson@example.com",
    action: "Added 3 items to cart",
    time: "5 minutes ago",
    img: User_1,
  },
  {
    name: "Lisa Johnson",
    email: "lisa.j@example.com",
    action: "Completed checkout",
    time: "12 minutes ago",
    img: User_2,
  },
  {
    name: "Kevin Patel",
    email: "k.patel@example.com",
    action: "Viewed 8 products",
    time: "18 minutes ago",
    img: User_2,
  },
  {
    name: "Maria Garcia",
    email: "m.garcia@example.com",
    action: "Left product review",
    time: "30 minutes ago",
    img: User_4,
  },
];

const newSignups = [
  {
    name: "Jessica Williams",
    email: "jessica.w@example.com",
    time: "10 minutes ago",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    name: "David Martinez",
    email: "david.m@example.com",
    time: "30 minutes ago",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    name: "Maria Garcia",
    email: "sophia.c@example.com",
    time: "1 hour ago",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const Dashboard = () => {
  const [currentTab, setCurrentTab] = useState("active");


const renderActiveCard = (user, index) => (
  <div
    key={index}
    className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border rounded-lg p-4"
  >
    <div className="flex items-center space-x-3">
      <img
        src={user.img}
        alt={user.name}
        className="w-12 h-12 rounded-full"
      />
      <div>
        <h4 className="font-medium">{user.name}</h4>
        <p className="text-sm text-gray-500">{user.email}</p>
      </div>
    </div>

    <div className="text-left sm:text-right">
      <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full font-medium inline-block">
        {user.action}
      </span>
      <p className="text-xs text-gray-400 mt-1">{user.time}</p>
    </div>
  </div>
);



  const renderSignupCard = (user, index) => (
    <div
      key={index}
      className="border rounded-lg p-2 text-center flex flex-col items-center"
    >
      <img
        src={user.avatar}
        alt={user.name}
        className="w-16 h-16 rounded-full mb-2"
      />
      <h3 className="font-semibold">{user.name}</h3>
      <p className="text-sm text-gray-500">{user.email}</p>
      <p className="text-xs text-gray-400">{user.time}</p>
      <span className="inline-block  px-2 py-1 text-xs bg-black text-white rounded-full">
        New User
      </span>
    </div>
  );

  const isActive = currentTab === "active";

  const [activeTab, setActiveTab] = useState("daily");

    const renderGraph = () => {
    switch (activeTab) {
      case "daily":
        return <span className="text-gray-400">[Daily Graph]</span>;
      case "weekly":
        return <span className="text-gray-400">[Weekly Graph]</span>;
      case "monthly":
        return <span className="text-gray-400">[Monthly Graph]</span>;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-4 ">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 ">
        <div className="sm:gap-0">
          <p className="lg:text-3xl font-semibold sm:text-base">
            Dashboard Overview
          </p>
          <p className="text-sm text-gray-500 sm:text-xs">
            Last updated: 10:08 am
          </p>
        </div>
        <div className="flex items-center gap-2 sm:mt-0 mt-2">
          <button className="px-4 py-2 text-sm bg-white border rounded hover:bg-gray-100 sm:px-2 sm:py-1 sm:text-xs">
            Export
          </button>
          <button className="px-4 py-2 text-sm bg-black text-white rounded hover:bg-indigo-700 sm:px-2 sm:py-1 sm:text-xs">
            Refresh Data
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        <div className="bg-white p-3 rounded shadow">
          <div className="flex flex-row justify-between">
          <h6 className="text-sm mb-1 text-gray-500">Today's Revenue</h6>
          <LuDollarSign />
          </div>
          <p className="text-xl font-bold">$4,550</p>
          <p className="text-sm text-green-500 mt-1">+12.5% from yesterday</p>
        </div>
        <div className="bg-white p-3 rounded shadow">
          <div className="flex flex-row justify-between">
          <h6 className="text-sm text-gray-500 mb-1 ">Weekly Revenue</h6>
          <LuDollarSign />
          </div>
          <p className="text-xl font-bold">$28,700</p>
          <p className="text-sm text-green-500 mt-1">+5.2% from last week</p>
        </div>
        <div className="bg-white p-3 rounded shadow">
          <div className="flex flex-row justify-between">
          <h6 className="text-sm text-gray-500 mb-1">Monthly Revenue</h6>
          <LuDollarSign />
          </div>
          <p className="text-xl font-bold">$125,430</p>
          <p className="text-sm text-green-500 mt-1">+8.1% from last month</p>
        </div>
        <div className="bg-white p-3 rounded shadow">
          <div className="flex flex-row justify-between">
          <h6 className="text-sm text-gray-500 mb-1">Orders Today</h6>
          <LuDollarSign />
          </div>
          <p className="text-xl font-bold">42</p>
          <p className="text-sm text-green-500 mt-1">+18% from yesterday</p>
        </div>
      </div>

      <div className="bg-white p-4 rounded shadow">
      <div className="flex flex-col mb-4">
        <div>
          <h2 className="text-lg font-semibold">Sales Performance</h2>
          <p className="text-sm text-gray-500">
            View your sales performance over time
          </p>
        </div>

        {/* Tabs */}
        <div className="flex space-x-2 mt-2 sm:mt-0 bg-gray-200 p-1 rounded gap-1 w-max">
          {["daily", "weekly", "monthly"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1 text-sm rounded transition ${
                activeTab === tab
                  ? "bg-white text-black"
                  : "bg-gray-200 hover:bg-gray-300 text-gray-700"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Graph Section */}
      <div className="h-74 flex items-center justify-center border rounded">
        {renderGraph()}
      </div>
    </div>


      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        <div className="col-span-2 bg-white p-3 rounded shadow">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-lg font-semibold">Recent Orders</h2>
              <p className="text-sm text-gray-500">Last 5 orders received</p>
            </div>
            <button className="text-sm text-gray-600 border px-3 py-1 rounded hover:bg-gray-100">
              View All
            </button>
          </div>
          <ul className=" space-y-3 max-h-[450px] overflow-y-auto pr-2">
            {orders.map((order, idx) => (
              <li
                key={idx}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 rounded hover:shadow border border-gray-300"
              >
                
                <div className="flex items-start gap-3 mb-2 sm:mb-0">
                  <img
                    src={order.avatar}
                    alt={order.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h5 className="font-medium text-base">{order.name}</h5>
                    <p className="text-sm text-gray-500">
                      {order.orderId} · {order.time}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-start sm:items-end gap-1">
                  <div className="font-semibold text-sm">{order.amount}</div>
                  <div className="flex gap-2 flex-wrap">
                    <span
                      className={`px-2 py-0.5 rounded-full text-white text-xs ${
                        order.payment === "Paid"
                          ? "bg-black"
                          : order.payment === "Failed"
                          ? "bg-red-500"
                          : "bg-yellow-500"
                      }`}
                    >
                      {order.payment}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-gray-100 text-xs border">
                      {order.status}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-3 rounded shadow">
          <h2 className="text-lg font-semibold">Inventory Alerts</h2>
          <ul className="space-y-3">
            {alerts.map((alert, idx) => (
              <li key={idx} className="border border-red-300 rounded p-3">
                <div className="flex gap-2 items-center mb-1">
                  <IoIosInformationCircleOutline className="text-red-600 font-semibold" />
                  <span className="font-medium text-red-600">
                    {alert.title}
                  </span>
                </div>
                <p className="text-sm text-gray-500">
                  Only {alert.stock} left (below threshold of {alert.threshold})
                </p>
                <div className="flex flex-row justify-between">
                  <p className="text-xs text-gray-400 border-1 rounded-full px-1 py-1 text-gray-100">
                    {alert.category}
                  </p>
                  <div className="text-xs bg-red-100 text-red-600 px-2 rounded items-center flex flex-row gap-1 ">
                    <span>Restock</span>
                    <FaArrowRight />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-lg p-4 shadow border border-purple-500">
        <h2 className="text-medium font-semibold">Customer Activity</h2>
        <p className="text-sm text-gray-500">New sign-ups and active users</p>

        <div className="mt-4 mb-4 flex space-x-2 bg-gray-200 p-1 rounded w-max">
          <button
            onClick={() => setCurrentTab("active")}
            className={`px-4 py-2 rounded font-medium ${
              isActive ? "bg-white shadow " : "text-gray-500"
            }`}
          >
            Active Users
          </button>
          <button
            onClick={() => setCurrentTab("signups")}
            className={`px-4 py-2 rounded-md font-medium ${
              !isActive ? "bg-white shadow" : "text-gray-500"
            }`}
          >
            New Sign-ups
          </button>
        </div>

        <div
          className={
            isActive
              ? "grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 max-h-[350px] overflow-y-auto"
              : "grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 max-h-[350px] overflow-y-auto"
          }
        >
          {(isActive ? activeUsers : newSignups).map((user, index) =>
            isActive
              ? renderActiveCard(user, index)
              : renderSignupCard(user, index)
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
