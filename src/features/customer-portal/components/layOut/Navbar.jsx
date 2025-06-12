import NavbarCss from "../../../../lib/common/css/registration/Navbar.module.css";
import HeroStyles from "../../../../lib/common/css/registration/OpeningScreen.module.css";
import { useState, useEffect, useRef } from "react";
import {
  Navbar,
  Nav,
  Container,
  FormControl,
  Button,
  Dropdown,
} from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { IoMic } from "react-icons/io5";
import { MdOutlineCameraAlt } from "react-icons/md";
import { Outlet, useLocation, useNavigate, Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import { showNavBarDefaultTemplate } from "../../../../lib/helpers/index";
import { IMAGES } from "../../../../lib/constants/Image_Constants/index";
import { Const } from "../../../../lib/constants/index";
import { setSelectedLang } from "../../../../store/slice/languageSlice";
import LocationTracker from "./Location";
import LocationModel from "./Location";

const NavbarComponent = () => {
  let contentNavWrapper;
  let contentWrapper;
  const [setScrolled] = useState(false);
  const [showSigninBtn, setShowSigninBtn] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);
  const [showDeals, setShowDeals] = useState(false);
  const location = useLocation();
  const path = location.pathname;
  const [text_color, setTextColor] = useState(true);
  const [, setUserData] = useState({});
  const { isUserValid, userAuth } = useSelector((state) => state.userAuth);
  const navigate = useNavigate();
  const [showPopover, setShowPopover] = useState(false);
  const [userLocation, setUserLocation] = useState(" ");
  const targetRef = useRef(null);
  const languages = Const?.LANGUAGES;

  const dispatch = useDispatch();

  const selectedLang = useSelector((state) => state.language.selectedLang);
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
    navigate("/signIn");
  };

  const handleAccountClick = () => {
    navigate("/my_account");
  };
  const handleLogoClick = () => {
    navigate("/dashBoard");
  };

  const cartItemCount = useSelector((state) =>
    (state.cart?.items ?? []).reduce((total, item) => total + item.quantity, 0)
  );
  useEffect(() => {
    if (isUserValid) {
      setShowProfile(true);
      setShowSigninBtn(false);
      setShowDeals(true);
      setShowLanguage(true);
      navigate("/dashBoard");
    } else {
      setShowProfile(false);
      setShowSigninBtn(true);
      setShowDeals(true);
      setShowLanguage(true);
    }

    setUserData(userAuth?.length ? userAuth[0] : {});
  }, [isUserValid, userAuth]);

  useEffect(() => {
    const isHighlightPath =
      path.startsWith("/productDetails") ||
      path.startsWith("/products") ||
      path.startsWith("/my_account") ||
      path.startsWith("/subscriptions") ||
      path.startsWith("/choosePayment") ||
      path.startsWith("/cart") ||
      path.startsWith("/deliveryaddress") ||
      path.startsWith("/orderSummary") ||
      path.startsWith("/upiPayment") ||
      path.startsWith("/ordersummary") ||
      path.startsWith("/upiPayment") ||
      path.startsWith("/confirmUpi") ||
      path.startsWith("/cardPayment") ||
      path.startsWith("/orderCardPayment") ||
      path.startsWith("/orderUpiPayment") ||
      path.startsWith("/vipSuccess");
    setTextColor(isHighlightPath);
  });
  useEffect(() => {
    if (text_color) {
      setShowDeals(false);
      setShowLanguage(false);
    } else {
      setShowDeals(true);
      setShowLanguage(true);
    }
  }, [text_color]);

  /**
   * need split content for wrapping success and failed cases
   */
  contentWrapper = (
    <div
      className={HeroStyles.heroContentContainer}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        background: "rgba(0, 0, 0, 0.4)" /* semi-transparent overlay */,
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-end",
        paddingRight: "200px",
        boxSizing: "border - box",
      }}
    >
      <div className={` ${HeroStyles.heroText} text-center`}>
        <img
          style={{ margin: "auto", cursor: "pointer" }}
          src={IMAGES.logo}
          width={150}
          alt="Logo"
        />
        <div className={HeroStyles.organicText}>ORGANIC</div>
        <div className={HeroStyles.vegetableText}>VEGETABLE & FRUITS</div>
        <div className={HeroStyles.subtitleText}>
          "Experience the Taste of Real Organic"
        </div>
      </div>
    </div>
  );
  contentNavWrapper = (
    <div
      className={NavbarCss.heroSection}
      style={{
        backgroundColor: showNavBarDefaultTemplate(path),
      }}
    >
      <Navbar
        variant="dark"
        expand="lg"
        className={`${NavbarCss.navbar} p-0  `}
        style={{
          backgroundColor: showNavBarDefaultTemplate(path),
        }}
      >
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              src={IMAGES?.logo}
              alt="LOGO"
              className={NavbarCss.LogoImg}
              onClick={() => handleLogoClick()}
            />
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="navbarScroll"
            style={{
              backgroundColor: text_color ? "#5B5F62" : "transparent",
            }}
          />
          <Navbar.Collapse id="navbarScroll" className=" w-200 flex-row ">
            <Nav className="gap-4 ">
              <div className={NavbarCss.DealsCon}>
                <div
                  onClick={() => setShowPopover(!showPopover)}
                  style={{ position: "relative", display: "inline-block" }}
                >
                  <Nav.Link
                    href="#"
                    ref={targetRef}
                    className="d-flex flex-column"
                    style={{
                      color: text_color ? "#5B5F62" : "#fff",
                    }}
                  >
                    {userLocation !== " " ? (
                      text_color ? (
                        <div>Location</div>
                      ) : null
                    ) : null}
                    <div className="d-flex flex-row">
                      {userLocation !== " "
                        ? `${userLocation.slice(0, 30)}...`
                        : "Location"}
                      <Icon
                        icon="mdi:arrow-down-drop"
                        width="28"
                        height="28"
                        style={{ color: text_color ? "#5B5F62" : "#fff" }}
                      />
                    </div>
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

                {showDeals && (
                  <>
                    <Nav.Link
                      href="#"
                      className={text_color ? "text-secondary" : "text-white"}
                    >
                      Best Seller
                    </Nav.Link>
                    <Nav.Link
                      href="#"
                      className={text_color ? "text-secondary" : "text-white"}
                    >
                      Today Deals
                    </Nav.Link>
                  </>
                )}
              </div>
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
                    color: text_color ? "#5B5F62" : "#fff",
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
                    borderColor: text_color ? "#5B5F62" : "#fff",
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
                    color: text_color ? "#5B5F62" : "#fff",
                    zIndex: 2,
                    cursor: "pointer",
                  }}
                />
                <div
                  className={NavbarCss.line}
                  style={{
                    color: text_color ? "#5B5F62" : "#fff",
                  }}
                >
                  |
                </div>
                <MdOutlineCameraAlt
                  style={{
                    position: "absolute",
                    right: "15px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: text_color ? "#5B5F62" : "#fff",
                    zIndex: 2,
                    cursor: "pointer",
                  }}
                />
              </div>
            </div>

            <div
              className={`d-flex align-items-center gap-3 ${NavbarCss.langAndSignin}`}
            >
              {showLanguage && (
                <Dropdown>
                  <Dropdown.Toggle
                    variant="light"
                    id="dropdown-language"
                    className={NavbarCss.languageToggle}
                  >
                    <div className={NavbarCss.langDisplay}>
                      <img src={selectedLang.icon} alt={selectedLang.name} />
                      <span>{selectedLang.name}</span>
                    </div>
                  </Dropdown.Toggle>

                  <Dropdown.Menu className={NavbarCss.dropDownMenu}>
                    {languages.map((lang) => (
                      <Dropdown.Item
                        key={lang.name}
                        onClick={() => dispatch(setSelectedLang(lang))}
                        className={NavbarCss.languageItem}
                      >
                        <img
                          src={lang.icon}
                          alt={lang.name}
                          className={NavbarCss.dropDownImg}
                        />
                        <span>{lang.name}</span>
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              )}
              {showSigninBtn && (
                <Button
                  variant="warning"
                  className={NavbarCss.SigninBtn}
                  onClick={handleSignInBtn}
                >
                  Sign In
                </Button>
              )}
              {showProfile && (
                <div className={NavbarCss.ProfileCon}>
                  <div
                    className={NavbarCss.ProfileSection}
                    onClick={handleAccountClick}
                    style={{ cursor: "pointer" }}
                  >
                    <Icon
                      icon="ix:user-profile"
                      width="24"
                      height="24"
                      style={{
                        color: text_color ? "#5B5F62" : "#fff",
                      }}
                    />
                    <div className={NavbarCss.profileNameContainer}>
                      <p
                        style={{
                          color: text_color ? "#5B5F62" : "#fff",
                        }}
                      >
                        {/* {userData?.userName} */}
                        Logout
                      </p>
                    </div>
                  </div>
                  <div className={NavbarCss.CartSection}>
                    <Link to="/cart" className={NavbarCss.cartLink}>
                      <Icon
                        icon="solar:bag-linear"
                        width="24"
                        height="24"
                        style={{
                          color: text_color ? "#5B5F62" : "#fff",
                        }}
                        className={
                          text_color
                            ? NavbarCss.cartIconLight
                            : NavbarCss.cartIconDark
                        }
                      />
                      <p
                        style={{
                          color: text_color ? "#5B5F62" : "#fff",
                        }}
                      >
                        Cart
                      </p>
                      {cartItemCount > 0 && (
                        <span className={NavbarCss.cartBadge}>
                          {cartItemCount}
                        </span>
                      )}
                    </Link>
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
  return (
    <>
      {contentNavWrapper}
      {!isUserValid ? contentWrapper : ""}
    </>
  );
};

export default NavbarComponent;
