import React, { useState, useRef, useEffect } from "react";
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
import DragAndDrop from "./DragAndDrop";
import LocationModel from "./LocationModel";
import { NavLink, useNavigate } from "react-router-dom";

const NavbarComponent = () => {


      const [scrolled, setScrolled] = useState(false);
  
      useEffect(() => {
          const handleScroll = () => {
              if (window.scrollY > 50) {
                  setScrolled(true);
              } else {
                  setScrolled(false);
              }
          };
  
          window.addEventListener('scroll', handleScroll);
  
          return () => {
              window.removeEventListener('scroll', handleScroll);
          };
      }, []);

  const [showLocationModel, setShowLocationModel] = useState(false);
  const locationRef = useRef(null);
  const [showPopover, setShowPopover] = useState(false);
  const targetRef = useRef(null);

  const [userLocation, setUserLocation] = useState("");
  const [location, setLocation] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(null);
  const closeModal = () => setModalType(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showDragAndDrop, setShowDragAndDrop] = useState(false);
  const [clearPreview, setClearPreview] = useState(false);
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
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const [listening, setListening] = useState(false);

  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech Recognition not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";
    recognition.start();
    setListening(true);
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setSearchTerm(transcript);
      setListening(false);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
      setListening(false);
    };
    recognition.onend = () => {
      setListening(false);
    };
  };

  return (
    <div className="hero-section">
      <Navbar variant="dark" expand="lg" className="navbar bg-transparent p-0">
        <Container fluid>
          <Navbar.Brand href="#">
            <img src={Logo} alt="Logo" width={60} className="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className=" w-200 flex-row ">
            <Nav className="gap-4 " navbarScroll>
              <div
                onClick={() => setShowPopover(!showPopover)}
                // onMouseEnter={() => setShowPopover(true)}
                // onMouseLeave={() => setShowPopover(false)}
                style={{ position: "relative", display: "inline-block" }}
              >
                <Nav.Link
                  href="#"
                  ref={targetRef}
                  className="text-white"
                  style={{ pointerEvents: "auto" }}
                >
                  {userLocation
                    ? `${userLocation.slice(0, 20)}...`
                    : "Location"}
                </Nav.Link>

                <LocationModel
                  show={showPopover}
                  onClose={() => setShowPopover(false)}
                  target={targetRef.current}
                  container={targetRef.current?.closest(".navbar")}
                  onLocationSet={(location) => {
                    setUserLocation(location);
                    setShowPopover(false);
                  }}
                />
              </div>

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
                  onClick={startListening}
                  className={listening ? "mic-animating" : ""}
                  style={{
                    position: "absolute",
                    right: "50px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "white",
                    zIndex: 2,
                    cursor: "pointer",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    right: "40px",
                    top: "42%",
                    transform: "translateY(-50%)",
                    color: "white",
                    zIndex: 2,
                  }}
                >
                  |
                </div>
                <MdOutlineCameraAlt
                  onClick={() => setShowDragAndDrop(true)}
                  style={{
                    position: "absolute",
                    right: "15px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "white",
                    zIndex: 2,
                    cursor: "pointer",
                  }}
                />
              </div>
              {searchTerm && (
                <ul
                  style={{
                    position: "absolute",
                    top: "45px",
                    width: "50%",
                    background: "#fff",
                    color: "#000",
                    listStyle: "none",
                    margin: 0,
                    padding: "5px 0",
                    borderRadius: "10px",
                    zIndex: 999,
                    maxHeight: "250px",
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

            <div className="d-flex align-items-center gap-3">
              {/* <div className="d-flex align-items-center  justify-content-center me-5"> */}
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
              <NavLink to='/signin'>
              <Button
                variant="warning"
                className=" w-35"
                // onClick={()=>useNavigate('/signin')}
              >
                Sign In
              </Button>
              </NavLink>
              {/* <SignInModel
                show={modalType === "signin"}
                onClose={closeModal}
              />
              <OtpModel
                show={modalType === "otp"}
                onClose={closeModal}
              />
              <Register
                show={modalType === "register"}
                onClose={closeModal}
              />
              <Success
                show={modalType === "success"}
                onClose={closeModal}
              /> */}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {showDragAndDrop && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 3000,
          }}
          onClick={() => setShowDragAndDrop(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: "#fff",
              padding: "10px",
              borderRadius: "10px",
              width: "60%",
              height: "40%",
              overflow: "auto",
            }}
          >
            <DragAndDrop clearPreview={clearPreview} />
            <button
              onClick={() => setShowDragAndDrop(false)}
              style={{
                marginTop: "10px",
                background: "darkred",
                color: "white",
                border: "none",
                padding: "6px 12px",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarComponent;
