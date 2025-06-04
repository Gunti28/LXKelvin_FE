export const showNavBarDefaultTemplate = (path) => {
  let template = "";
  return (template =
    path === "/" ||
    path === "/signIn" ||
    path === "/signUp" ||
    path === "/dashBoard"
      ? "transparent"
      : "#fff");
};

// productDetails helpers

export const handleHomeClick = (navigate) => {
  return navigate("/products/all-categories");
};

export const handleCategoryClick = (navigate, cat_id) => {
  switch (cat_id) {
    case 1:
      navigate("/products/vegetables");
      break;
    case 2:
      navigate("/products/fruits");
      break;
    case 3:
      navigate("/products/seasonalVegetables");
      break;
    case 4:
      navigate("/products/seasonalFruits");
      break;
    default:
      navigate("/products/milkProducts");
  }
};

export const getCategoryName = (cat_id) => {
  switch (cat_id) {
    case 1:
      return "Vegetables";
    case 2:
      return "Fruits";
    case 3:
      return "Seasonal Vegetables";
    case 4:
      return "Seasonal Fruits";
    default:
      return "Milk Products";
  }
};

export const handleViewPlansClick = (navigate) => {
  return navigate("/subscriptions");
};

// card & upi payments
