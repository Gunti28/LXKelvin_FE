import NavbarCss from "../../../../lib/common/css/registration/Navbar.module.css";
import React, { useState, useEffect } from "react";
import {
  Navbar,
  Nav,
  Container,
  FormControl,
  Button,
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
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import productsData from "../../../../lib/common/mocks/products.json";
import { Icon } from "@iconify/react";

const NavbarComponent = ({ isLoggedIn }) => {
  const [, setScrolled] = useState(false);
  const [showSigninBtn,setShowSigninBtn] = useState(true);
  const [showProfile,setShowProfile] = useState(false);
  const [showLanguage,setShowLanguage] = useState(true);
  const [showDeals,setShowDeals] = useState(true);

  const location = useLocation();
  const path = location.pathname;

  const productNames = productsData.products.map(product => product.name);
  const navigate = useNavigate();

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

  const [searchTerm, setSearchTerm] = useState("");
  const handleSignInBtn = () => {
    navigate('/signin')
  }
  useEffect(() => {
    if(path !== "/"){
      setShowProfile(true);
      setShowSigninBtn(false);
      setShowDeals(false);
      setShowLanguage(false);
    }else if (isLoggedIn){
      setShowProfile(true);
      setShowSigninBtn(false);
      setShowDeals(true);
      setShowLanguage(true);

    }
    else {return}
}, [path, isLoggedIn]);

  




  return (
    <div className={NavbarCss.heroSection}
    style={{
      backgroundColor: path !== "/" ?"#fff":null
    }}>
      <Navbar
        variant="dark"
        expand="lg"
        className={`${NavbarCss.navbar} p-0  `}
        style={{ backgroundColor:path !== "/"?"#fff":"transparent" }}
      >
        <Container fluid>
          <Navbar.Brand href="#">
            <img src={Logo} alt="Logo" width={60} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className=" w-200 flex-row ">
            <Nav className="gap-4 ">
              <div
              >
                <Nav.Link
                  href="#"
                  className= {path!=="/"?"text-secondary":"text-white"}
                  //  styles={{color:path !== "dashboard"?"#5B5F62":"#fff"}}
                >
                    Location
                </Nav.Link>
              </div>

              {showDeals&&(
                <>
              <Nav.Link href="#" className="text-white">
                Best Seller
              </Nav.Link>
              <Nav.Link href="#" className="text-white">
                Today Deals
              </Nav.Link>
              </>
              )}
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
                    color: path !== "/"?"#5B5F62":"#fff",
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
                    borderColor: path !== "/"?"#5B5F62":"#fff",
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
                    color:  path !== "/"?"#5B5F62":"#fff",
                    zIndex: 2,
                    cursor: "pointer",
                  }}
                />
                <div
                  className={NavbarCss.line}
                   style={{color:path !== "/"?"#5B5F62":"#fff"}}
                >
                  |
                </div>
                <MdOutlineCameraAlt
                  
                  style={{
                    position: "absolute",
                    right: "15px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color:  path !== "/"?"#5B5F62":"#fff",
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

              {showLanguage && (
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
              )}
              {showSigninBtn && (
              
                <Button
                  variant="warning"
                  className=" w-35"
                  onClick={handleSignInBtn}
                  
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
                      style={{ color:path !== "/"?"#5B5F62":"#fff" }}
                    />
                    <p style={{ color:path !== "/"?"#5B5F62":"#fff" }}>User</p>
                  </div>
                  <div className={NavbarCss.CartSection}>
                    <Icon
                      icon="solar:bag-linear"
                      width="24"
                      height="24"
                      style={{ color:path !== "/"?"#5B5F62":"#fff" }}
                    />
                    <p style={{ color:path !== "/"?"#5B5F62":"#fff" }}>Cart</p>
                  </div>
                </div>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
};

export default NavbarComponent;
