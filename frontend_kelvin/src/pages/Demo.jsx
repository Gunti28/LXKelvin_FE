import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar as BootstrapNavbar, NavDropdown, Form, Button, Image } from 'react-bootstrap';
import { Search, Mic, Camera } from 'lucide-react';
import Logo from '../assets/navlogo.svg';
import '../css/Frontpage.css';
import LanguageSelector from '../components/LanguageSelector';

const Navbarpage = () => {
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

    return (
        <BootstrapNavbar
            expand="lg"
            variant="dark"
            fixed="top"
            className={scrolled ? 'navbar scrolled' : 'navbar'}
        >
            <Container fluid className="px-4">
                <BootstrapNavbar.Brand href="#">
                            <img src={Logo} alt="Logo" width={60} />
                </BootstrapNavbar.Brand>

                <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />

                <BootstrapNavbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Location " id="location-dropdown">
                            <NavDropdown.Item href="#action/3.1">New York</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Los Angeles</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Chicago</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Milan</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.5">Rome</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#best-seller" className="mx-2">Best Seller</Nav.Link>
                        <Nav.Link href="#today-deals" className="mx-2">Today Deals</Nav.Link>
                    </Nav>

                    <Form className="d-flex search-bar mx-lg-4">
                        <Form.Control
                            type="search"
                            placeholder="Search for products..."
                            className="me-2"
                            aria-label="Search"
                        />
                        <div className="search-icons">
                            <Mic size={18} />
                            <Camera size={18} />
                        </div>
                    </Form>
                    <LanguageSelector />

                    <Nav>
                        <NavDropdown
                            title={
                                <span>
                                    <Image
                                        src="https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg"
                                        width="20"
                                        className="me-1"
                                        alt="Italian flag"
                                    />
                                    Italian
                                </span>
                            }
                            id="language-dropdown"
                        >
                            <NavDropdown.Item href="#italian">
                                <Image
                                    src="https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg"
                                    width="20"
                                    className="me-1"
                                    alt="Italian flag"
                                />
                                Italian
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#english">
                                <Image
                                    src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg"
                                    width="20"
                                    className="me-1"
                                    alt="UK flag"
                                />
                                English
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#french">
                                <Image
                                    src="https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg"
                                    width="20"
                                    className="me-1"
                                    alt="French flag"
                                />
                                French
                            </NavDropdown.Item>
                        </NavDropdown>

                        <Button className="sign-in-btn ms-3">Sign In</Button>
                    </Nav>
                </BootstrapNavbar.Collapse>
            </Container>
        </BootstrapNavbar>
    );
};

export default Navbarpage;