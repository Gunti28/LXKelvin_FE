import React, { useEffect, useState } from "react";
import styles from "../../../../lib/common/css/profile/Address.module.css";
import { fetchAddresses, updateAddress, deleteAddress } from "../../../../lib/services/addressAsyncThunk"; // Added update and delete imports
import { Icon } from "@iconify/react";
import AdressEdit from "./AddressEdit";
import EditAddressModal from "./EditAddressModal";
import { useSelector, useDispatch } from "react-redux";

const AddressList = () => {
  const dispatch = useDispatch();

  const {
  addresses = [],
  addressesStatus = 'idle',
  error = null,
} = useSelector((state) => state.addresses || {});

  const [modalShow, setModalShow] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  useEffect(() => {
    if (addressesStatus === "init") {
      dispatch(fetchAddresses());
    }
  }, [dispatch, addressesStatus]);

  const handleEditClick = (address) => {
    setSelectedAddress(address);
    setShowEditModal(true);
  };

  const handleSave = (updatedAddress) => {
    dispatch(updateAddress({ id: updatedAddress.id, data: updatedAddress }));
    setShowEditModal(false);
  };

  const handleDelete = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this address?"
    );
    if (confirmed) {
      dispatch(deleteAddress(id));
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

      {addressesStatus === "loading" && <p>Loading...</p>}
      {addressesStatus === "failed" && <p>Error: {error}</p>}

      {addressesStatus === "succeeded" &&
        addresses.map((item) => (
          <div key={item.id} className={styles.card}>
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
                </div>
                <p className={styles.cardText}>
                  {`${item.houseNo}, ${item.landMark}, ${item.city}, ${item.state}, ${item.pincode}`}
                </p>
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

      <EditAddressModal
        show={showEditModal}
        onHide={() => setShowEditModal(false)}
        address={selectedAddress}
        onSave={handleSave}
      />
    </div>
  );
};

export default AddressList;