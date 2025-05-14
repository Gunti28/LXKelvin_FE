import React, { useState } from "react";
import "../css/Navbar.css";
import {
  Navbar,
  Nav,
  Container,
  FormControl,
  Button,
  InputGroup,
  Dropdown,
} from "react-bootstrap";
import { FaSearch, FaCamera, FaMicrophone } from "react-icons/fa";
import { IoMic } from "react-icons/io5";
import Logo from "../assets/Logo1.svg";
import Italian from "../assets/ItalianImg.svg";
import French from "../assets/French.svg";
import Spanish from "../assets/Spanish.svg";
import Greece from "../assets/Greece.svg";
import { MdOutlineCameraAlt } from "react-icons/md";
import SignInModel from "./SignInModel";
import OtpModel from "./OtpModel";
import Register from "./Register";
import Success from "./Success";

const NavbarComponent = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(null);
  const closeModal = () => setModalType(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [products] = useState([
    "iPhone 14",
    "Samsung Galaxy S22",
    "AirPods Pro",
    "MacBook Air",
    "Sony Headphones",
    "Apple Watch",
    "Dell XPS 13",
    "Google Pixel 8",
    "JBL Speakers",
    "HP Pavilion",
  ]);

  return (
    <div className="hero-section">
      <Navbar variant="dark" expand="lg" className="navbar bg-transparent p-0">
        <Container fluid>
          <Navbar.Brand href="#">
            <img src={Logo} alt="Logo" width={80} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className=" w-200 flex-row ">
            <Nav className=" " navbarScroll>
              <Dropdown className="me-3">
                <Dropdown.Toggle
                  variant="none"
                  id="dropdown-location"
                  className="toggle text-white fs-5"
                >
                  Location
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>New York</Dropdown.Item>
                  <Dropdown.Item>London</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Nav.Link href="#" className=" text-white">
                Best Seller
              </Nav.Link>
              <Nav.Link href="#" className=" text-white">
                Today Deals
              </Nav.Link>
            </Nav>

            <div className="searchbar  d-flex flex-grow-1 justify-content-center position-relative w-300 my-2 ">
              {/* <div className="d-flex justify-content-center w-100 my-2"> */}

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
                  className="white-placeholder "
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{
                    borderRadius: "50px",
                    paddingLeft: "40px",
                    paddingRight: "40px",
                    backgroundColor: "transparent",
                    color: "white",
                  }}
                />

                <IoMic
                  style={{
                    position: "absolute",
                    right: "50px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "white",
                    zIndex: 2,
                  }}
                />
                <div  style={{
                    position: "absolute",
                    right: "40px",
                    top: "42%",
                    transform: "translateY(-50%)",
                    color: "white",
                    zIndex: 2,
                  }}>|</div>
                <MdOutlineCameraAlt
                  style={{
                    position: "absolute",
                    right: "15px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "white",
                    zIndex: 2,
                  }}
                />
              </div>
              {searchTerm && (
                <ul
                  // style={{
                  //   position: "absolute",
                  //   top: "45px",
                  //   width: "50%",
                  //   background: "white",
                  //   color: "black",
                  //   listStyle: "none",
                  //   margin: 0,
                  //   padding: "5px 0",
                  //   borderRadius: "10px",
                  //   zIndex: 999,
                  //   maxHeight: "150px",
                  //   overflowY: "auto",
                  // }}
                  style={{
                    position: "absolute",
                    top: "45px",
                    width: "50%",
                    background: "#1c1c1c",
                    color: "white",
                    listStyle: "none",
                    margin: 0,
                    padding: "5px 0",
                    borderRadius: "10px",
                    zIndex: 999,
                    maxHeight: "150px",
                    overflowY: "auto",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  {products
                    .filter((product) =>
                      product.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .map((product, index) => (
                      <li
                        key={index}
                        style={{
                          padding: "3px 1px",
                          cursor: "pointer",
                          transition: "background 0.2s",
                        }}
                        onClick={() => {
                          setSearchTerm(product);
                        }}
                      >
                        {product}
                      </li>
                    ))}
                  {products.filter((product) =>
                    product.toLowerCase().includes(searchTerm.toLowerCase())
                  ).length === 0 && (
                    <li style={{ color: "gray" }}>No products found</li>
                  )}
                </ul>
              )}
            </div>

            {/* <div className="d-flex align-items-center gap-3"> */}
            <div className="d-flex align-items-center  justify-content-center me-5">
              <Dropdown>
                <Dropdown.Toggle
                  variant="light"
                  id="dropdown-language"
                  className="me-5 lang"
                >
                  <img src={Italian} alt="Italian" width={20} />
                  Italian
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <img src={Greece} alt="Italian" width={20} />
                    Greece
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <img src={Spanish} alt="Italian" width={20} />
                    Spanish
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <img src={French} alt="Italian" width={20} />
                    French
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Button
                variant="warning"
                className=" w-35"
                onClick={() => setModalType("signin")}
              >
                Sign In
              </Button>
              <SignInModel
                show={modalType === "signin"}
                onClose={closeModal}
                onCreateAccount={() => setModalType("otp")}
              />
              <OtpModel
                show={modalType === "otp"}
                onClose={closeModal}
                onCreateAccount={() => setModalType("register")}
              />
              <Register
                show={modalType === "register"}
                onClose={closeModal}
                onCreateAccount={() => setModalType("success")} // or navigate somewhere else after registration
              />
              <Success
                show={modalType === "success"}
                onClose={closeModal}
                onCreateAccount={() => setModalType(null)} // or navigate somewhere else after registration
              />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
