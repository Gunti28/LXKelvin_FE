import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Offcanvas, Button, Breadcrumb } from 'react-bootstrap';
import { GiHamburgerMenu } from 'react-icons/gi';
import styles from "../../../../lib/common/css/products/ListingLayout.module.css";
import { Link, NavLink, useLocation } from 'react-router-dom';
import allproducts from "../../../../lib/common/assets/Images/all-categories-sidebar.svg"
import vegetables from "../../../../lib/common/assets/Images/vegetables-sidebar.svg"
import fruits from "../../../../lib/common/assets/Images/fruits-sidebar.svg"
import seasonalvegetables from "../../../../lib/common/assets/Images/seasonal-vegetables-sidebar.svg"
import seasonalfruits from "../../../../lib/common/assets/Images/seasonal-fruits-sidebar.svg"
import milkproducts from "../../../../lib/common/assets/Images/milk-products-sidebar.svg"

const SidebarComponent = () => {
    const [show, setShow] = useState(false);
    
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
        const categoryIcons = {
    'all-categories': allproducts,
    'vegetables': vegetables,
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
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  return (
    <div>
        <Button className={`d-md-none mb-3 ${styles.hamburgerBtn}`} onClick={handleShow} variant="outline-primary">
        <GiHamburgerMenu size={24} />
      </Button>
      <aside className={`${styles.sidebar} d-none d-md-block`}>
          {/* <Breadcrumb className={`mb-4 ${styles.BreadCrumbCon}`}>
          <Breadcrumb.Item className="text-black" active>Home</Breadcrumb.Item>
          {pathnames.map((name, index) => (
            <Breadcrumb.Item key={index} active className="text-black">
              {name.replace(/-/g, ' ')}
            </Breadcrumb.Item>
          ))}
        </Breadcrumb> */}
        <Breadcrumb className="mb-4">
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }} className={`text-black ${styles.upperHome}`}>
            Home
          </Breadcrumb.Item>

          {pathnames.map((name, index) => {
            const isLast = index === pathnames.length - 1;

            return isLast ? (
              <Breadcrumb.Item key={index} active className={`text-black ${styles.upperHome}`}>
                {name.replace(/-/g, ' ')}
              </Breadcrumb.Item>
            ) : (
              <Breadcrumb.Item
                key={index}
                linkAs={Link}
                linkProps={{ to: '/products/all-categories' }}
                className={`text-black ${styles.upperHome}`}
              >
                {name.replace(/-/g, ' ')}
              </Breadcrumb.Item>
            );
          })}
        </Breadcrumb>
        <nav>
                      {Object.keys(categoryIcons).map((key, index) => (
              <li key={index}>
                <NavLink to={`/products/${key}`} className={({ isActive }) => isActive ? `${styles.active}` : ''}>
                  <img src={categoryIcons[key]} alt={key} className={styles.icon} />
                  {formatName(key)}
                </NavLink>
              </li>
            ))}
        </nav>
      </aside>

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

    </div>
  )
}

export default SidebarComponent