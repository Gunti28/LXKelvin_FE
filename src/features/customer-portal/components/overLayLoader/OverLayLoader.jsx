import Spinner from "react-bootstrap/Spinner";
import commonStyles from "../../../../lib/common/css/index.module.css";

const OverLayLoader = ({ isLoader = false }) => {
  if (!isLoader) return null;
  return (
    <div className={commonStyles.loadingOverlay}>
      <Spinner animation="grow" variant="primary" />
      <Spinner animation="grow" variant="secondary" />
      <Spinner animation="grow" variant="success" />
      <Spinner animation="grow" variant="danger" />
      <Spinner animation="grow" variant="warning" />
      <Spinner animation="grow" variant="info" />
    </div>
  );
};

export default OverLayLoader;
