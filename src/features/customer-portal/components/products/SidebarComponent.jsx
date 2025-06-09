import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Offcanvas, Button, Breadcrumb } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import styles from "../../../../lib/common/css/products/ListingLayout.module.css";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";

import { IMAGES } from "../../../../lib/constants/Image_Constants/index";

const SidebarComponent = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    e.preventDefault();
    setShow(true);
  };
  const categoryIcons = {
    "all-categories": IMAGES?.allProduct,
    vegetables: IMAGES?.vegetables,
    fruits: IMAGES?.fruits,
    seasonalVegetables: IMAGES?.seasonalVegetables,
    seasonalFruits: IMAGES?.seasonalFruits,
    milkProducts: IMAGES?.milkProducts,
  };
  const formatName = (key) => {
    const map = {
      "all-categories": "All Categories",
      vegetables: "Vegetables",
      fruits: "Fruits",
      seasonalVegetables: "Seasonal Vegetables",
      seasonalFruits: "Seasonal Fruits",
      milkProducts: "Milk Products",
    };
    return map[key] || key;
  };
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div>
      <Button
        className={`d-lg-none mb-3 ${styles.hamburgerBtn}`}
        onClick={handleShow}
        variant="outline-secondary"
      >
        <Icon
          icon="weui:arrow-filled"
          width="14"
          height="28"
          style={{ color: "#5B5F62" }}
        />
      </Button>
      <aside className={`${styles.sidebar} d-none d-lg-block`}>
        <Breadcrumb className="mb-4">
          <Breadcrumb.Item
            linkAs={Link}
            linkProps={{ to: "/dashBoard" }}
            className={`text-black ${styles.upperHome}`}
          >
            Home
          </Breadcrumb.Item>

          {pathnames.map((name, index) => {
            const isLast = index === pathnames.length - 1;

            return isLast ? (
              <Breadcrumb.Item
                key={index}
                active
                className={`text-black ${styles.upperHome}`}
              >
                {name.replace(/-/g, " ")}
              </Breadcrumb.Item>
            ) : (
              <Breadcrumb.Item
                key={index}
                linkAs={Link}
                linkProps={{ to: "/products/all-categories" }}
                className={`text-black ${styles.upperHome}`}
              >
                {name.replace(/-/g, " ")}
              </Breadcrumb.Item>
            );
          })}
        </Breadcrumb>
        <nav>
          {Object.keys(categoryIcons).map((key, index) => (
            <li key={index}>
              <NavLink
                to={`/products/${key}`}
                className={({ isActive }) =>
                  isActive ? `${styles.active}` : ""
                }
              >
                <img
                  src={categoryIcons[key]}
                  alt={key}
                  className={styles.icon}
                />
                {formatName(key)}
              </NavLink>
            </li>
          ))}
        </nav>
      </aside>

      <Offcanvas show={show} onHide={handleClose} className="d-lg-none">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Categories</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className={styles.sidebar}>
            {Object.keys(categoryIcons).map((key, index) => (
              <li key={index}>
                <NavLink
                  to={`/products/${key}`}
                  onClick={handleClose}
                  className={({ isActive }) =>
                    isActive ? `${styles.active}` : ""
                  }
                >
                  <img
                    src={categoryIcons[key]}
                    alt={key}
                    className={styles.icon}
                  />
                  {formatName(key)}
                </NavLink>
              </li>
            ))}
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default SidebarComponent;
