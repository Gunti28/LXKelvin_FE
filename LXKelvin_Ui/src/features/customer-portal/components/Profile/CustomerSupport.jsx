
import React from "react";
import styles from "../../../../lib/common/css/profile/CustomerSupport.module.css";

import { Icon } from "@iconify/react";
const CustomerSupport = () => {
  return (
    <div className={styles.CustomerCon}>
      <div className={styles.headerCon}>
        <div className={styles.titleSection}>
          <div className={styles.IconCon}>
            <Icon
              icon="streamline:customer-support-1-solid"
              width="48"
              height="48"
              style={{ color: "#E1712B" }}
              className={styles.MainIcon}
            />
          </div>
          
          <h2 className={styles.heading}>Frequently asked questions</h2>
        </div>
      </div>
      <div className={styles.bottomCon}>
        <button className={styles.optionbutton}>
          General Queries
          <Icon icon="weui:arrow-filled" width="20" height="40" />
        </button>
        <button className={styles.optionbutton}>
          Cancellation,Return & Refund
          <Icon icon="weui:arrow-filled" width="20" height="40" />
        </button>
        <button className={styles.optionbutton}>
          Contact Options
          <Icon icon="weui:arrow-filled" width="20" height="40" />
        </button>
        <button className={styles.optionbutton}>
          Payment Issues
          <Icon icon="weui:arrow-filled" width="20" height="40" />
        </button>
      </div>
    </div>
  );
};

export default CustomerSupport;