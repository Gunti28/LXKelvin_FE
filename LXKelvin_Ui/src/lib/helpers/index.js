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
