import Spinner from "react-bootstrap/Spinner";
import commonStyles from "../../../../lib/common/css/index.module.css";

const OverLayLoader = ({ isLoader = false }) => {
  if (!isLoader) return null;
  return (
    <div className={commonStyles.loadingOverlay}>
      <Spinner animation="grow" variant="primary" size="sm" />
      <Spinner animation="grow" variant="secondary" size="sm" />
      <Spinner animation="grow" variant="success" size="sm" />
      <Spinner animation="grow" variant="danger" size="sm" />
      <Spinner animation="grow" variant="warning" size="sm" />
      <Spinner animation="grow" variant="info" size="sm" />
    </div>
  );
};

export default OverLayLoader;
