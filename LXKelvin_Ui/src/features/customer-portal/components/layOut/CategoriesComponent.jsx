import { useEffect, useState } from "react";
import Category from "../../../../lib/common/css/registration/Dashboard.module.css";
import { Container, Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

const CategoriesComponent = () => {
  const { categories } = useSelector((state) => state.categories);
  const [categoriesList, setCategories] = useState([]);
  const navigate = useNavigate();
  const handleAllCategories = () => {
    navigate("/products/all-categories");
  };
  const handleCardClick = (to) => {
    navigate(to);
  };
  useEffect(() => {
    setCategories(categories);
  }, [categories]);
  return (
    <Container fluid className="mt-4 ">
      <h4 className={`text-center mb-4 ${Category.CatText}`}>CATEGORIES</h4>
      <div className="text-end">
        <button className={Category.AllCatBtn} onClick={handleAllCategories}>
          All Categories
        </button>
      </div>
      <hr />
      <div className={`d-flex overflow-auto gap-3 ${Category.CardWrapper}`}>
        {categoriesList.map((cat, idx) => (
          <Col md={3} sm={6} xs={12} key={idx} className="mb-4">
            <div key={idx} className={`t1 mb-5 ${Category.cardtotal}`}>
              <Card
                className={Category.cardimage}
                onClick={() => {
                  handleCardClick(cat.to);
                }}
              >
                <Card.Img
                  variant="top"
                  src={cat.image}
                  className={Category.cd}
                />
                <Card.Body className={Category.cardBody}>
                  <Card.Title className={`text-center ${Category.cardfont}`}>
                    {cat.title}
                  </Card.Title>
                </Card.Body>
              </Card>
            </div>
          </Col>
        ))}
      </div>
    </Container>
  );
};

export default CategoriesComponent;
