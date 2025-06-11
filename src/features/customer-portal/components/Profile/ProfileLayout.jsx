import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Icon } from "@iconify/react";
import { Offcanvas, Button } from "react-bootstrap";
import styles from "../../../../lib/common/css/profile/ProfileLayout.module.css";

const navItems = [
  {
    to: "/my_account",
    icon: "healthicons:ui-user-profile-outline",
    label: "My Profile",
  },
  {
    to: "/my_account/my_address",
    icon: "hugeicons:location-03",
    label: "My Address",
  },
  {
    to: "/my_account/my_orders",
    icon: "solar:bag-4-linear",
    label: "My Orders",
  },
  {
    to: "/my_account/save_for_later",
    icon: "solar:heart-linear",
    label: "Save for Later",
  },
  {
    to: "/my_account/customer_support",
    icon: "streamline:customer-support-1",
    label: "Customer Support",
  },
  {
    to: "/my_account/logOut",
    icon: "material-symbols-light:logout-sharp",
    label: "Logout",
  },
];
const ProfileLayout = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleClose = () => setShowSidebar(false);
  const handleShow = () => setShowSidebar(true);
  return (
    <div className={styles.MainCon}>
      <Button
        variant="outline-dark"
        onClick={handleShow}
        className={`${styles.hamburgerBtn} d-md-none`}
        style={{ display: showSidebar ? "none" : null }}
      >
        ☰
      </Button>

      <Offcanvas show={showSidebar} onHide={handleClose} className="d-md-none">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className={styles.navList}>
            {navItems.map(({ to, icon, label }) => (
              <li key={label}>
                <NavLink
                  to={to}
                  end
                  className={({ isActive }) =>
                    `${styles.navItem} ${isActive ? styles.activeLink : ""}`
                  }
                  onClick={handleClose}
                >
                  <Icon icon={icon} width="24" height="24" />
                  <span className={styles.navLabel}>{label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </Offcanvas.Body>
      </Offcanvas>

      <div className={`${styles.sidebar} d-none d-md-block`}>
        <ul className={styles.navList}>
          {navItems.map(({ to, icon, label }) => (
            <li key={label}>
              <NavLink
                to={to}
                end
                className={({ isActive }) =>
                  `${styles.navItem} ${isActive ? styles.activeLink : ""}`
                }
              >
                <Icon icon={icon} width="24" height="24" />
                <span className={styles.navLabel}>{label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};
export default ProfileLayout;
