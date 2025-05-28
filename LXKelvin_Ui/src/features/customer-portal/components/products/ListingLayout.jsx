import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Offcanvas, Button } from 'react-bootstrap';
import { GiHamburgerMenu } from 'react-icons/gi';
import styles from '../../../../lib/common/css/products/ListingLayout.module.css';

const ListingLayout = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="flex min-h-screen font-sans">
      <div className="md:hidden"> {/* Wrap Button in a div with md:hidden */} 
        <Button 
          className="absolute top-[10px] left-[10px] z-[1000] bg-transparent border-none p-[5px] flex items-center justify-center mb-3" 
          onClick={handleShow} 
          variant="outline-primary"
        >
          <GiHamburgerMenu size={24} />
        </Button>
      </div>

      <aside className="hidden md:block w-[240px] bg-white border-r border-[#ddd] p-5">
        <nav>
          <ul className="list-none p-0">
            <li className="mb-4">
              <NavLink 
                to="/products/all-categories"
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive ? styles.activeLink : ''}`
                }
              >
                All Categories
              </NavLink>
            </li>
            <li className="mb-4">
              <NavLink 
                to="/products/vegetables"
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive ? styles.activeLink : ''}`
                }
              >
                Vegetables
              </NavLink>
            </li>
            <li className="mb-4">
              <NavLink 
                to="/products/fruits"
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive ? styles.activeLink : ''}`
                }
              >
                Fruits
              </NavLink>
            </li>
            <li className="mb-4">
              <NavLink 
                to="/products/seasonalvegetables"
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive ? styles.activeLink : ''}`
                }
              >
                Seasonal Vegetables
              </NavLink>
            </li>
            <li className="mb-4">
              <NavLink 
                to="/products/seasonalfruits"
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive ? styles.activeLink : ''}`
                }
              >
                Seasonal Fruits
              </NavLink>
            </li>
            <li className="mb-4">
              <NavLink 
                to="/products/milk-products"
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive ? styles.activeLink : ''}`
                }
              >
                Milk Products
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>

      <Offcanvas show={show} onHide={handleClose} className="d-md-none">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Categories</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="list-none p-0">
            <li className="mb-4">
              <NavLink 
                to="/products/all-categories" 
                onClick={handleClose}
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive ? styles.activeLink : ''}`
                }
              >
                All Categories
              </NavLink>
            </li>
            <li className="mb-4">
              <NavLink 
                to="/products/vegetables" 
                onClick={handleClose}
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive ? styles.activeLink : ''}`
                }
              >
                Vegetables
              </NavLink>
            </li>
            <li className="mb-4">
              <NavLink 
                to="/products/fruits" 
                onClick={handleClose}
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive ? styles.activeLink : ''}`
                }
              >
                Fruits
              </NavLink>
            </li>
            <li className="mb-4">
              <NavLink 
                to="/products/seasonalvegetables" 
                onClick={handleClose}
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive ? styles.activeLink : ''}`
                }
              >
                Seasonal Vegetables
              </NavLink>
            </li>
            <li className="mb-4">
              <NavLink 
                to="/products/seasonalfruits" 
                onClick={handleClose}
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive ? styles.activeLink : ''}`
                }
              >
                Seasonal Fruits
              </NavLink>
            </li>
            <li className="mb-4">
              <NavLink 
                to="/products/milk-products" 
                onClick={handleClose}
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive ? styles.activeLink : ''}`
                }
              >
                Milk Products
              </NavLink>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>

      <main className="flex-1 p-[30px] h-screen overflow-y-auto bg-[#f9f9f9]">
        <Outlet />
      </main>
    </div>
  );
};

export default ListingLayout;