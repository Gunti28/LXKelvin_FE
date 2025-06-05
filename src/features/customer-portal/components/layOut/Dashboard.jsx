import Category from "../../../../lib/common/css/registration/Dashboard.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CategoriesComponent from "./CategoriesComponent";
import FlashScreens from "./FlashScreens";
import OverLayLoader from "../overLayLoader/OverLayLoader";
const DashBoard = () => {
  return (
    <div className={`container-fluid ${Category.MainDashboard}`}>
      {/* <OverLayLoader isLoader={true} /> */}
      {/* <OverLayLoader isLoader={true} /> */}
      <FlashScreens />
      <CategoriesComponent />
    </div>
  );
};

export default DashBoard;
