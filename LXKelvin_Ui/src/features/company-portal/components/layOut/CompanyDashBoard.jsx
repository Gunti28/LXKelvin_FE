


import React, { useState } from "react";
import { Icon } from "@iconify/react";
import {  Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

const menuItems = [
  { icon: "tabler:layout-dashboard", label: "Dashboard", link: "/dashboard" },
  { icon: "tabler:shopping-cart", label: "Orders", link: "/order" },
  { icon: "tabler:archive", label: "Products", link: "/products" },
  { icon: "tabler:box", label: "Inventory", link: "/inventory" },
  { icon: "tabler:users", label: "Customers", link: "/customers" },
  { icon: "tabler:gift", label: "Promotions", link: "/promotions" },
  { icon: "tabler:chart-bar", label: "Reports", link: "/reports" },
  { icon: "tabler:file-text", label: "Content", link: "/content" },
  { icon: "tabler:settings", label: "Settings", link: "/settings" },
  { icon: "tabler:bell", label: "Notifications", link: "/notifications" },
];
const CompanyDashBoard = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden ">
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 transform bg-white shadow-lg transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="flex flex-col p-4 space-y-2 gap-1">
          {menuItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.link}
              className={({ isActive }) =>
                `flex items-center gap-3 p-2 rounded text-black hover:bg-yellow-400 ${
                  isActive ? "bg-yellow-400 font-medium text-white" : ""
                }`
              }
              style={{ textDecoration: "none" }}
            >
              <Icon
                icon={item.icon}
                width={20}
                className={({ isActive }) =>
                  ` text-gray-500 ${isActive ? " text-white" : ""}`
                }
              />
              <span className="text-gray-500">{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}

      <div className="flex-1 flex flex-col ml-0 lg:ml-0 bg-gray-100 bg-grey-500">
        <header className="flex items-center justify-between px-4 py-3 lg:hidden ">
          <div className="flex items-center gap-3">
            <button className="lg:hidden" onClick={() => setOpen(true)}>
              <Icon icon="mdi:menu" width={28} />
            </button>
          </div>
        </header>

        <main className="p-4 overflow-auto flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default CompanyDashBoard;
