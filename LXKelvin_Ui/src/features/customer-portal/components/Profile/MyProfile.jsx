
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import styles from "../../../../lib/common/css/profile/Profile.module.css";

const MyProfile = () => {
  const [profileName, setProfileName] = useState("Chukka Yaswanth Goud");
  const [mobileNumber, setMobileNumber] = useState("9494216347");
  const [emailAddress, setEmailAddress] = useState("Yashaswadh2002@gmail.com");
  const [mainName, setMainName] = useState("Chukka Yaswanth Goud");
  const [mainNumber, setMainNumber] = useState("9494216347");
  const [isGold, setIsGold] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  const handleEdit = (e) => {
    e.preventDefault();
    setIsEditable((prev) => !prev);
  };
  const handleSave = () => {
    setIsEditable(false);
    setMainName(profileName);
    setMainNumber(mobileNumber);
  };
  return (
    <div className={styles.ProfileCon}>
      <div className={styles.TopCon}>
        <div className={styles.detailsCon}>
          <button
            className={styles.profileImg}
            onClick={() => setIsGold(!isGold)}
          >
            <Icon
              icon="iconamoon:profile-fill"
              width="75"
              height="75"
              style={{ color: "#E1712B" }}
            />
          </button>
          <div className={styles.textPart}>
            <p className={styles.proName}>{mainName}</p>
            <p className={styles.proNo}>{mainNumber}</p>
          </div>
        </div>
        
        <div className={isGold ? styles.goldCard : styles.card}>
          <h2 className={styles.title}>{isGold ? "Gold" : "Premium"}</h2>
          <p className={styles.subtitle}>Subscription pass</p>
        </div>
      </div>
      <div className={styles.BottomCon}>
        <form className={styles.formCon}>
          <button className={styles.editText} onClick={handleEdit}>
            {isEditable ? "Cancel Edit" : "Edit Details +"}
          </button>
          <label className={styles.formLabel}>Name *</label>
          <input
            type="text"
            value={profileName}
            onChange={(e) => setProfileName(e.target.value)}
            className={styles.formInput}
            disabled={!isEditable}
          />

          <label className={styles.formLabel}>Mobile Number *</label>
          <input
            type="tel"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            className={styles.formInput}
            disabled={!isEditable}
          />

          <label className={styles.formLabel}>Email Address *</label>
          <input
            type="email"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
            className={styles.formInput}
            disabled={!isEditable}
          />
          <button
            type="submit"
            className={styles.saveBut}
            style={{
              backgroundColor: isEditable ? "darkgreen" : "#E2E8F0",
              color: isEditable ? "#fff" : "#636363",
            }}
            onClick={handleSave}
            disabled={!isEditable}
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;