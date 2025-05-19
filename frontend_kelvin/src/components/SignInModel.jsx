
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Logo from "../assets/NavbarIcons/Logo1.svg";
import FooterImg from "../assets/RegistraionIcons/footerimg.jpg";
import  ModelPage from  "../css/ModelPage.module.css";
import { Form, Button, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";


const SignInModel = () => {

  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };

  return (
    <Modal
      show={true}
      size="medium"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="border-0 justify-content-center">
        <Modal.Title id="contained-modal-title-vcenter">
          <img src={Logo} width={150} />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className={`border-0 d-flex justify-content-center align-items-center flex-column ${ModelPage.body}`} >
        <div className="text-center">
          <p className="fs-5 texting ">Experience the Taste of Real Organic</p>
          <p className={ModelPage.textingsmall}>Login or SignUp</p>
        </div>
        <Container fluid>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Enter phone number or email... "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={ModelPage.formCont}
                
              />
            </Form.Group>
            <NavLink to='/enterotp'>
            <Button variant="warning" type="submit" className="w-100 mt-3 mb-2" >
              Continue
            </Button>
            </NavLink>
          </Form>
        </Container>
      </Modal.Body>
      <Modal.Footer className=" p-0 border-0 ps-1  ">
        <img
          src={FooterImg}
          className={`image-fluid w-100 ${ ModelPage.footerImg}`}
          
        />
      </Modal.Footer>
    </Modal>
  );
}

export default SignInModel;
