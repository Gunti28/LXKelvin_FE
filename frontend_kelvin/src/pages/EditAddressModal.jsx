import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import styles from "../css/EditAddressModal.module.css";

function EditAddressModal({ show, onHide, address, onSave }) {
  const [form, setForm] = useState({
    houseNo: "",
    landMark: "",
    city: "",
    state: "",
    pincode: "",
    type: "",
    isDefault: false,
  });
  useEffect(() => {
    if (address) {
      setForm(address);
    }
  }, [address]);

  useEffect(() => {
  if (show) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [show]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (e) => {
    setForm((prev) => ({ ...prev, type: e.target.value }));
  };

  const handleCheckboxChange = (e) => {
    setForm((prev) => ({ ...prev, isDefault: e.target.checked }));
  };

  const handleSubmit = () => {
    onSave(form);
  };

  return (
    <Modal show={show} size="md" onHide={onHide} centered scrollable>
  <Modal.Header closeButton>
    <Modal.Title className={styles.heading}>Edit Address</Modal.Title>
  </Modal.Header>
  <Modal.Body className={styles.modalBody}>
    <Form>
        <Form.Control
            type="text"
            placeholder="House Number"
            name="houseNo"
            value={form.houseNo}
            onChange={handleChange}
            className={styles.inputBox}
          />
          <Form.Control
            type="text"
            placeholder="Landmark"
            name="landMark"
            value={form.landMark}
            onChange={handleChange}
            className={styles.inputBox}
          />
          <Form.Control
            type="text"
            placeholder="City"
            name="city"
            value={form.city}
            onChange={handleChange}
            // className="mb-2"
            className={styles.inputBox}
          />
          <Form.Control
            type="text"
            placeholder="State"
            name="state"
            value={form.state}
            onChange={handleChange}
            // className="mb-2"
            className={styles.inputBox}
          />
          <Form.Control
            type="text"
            placeholder="Pincode"
            name="pincode"
            value={form.pincode}
            onChange={handleChange}
            // className="mb-2"
            className={styles.inputBox}
          />

          <div className="mb-3">
            <Form.Check
              inline
              label="Home"
              name="type"
              type="radio"
              value="home"
              checked={form.type === "home"}
              onChange={handleRadioChange}
              className={styles.label}
            />
            <Form.Check
              inline
              label="Office"
              name="type"
              type="radio"
              value="office"
              checked={form.type === "office"}
              onChange={handleRadioChange}
              className={styles.label}
            />
            <Form.Check
              inline
              label="Workplace"
              name="type"
              type="radio"
              value="workplace"
              checked={form.type === "workplace"}
              onChange={handleRadioChange}
              className={styles.label}
            />
          </div>
      <Form.Check
        type="checkbox"
        label="Make this my default address"
        checked={form.isDefault}
        onChange={handleCheckboxChange}
        className={styles.label}
      />
    </Form>
  </Modal.Body>

  <div className={styles.footerWrap}>
    <Button
      variant="secondary"
      onClick={onHide}
      className={styles.cancelButton}
    >
      Cancel
    </Button>
    <Button onClick={handleSubmit} className={styles.saveButton}>
      Save & Continue
    </Button>
  </div>
</Modal>
  );
}

export default EditAddressModal;


