import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import FooterImg from "../assets/footerimg.jpg";
import "../css/Model.css";
import { Form, Button, Container } from "react-bootstrap";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";

const Register = ({ show, onClose, onCreateAccount }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [checked, setChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (event) => {
    onCreateAccount();
    event.preventDefault();
    if (!name || !email || !password || !confirmPassword) {
      setError("Fill all the field");
      return;
    } else if (password !== confirmPassword) {
      setError("Password does not match");
      return;
    } else {
      setError("");

    }
  };

  return (
    <Modal
      show={show}
      onHide={onClose}
      size="medium"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="border-0 justify-content-center mt-2">
        <Modal.Title id="contained-modal-title-vcenter">
          Register Now
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="border-0 d-flex justify-content-center align-items-center flex-column w-75 ms-5 ">
        <Container fluid>
          <Form onSubmit={handleSubmit}>
            <Form.Group
              controlId="formBasicEmail"
              className="position-relative mb-2"
            >
              <Form.Control
                type="name"
                placeholder="Name "
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                style={{ borderColor: "black", boxShadow: "none" }}
                className="mb-2"
              />
              <Form.Control
                type="email"
                placeholder="Email "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ borderColor: "black", boxShadow: "none" }}
                className="mb-2"
              />
              <Form.Control
                type={showPassword ? "text" : "password"}
                placeholder="Password "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{ borderColor: "black", boxShadow: "none" }}
                className="mb-2"
              />
              <div
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "52%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                  color: "#000",
                }}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </div>
              <Form.Control
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Reset Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                style={{ borderColor: "black", boxShadow: "none" }}
              />
              <div
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "74%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                  color: "#000",
                }}
              >
                {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
              </div>
              {error && (
                <p className="text-center mb-0" style={{ color: "red" }}>
                  {error}
                </p>
              )}
              <Form.Check
                type="checkbox"
                label="I accept terms and policy"
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
                className="mt-2"
                style={{ borderColor: "black", boxShadow: "none" }}
              />
            </Form.Group>

            <Button
              type="submit"
              disabled={checked ? false : true}
              className="w-100 mt-1 mb-2 "
              style={{ backgroundColor: "#FF9900", borderWidth: 0 }}
            >
              Continue
            </Button>
          </Form>
        </Container>
      </Modal.Body>
      <Modal.Footer className=" p-0 border-0 ps-1  ">
        <img
          src={FooterImg}
          alt="FooterImg"
          className="image-fluid w-100 "
          style={{ objectFit: "cover" }}
        />
      </Modal.Footer>
    </Modal>
  );
}

export default Register;
