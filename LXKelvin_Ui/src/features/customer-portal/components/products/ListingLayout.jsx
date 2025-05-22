import React, { useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Offcanvas, Button, Breadcrumb } from 'react-bootstrap';
import { GiHamburgerMenu } from 'react-icons/gi';
import styles from "../../../../lib/common/css/products/ListingLayout.module.css";
import allproducts from "../../../../lib/common/assets/Images/vegetables.svg";
import vegetables1 from "../../../../lib/common/assets/Images/vegetables1.svg";
import fruits from "../../../../lib/common/assets/Images/fruits.svg";
import seasonalvegetables from "../../../../lib/common/assets/Images/seasonal-vegetables.svg";
import seasonalfruits from "../../../../lib/common/assets/Images/seasonal-fruits.svg";
import milkproducts from "../../../../lib/common/assets/Images/milk-products.svg";

const ListingLayout = () => {
  const [show, setShow] = useState(false);
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const categoryIcons = {
    'all-categories': allproducts,
    'vegetables': vegetables1,
    'fruits': fruits,
    'seasonalvegetables': seasonalvegetables,
    'seasonalfruits': seasonalfruits,
    'milk-products': milkproducts,
  };

  const formatName = (key) => {
    const map = {
      'all-categories': 'All Categories',
      'vegetables': 'Vegetables',
      'fruits': 'Fruits',
      'seasonalvegetables': 'Seasonal Vegetables',
      'seasonalfruits': 'Seasonal Fruits',
      'milk-products': 'Milk Products',
    };
    return map[key] || key;
  };

  return (
    <div className={styles.layoutContainer}>
      {/* Hamburger menu for mobile */}
      <Button className={`d-md-none mb-3 ${styles.hamburgerBtn}`} onClick={handleShow}>
        <GiHamburgerMenu size={24} />
      </Button>

      {/* Sidebar for desktop */}
      <aside className={`${styles.sidebar} d-none d-md-block`}>
        <nav>
          <ul>
            {Object.keys(categoryIcons).map((key, index) => (
              <li key={index}>
                <NavLink to={`/products/${key}`} className={({ isActive }) => isActive ? `${styles.active}` : ''}>
                  <img src={categoryIcons[key]} alt={key} className={styles.icon} />
                  {formatName(key)}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Offcanvas for mobile */}
      <Offcanvas show={show} onHide={handleClose} className="d-md-none">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Categories</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className={styles.sidebar}>
            {Object.keys(categoryIcons).map((key, index) => (
              <li key={index}>
                <NavLink to={`/products/${key}`} onClick={handleClose} className={({ isActive }) => isActive ? `${styles.active}` : ''}>
                  <img src={categoryIcons[key]} alt={key} className={styles.icon} />
                  {formatName(key)}
                </NavLink>
              </li>
            ))}
          </ul>
        </Offcanvas.Body>
      </Offcanvas>

      {/* Main content */}
      <main className={styles.mainContent}>
        <Breadcrumb className="mb-4">
          <Breadcrumb.Item className="text-black" active>Home</Breadcrumb.Item>
          {pathnames.map((name, index) => (
            <Breadcrumb.Item key={index} active className="text-black">
              {name.replace(/-/g, ' ')}
            </Breadcrumb.Item>
          ))}
        </Breadcrumb>

        <Outlet />
      </main>
    </div>
  );
};

export default ListingLayout;