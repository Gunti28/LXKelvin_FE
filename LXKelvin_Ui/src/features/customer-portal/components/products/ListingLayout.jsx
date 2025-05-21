import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Offcanvas, Button } from 'react-bootstrap';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import styles from "../../../../lib/common/css/products/ListingLayout.module.css";
const ListingLayout = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (

    <div className={styles.layoutContainer}>
      <Button className={`d-md-none mb-3 ${styles.hamburgerBtn}`} onClick={handleShow} variant="outline-primary">
        <GiHamburgerMenu size={24} />
      </Button>
      <aside className={`${styles.sidebar} d-none d-md-block`}>
        <nav>
          <ul style={{listStyle:"none"}}>
            <li><NavLink to="/products/all-categories">All Categories</NavLink></li>
            <li><NavLink to="/products/vegetables">Vegetables</NavLink></li>
            <li><NavLink to="/products/fruits">Fruits</NavLink></li>
            <li><NavLink to="/products/seasonalvegetables">Seasonal Vegetables</NavLink></li>
            <li><NavLink to="/products/seasonalfruits">Seasonal Fruits</NavLink></li>
            <li><NavLink to="/products/milk-products">Milk Products</NavLink></li>
          </ul>
        </nav>
      </aside>

      <Offcanvas show={show} onHide={handleClose} className="d-md-none">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Categories</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className={styles.sidebar}>
            <li><NavLink to="/products/all-categories" onClick={handleClose}>All Categories</NavLink></li>
            <li><NavLink to="/products/vegetables" onClick={handleClose}>Vegetables</NavLink></li>
            <li><NavLink to="/products/fruits" onClick={handleClose}>Fruits</NavLink></li>
            <li><NavLink to="/products/seasonalvegetables" onClick={handleClose}>Seasonal Vegetables</NavLink></li>
            <li><NavLink to="/products/seasonalfruits" onClick={handleClose}>Seasonal Fruits</NavLink></li>
            <li><NavLink to="/products/milk-products" onClick={handleClose}>Milk Products</NavLink></li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
      <main className={styles.mainContent}>
        <Outlet />
      </main>
    </div>
  );
};

export default ListingLayout;