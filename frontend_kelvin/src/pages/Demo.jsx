import React from 'react';
import { Container, Row, Col, Button, Form, InputGroup, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from "../assets/Logo1.svg";
import '../css/Navbar.css'
// import { FaSearch, FaCamera } from "react-icons/fa";

const Demo = () => {
  return (
    <div className="hero-section">
      {/* Navbar */}
      <Navbar variant="dark" expand="lg" sticky="top" className="navbar bg-transparent">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img
              src={Logo}
              width={60}
            //   className="d-inline-block align-top"
              alt="Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-5">
              <NavDropdown title="Location" id="location-dropdown "  className="toggle text-white">
                <NavDropdown.Item href="#">New York</NavDropdown.Item>
                <NavDropdown.Item href="#">Los Angeles</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#best-seller">Best Seller</Nav.Link>
              <Nav.Link href="#today-deals">Today Deals</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <InputGroup>
                <Form.Control
                  type="search"
                  placeholder="Search for products..."
                  className="me-2"
                />
                <Button variant="outline-light">
                  <i className="bi bi-search"></i>
                </Button>
              </InputGroup>
            </Form>
            <Nav className="ms-3">
              <NavDropdown title={<span><img src="/flags/it.png" alt="Italian" width="20" /> Italian</span>} id="lang-dropdown">
                <NavDropdown.Item href="#">English</NavDropdown.Item>
                <NavDropdown.Item href="#">Italian</NavDropdown.Item>
              </NavDropdown>
              <Button variant="warning" className="ms-2">Sign In</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <div className="hero-content d-flex align-items-center">
        <Container>
          <Row className="text-center text-white">
            <Col md={12}>
              <h1 className="hero-title">ORGANIC</h1>
              <h2 className="hero-subtitle">VEGETABLE & FRUITS</h2>
              <p className="hero-tagline">"Experience the Taste of Real Organic"</p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
export default Demo;
