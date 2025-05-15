import React, { useState } from "react";
import styles from "../css/Address.module.css";
import { Icon } from "@iconify/react";
import AdressEdit from "./AddressEdit";
import EditAddressModal from "./EditAddressModal";
const AddressList = () => {

  const [addresses, setAddresses] = useState([
    {
      id: 1,
      houseNo: "90b",
      landMark: "near innovative multiplex",
      city: "Marathalli,Bangalore",
      state: "Karnataka",
      pincode: "560068",
      type: "home",
      isDefault: true,
    },
    {
      id: 2,
      houseNo: "100b",
      landMark: "near pvr multiplex",
      city: "whitefield,Bangalore",
      state: "Karnataka",
      pincode: "560068",
      type: "office",
      isDefault: false,
    },
  ]);
  const [modalShow, setModalShow] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleEditClick = (address) => {
    setSelectedAddress(address);
    setShowEditModal(true);
  };
  const handleSave = (updatedAddress) => {
    setAddresses((prev) =>
      prev.map((addr) =>
        addr.id === updatedAddress.id ? updatedAddress : addr
      )
    );
    setShowEditModal(false);
  };
  const handleDelete = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this address?"
    );
    if (confirmed) {
      setAddresses((prev) => prev.filter((addr) => addr.id !== id));
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.titleSection}>
          <div className={styles.iconCircle}>
            <Icon
              icon="ic:round-home"
              width="54"
              height="54"
              style={{ color: "#E1712B" }}
            />
          </div>
          <h2 className={styles.heading}>My Address</h2>
        </div>
        <button className={styles.addNew} onClick={() => setModalShow(true)}>
          Add new +
        </button>
        <AdressEdit show={modalShow} onHide={() => setModalShow(false)} />
      </div>

      {addresses.map((item, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.cardLeft}>
            <Icon
              icon="hugeicons:location-03"
              width="24"
              height="24"
              style={{ color: "#E1712B" }}
            />
            <div>
              <div className={styles.cardHeader}>
                <span className={styles.cardTitle}>{item.type}</span>
                <button
                  className={styles.editBut}
                  onClick={() => handleEditClick(item)}
                >
                  <Icon icon="oui:document-edit" width="16" height="16" />
                </button>
                <EditAddressModal
                  show={showEditModal}
                  onHide={() => setShowEditModal(false)}
                  address={selectedAddress}
                  onSave={handleSave}
                />
              </div>
              <p
                className={styles.cardText}
              >{`${item.houseNo}, ${item.landMark}, ${item.city}, ${item.state}, ${item.pincode}`}</p>
            </div>
          </div>
          <div className={styles.cardRight}>
            <span className={styles.deleteText}>Delete</span>
            <button
              className={styles.delBut}
              onClick={() => handleDelete(item.id)}
            >
              <Icon
                icon="weui:delete-outlined"
                width="24"
                height="24"
                style={{ color: "#FF0000" }}
              />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AddressList;
