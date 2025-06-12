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

//search functionality helper

export const getFilteredResults = (products, term) => {
  const lowerTerm = term.toLowerCase();
  const categorySet = new Set();

  const isSeasonalQuery = lowerTerm.includes("seasonal");
  const hasFruits = lowerTerm.includes("fruits");
  const hasVegetables = lowerTerm.includes("vegetables");
  const hasMilk = lowerTerm.includes("milk");

  const matches = products.filter((item) => {
    const categoryName = getCategoryName(item.cat_id)?.toLowerCase();

    const nameMatch = item.name.toLowerCase().includes(lowerTerm);
    const categoryMatch = categoryName?.includes(lowerTerm);

    const isItemSeasonal = item.isSeasonal || false;

    const seasonalOnly = isSeasonalQuery && isItemSeasonal;

    const seasonalCategoryMatch =
      isSeasonalQuery &&
      ((hasFruits && categoryName === "seasonal fruits") ||
        (hasVegetables && categoryName === "seasonal vegetables")) &&
      isItemSeasonal;

    const milkCategoryMatch = hasMilk && categoryName === "milkProducts";

    const anyMatch =
      nameMatch ||
      categoryMatch ||
      seasonalOnly ||
      seasonalCategoryMatch ||
      milkCategoryMatch;

    if (
      categoryMatch ||
      seasonalOnly ||
      seasonalCategoryMatch ||
      milkCategoryMatch
    ) {
      categorySet.add(getCategoryName(item.cat_id));
    }

    return anyMatch;
  });

  const categories = Array.from(categorySet).map((cat) => ({
    type: "category",
    name: cat,
  }));

  const productResults = matches.map((item) => ({
    type: "product",
    id: item.id,
    name: item.name,
  }));

  return [...categories, ...productResults];
};

export const handleViewPlansClick = (navigate) => {
  return navigate("/subscriptions");
};

// card & upi payments
