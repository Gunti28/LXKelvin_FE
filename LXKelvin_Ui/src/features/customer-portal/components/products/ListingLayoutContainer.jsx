import { Outlet } from "react-router-dom";
import styles from "../../../../lib/common/css/products/ListingLayout.module.css";
import SidebarComponent from "./SidebarComponent";
const ListingLayoutContainer = () => {
  return (
    <div className={styles.layoutContainer}>
      <SidebarComponent />
      <main className={styles.mainContent}>
        <Outlet />
      </main>
    </div>
  );
};

export default ListingLayoutContainer;
