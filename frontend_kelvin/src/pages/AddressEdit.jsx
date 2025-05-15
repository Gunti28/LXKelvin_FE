import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import styles from "../css/AddressEdit.module.css";

function AdressNew(props) {
  const [modalAddress, setModalAddress] = useState({
    houseNo: "",
    landMark: "",
    city: "",
    state: "",
    pincode: "",
    type: "",
    isDefault: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setModalAddress((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRadioChange = (e) => {
    setModalAddress((prev) => ({
      ...prev,
      type: e.target.value,
    }));
  };

  const handleCheckboxChange = (e) => {
    setModalAddress((prev) => ({
      ...prev,
      isDefault: e.target.checked,
    }));
  };

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className={styles.heading}
        >
          Add New Address
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="houseNo">
            <Form.Control
              type="text"
              name="houseNo"
              placeholder="House Number & Floor *"
              value={modalAddress.houseNo}
              onChange={handleInputChange}
              className={styles.inputBox}
            />
          </Form.Group>

          <Form.Group controlId="landMark">
            <Form.Control
              type="text"
              name="landMark"
              placeholder="Landmark & Area Name *"
              value={modalAddress.landMark}
              onChange={handleInputChange}
              className={styles.inputBox}
            />
          </Form.Group>

          <Form.Group controlId="city">
            <Form.Control
              type="text"
              name="city"
              placeholder="Town/City *"
              value={modalAddress.city}
              onChange={handleInputChange}
              className={styles.inputBox}
            />
          </Form.Group>

          <Form.Group controlId="state">
            <Form.Control
              type="text"
              name="state"
              placeholder="State *"
              value={modalAddress.state}
              onChange={handleInputChange}
              className={styles.inputBox}
            />
          </Form.Group>

          <Form.Group controlId="pincode">
            <Form.Control
              type="text"
              name="pincode"
              placeholder="pincode *"
              value={modalAddress.pincode}
              onChange={handleInputChange}
              className={styles.inputBox}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label className={styles.Addresslabel}>
              Address Type *
            </Form.Label>
            <div className={styles.radioCon}>
              <Form.Check
                type="radio"
                label="Home"
                name="type"
                value="home"
                checked={modalAddress.type === "home"}
                onChange={handleRadioChange}
                inline
                className={styles.label}
              />
              <Form.Check
                type="radio"
                label="Office"
                name="type"
                value="office"
                checked={modalAddress.type === "office"}
                onChange={handleRadioChange}
                inline
                className={styles.label}
              />
              <Form.Check
                type="radio"
                label="Work"
                name="type"
                value="work"
                checked={modalAddress.type === "work"}
                onChange={handleRadioChange}
                inline
                className={styles.label}
              />
            </div>
          </Form.Group>
          <Form.Group>
            <Form.Check
              type="checkbox"
              label="Make this my default address"
              checked={modalAddress.isDefault}
              onChange={handleCheckboxChange}
              className={styles.label}
            />
          </Form.Group>
        </Form>
        <div className={styles.saveBtnWrap}>
          <Button className={styles.saveButton}>Save & Continue</Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default AdressNew;
