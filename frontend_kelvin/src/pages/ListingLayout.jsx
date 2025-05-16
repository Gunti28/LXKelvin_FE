import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Offcanvas, Button } from 'react-bootstrap';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import "../css/ListingLayout.css";
const ListingLayout = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="layout-container">
      <Button className="d-md-none mb-3 hamburger-btn" onClick={handleShow} variant="outline-primary">
        <GiHamburgerMenu size={24} />
      </Button>
      <aside className="sidebar d-none d-md-block">
        <nav>
          <ul style={{listStyle:"none"}}>
            <li><NavLink to="/all-categories">All Categories</NavLink></li>
            <li><NavLink to="/vegetables">Vegetables</NavLink></li>
            <li><NavLink to="/fruits">Fruits</NavLink></li>
            <li><NavLink to="/seasonalvegetables">Seasonal Vegetables</NavLink></li>
            <li><NavLink to="/seasonalfruits">Seasonal Fruits</NavLink></li>
            <li><NavLink to="/milkproducts">Milk Products</NavLink></li>
          </ul>
        </nav>
      </aside>

      <Offcanvas show={show} onHide={handleClose} className="d-md-none">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Categories</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="sidebar">
            <li><NavLink to="/all-categories" onClick={handleClose}>All Categories</NavLink></li>
            <li><NavLink to="/vegetables" onClick={handleClose}>Vegetables</NavLink></li>
            <li><NavLink to="/fruits" onClick={handleClose}>Fruits</NavLink></li>
            <li><NavLink to="/seasonalvegetables" onClick={handleClose}>Seasonal Vegetables</NavLink></li>
            <li><NavLink to="/seasonalfruits" onClick={handleClose}>Seasonal Fruits</NavLink></li>
            <li><NavLink to="/milkproducts" onClick={handleClose}>Milk Products</NavLink></li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default ListingLayout;