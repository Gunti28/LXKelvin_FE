import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Icon } from "@iconify/react";
import { Suspense } from "react";
import CompanyNavBar from "../components/layOut/CompanyNavBar";


const menuItems = [
  { icon: "tabler:layout-dashboard", label: "Dashboard", link: "/company_admin/company_dashboard" },
  { icon: "tabler:shopping-cart", label: "Orders", link: "/company_admin/company_orders" },
  { icon: "tabler:archive", label: "Products", link: "/company_admin/company_products" },
  { icon: "tabler:box", label: "Inventory", link: "/company_admin/Company_inventory" },
  { icon: "tabler:users", label: "Customers", link: "/company_admin/company_customers" },
  { icon: "tabler:gift", label: "Promotions", link: "/company_admin/company_promotions" },
  { icon: "tabler:chart-bar", label: "Reports", link: "/company_admin/company_reports" },
  { icon: "tabler:file-text", label: "Content", link: "/company_admin/company_content" },
  { icon: "tabler:settings", label: "Settings", link: "/company_admin/company_settings" },
  { icon: "tabler:bell", label: "Notifications", link: "/company_admin/company_notifications" },
];

const CompanyLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
    <CompanyNavBar/>
    <div className="flex h-screen overflow-hidden ">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-30 w-64 transform bg-white shadow-lg transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"}`}
      style={{ maxHeight: "100vh", overflowY: "auto" }}>
        <nav className="flex flex-col p-4 space-y-2 gap-1">
          {menuItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.link}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 p-2 rounded hover:bg-yellow-400  ${
                  isActive ? "bg-yellow-400 font-medium text-white" : "text-gray-500"
                }`
              }
              style={{ textDecoration: "none" }}
            >
              <Icon icon={item.icon} width={20} className="text-gray-500" />
              <span className="text-gray-500">{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      {open && <div className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden" onClick={() => setOpen(false)}></div>}

      {/* Content */}
      <div className="flex-1 flex flex-col ml-0 lg:ml-0 bg-gray-100">
        <header className="flex items-center justify-between px-4 py-3 lg:hidden ">
          <button onClick={() => setOpen(true)}>
            <Icon icon="mdi:menu" width={28} />
          </button>
        </header>

<main className="p-4 overflow-auto flex-1">
  <Suspense fallback={<div>Loading...</div>}>
    <Outlet />
  </Suspense>
</main>

      </div>
    </div>
    </>
  );
};

export default CompanyLayout;
