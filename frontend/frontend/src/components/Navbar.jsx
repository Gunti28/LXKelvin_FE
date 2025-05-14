import React, {useState} from "react";
import "../css/Navbar.css";
import {
  Navbar,
  Nav,
  Container,
  FormControl,
  Button,
  Dropdown,
} from "react-bootstrap";
import { FaSearch, FaCamera } from "react-icons/fa";
import Logo from "../assets/Logo1.svg";

const NavbarComponent = () => {
  const [closeMenu, setCloseMenu] = useState(false);
  const toggleClose = () => setCloseMenu(prevState => !prevState);
  const closeNavbar = () => setCloseMenu(false);
  return (
    <div className="hero-section">
      <Navbar variant="dark" expand="lg" className="navbar bg-transparent">
        <Container fluid>
          <Navbar.Brand href="#">
            <img src={Logo} alt="Logo" width={60} />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll"   onClick={toggleClose} />
          <Navbar.Collapse id="navbarScroll" in={closeMenu} >
            <Nav className="me-3 my-2 my-lg-0" navbarScroll onClick={closeNavbar}>
              <Dropdown className="me-3">
                <Dropdown.Toggle
                  variant="none"
                  id="dropdown-location"
                  className="toggle text-white"
                >
                  Location
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>New York</Dropdown.Item>
                  <Dropdown.Item>London</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Nav.Link href="#"  >Best Seller</Nav.Link>
              <Nav.Link href="#">Today Deals</Nav.Link>
            </Nav>

            <div className="d-flex flex-grow-1 justify-content-center position-relative">
              <div style={{ width: "500px", position: "relative" }}>
                <FaSearch
                  style={{
                    position: "absolute",
                    left: "15px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#aaa",
                    zIndex: 2,
                  }}
                />
                <FormControl
                  type="search"
                  placeholder="Search for products..."
                  aria-label="Search"
                  style={{
                    borderRadius: "50px",
                    paddingLeft: "40px",
                    paddingRight: "40px",
                  }}
                />
                <FaCamera
                  style={{
                    position: "absolute",
                    right: "15px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#aaa",
                    zIndex: 2,
                  }}
                />
              </div>
            </div>

            <div className="d-flex align-items-center gap-3">
              <Dropdown>
                <Dropdown.Toggle variant="light" id="dropdown-language">
                  <img
                    src="https://flagcdn.com/16x12/it.png"
                    alt="Italian"
                    className="me-1"
                  />
                  Italian
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>English</Dropdown.Item>
                  <Dropdown.Item>French</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Button variant="warning">Sign In</Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
