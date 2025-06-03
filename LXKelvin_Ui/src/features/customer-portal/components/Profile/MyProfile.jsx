import React, { useState } from "react";
import { Icon } from "@iconify/react";
import styles from "../../../../lib/common/css/profile/Profile.module.css";

const MyProfile = () => {
  const [isGold, setIsGold] = useState(false);
  const [isEditable, setIsEditable] = useState(false);

  const [userData, setUserData] = useState({
    name: "Chukka Yaswanth Goud",
    mobile: "9494216347",
    email: "Yashaswadh2002@gmail.com",
    mainName: "Chukka Yaswanth Goud",
    mainNumber: "9494216347",
  });

  const handleEdit = (e) => {
    e.preventDefault();
    setIsEditable((prev) => !prev);
  };

  const handleSave = (e) => {
    e.preventDefault();
    setIsEditable(false);
    setUserData((prev) => ({
      ...prev,
      mainName: prev.name,
      mainNumber: prev.mobile,
    }));
  };

  const handleChange = (field, value) => {
    setUserData((prev) => ({
      ...prev,
      [field]: value,
    }));
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
            <p className={styles.proName}>{userData.mainName}</p>
            <p className={styles.proNo}>{userData.mainNumber}</p>
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
            value={userData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className={styles.formInput}
            disabled={!isEditable}
          />

          <label className={styles.formLabel}>Mobile Number *</label>
          <input
            type="tel"
            value={userData.mobile}
            onChange={(e) => handleChange("mobile", e.target.value)}
            className={styles.formInput}
            disabled={!isEditable}
          />

          <label className={styles.formLabel}>Email Address *</label>
          <input
            type="email"
            value={userData.email}
            onChange={(e) => handleChange("email", e.target.value)}
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