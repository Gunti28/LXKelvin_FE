import NavbarCss from "../../../../lib/common/css/registration/Navbar.module.css";
import React, { useState, useEffect } from "react";
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
import Logo from "../../../../lib/common/assets/Images/Logo.svg";
import Italian from "../../../../lib/common/assets/Images/italian.svg";
import French from "../../../../lib/common/assets/Images/French.svg";
import Spanish from "../../../../lib/common/assets/Images/Spanish.svg";
import Greece from "../../../../lib/common/assets/Images/Greece.svg";
import { MdOutlineCameraAlt } from "react-icons/md";
import SignInModel from "./SignInModel";
import OtpModel from "./OtpModel";
import Register from "./Register";
import Success from "./Success";
import { Route, Routes, useNavigate } from "react-router-dom";
import Hero from "./OpeningScreen";
import HomePage from "./Dashboard";
import { Icon } from "@iconify/react";
import productsData from "../../../../lib/common/mocks/products.json";

const NavbarComponent = () => {
  const [, setScrolled] = useState(false);

  const navigate = useNavigate();
  const [showSignin, setShowSignin] = useState(true);
  const [showProfile, setShowProfile] = useState(false);

  const productNames = productsData.products.map(product => product.name);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const [showLocationModel, setShowLocationModel] = useState(false);
  // const locationRef = useRef(null);
  const [showPopover, setShowPopover] = useState(false);
  // const targetRef = useRef(null);

  const [userLocation] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  // const [showDragAndDrop, setShowDragAndDrop] = useState(false);
  const [showHero, setShowHero] = useState(true);
  const [showDashboard, setShowDashboard] = useState(false);
  // const [clearPreview, setClearPreview] = useState(false);

  const handleSignIn = () => {
    navigate("/signin");
    setShowHero(false);
    setShowDashboard(false);
  };
  const handleSigninSuccess = () => {
    setShowSignin(false);
    setShowProfile(true);
  };

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

  useEffect(() => {
    setTimeout(() => {
      setShowHero(false);
      setShowDashboard(true);
    }, 3000);
  }, []);

  return (
    <div className={NavbarCss.heroSection}>
      <Navbar
        variant="dark"
        expand="lg"
        className={`${NavbarCss.navbar} bg-transparent p-0  `}
      >
        <Container fluid>
          <Navbar.Brand href="#">
            <img src={Logo} alt="Logo" width={60} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className=" w-200 flex-row ">
            <Nav className="gap-4 ">
              <div
                onClick={() => setShowPopover(!showPopover)}
                // onMouseEnter={() => setShowPopover(true)}
                // onMouseLeave={() => setShowPopover(false)}
                // style={{ position: "relative", display: "inline-block" }}
              >
                <Nav.Link
                  href="#"
                  //   ref={targetRef}
                  className="text-white"
                >
                  {userLocation
                    ? `${userLocation.slice(0, 20)}...`
                    : "Location"}
                </Nav.Link>

                {/* <LocationModel
                  show={showPopover}
                  onClose={() => setShowPopover(false)}
                  target={targetRef.current}
                  container={targetRef.current?.closest(".navbar")}
                  onLocationSet={(location) => {
                    setUserLocation(location);
                    setShowPopover(false);
                  }}
                /> */}
              </div>

              <Nav.Link href="#" className="text-white">
                Best Seller
              </Nav.Link>
              <Nav.Link href="#" className="text-white">
                Today Deals
              </Nav.Link>
            </Nav>

            <div
              className={`${NavbarCss.searchBar}  d-flex flex-grow-1 justify-content-center position-relative w-300 my-2 `}
            >
              <div className={NavbarCss.searchContainer}>
                <FaSearch
                  style={{
                    position: "absolute",
                    left: "15px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "white",
                    zIndex: 2,
                  }}
                />
                <FormControl
                  type="search"
                  placeholder="Search for products..."
                  aria-label="Search"
                  value={searchTerm}
                  className={NavbarCss.placeholder}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{
                    borderRadius: "50px",
                    paddingLeft: "40px",
                    paddingRight: "40px",
                    borderWidth: 1.5,
                    borderColor: "white",
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
                  className={NavbarCss.line}
                >
                  |
                </div>
                <MdOutlineCameraAlt
                  // onClick={() => setShowDragAndDrop(true)}
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
                className={NavbarCss.searchProducts}
                >
                  {productNames
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
                  {productNames.filter((product) =>
                    product.toLowerCase().includes(searchTerm.toLowerCase())
                  ).length === 0 && (
                    <li style={{ color: "gray" }}>No products found</li>
                  )}
                </ul>
              )}
            </div>

            <div className="d-flex align-items-center gap-3">
              
              <Dropdown>
                <Dropdown.Toggle
                  variant="light"
                  id="dropdown-language"
                  className={`me-5 ${NavbarCss.lang}`}
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
              {showSignin && (
                <Button
                  variant="warning"
                  className=" w-35"
                  onClick={handleSignIn}
                >
                  Sign In
                </Button>
              )}
              {showProfile && (
                <div className={NavbarCss.ProfileCon}>
                  <div className={NavbarCss.ProfileSection}>
                    <Icon
                      icon="ix:user-profile"
                      width="24"
                      height="24"
                      style={{ color: "#fff" }}
                    />
                    <p>User</p>
                  </div>
                  <div className={NavbarCss.CartSection}>
                    <Icon
                      icon="solar:bag-linear"
                      width="24"
                      height="24"
                      style={{ color: "#fff" }}
                    />
                    <p>Cart</p>
                  </div>
                </div>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* {showDragAndDrop && (
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
                background: "#929292",
                color: "white",
                border: "none",
                padding: "6px 12px",
                borderRadius: "6px",
                cursor: "pointer",
                align :"right",
                float: "right",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )} */}
      {showHero && <Hero />}
      {showDashboard && <HomePage />}
      {/* Routes */}
      <Routes>
        <Route path="signin" element={<SignInModel />} />
        <Route
          path="enterotp"
          element={<OtpModel onOtpSuccess={handleSigninSuccess} />}
        />
        <Route path="registeruser" element={<Register />} />
        <Route path="success" element={<Success />} />
        <Route path="/dashboard" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default NavbarComponent;
<routerOutlet />
