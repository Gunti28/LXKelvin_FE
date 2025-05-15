import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import "../css/Cart.css";
import TomatoCart from "../assets/tomatocart.png";
import KiwiCart from "../assets/kiwicart.png";
import { MdOutlineEuro } from "react-icons/md";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import SplitButton from "react-bootstrap/SplitButton";
import Heart from '../assets/heart1.svg'
const Cart = () => {
    const [liked, setLiked] = useState(false);
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Organic Tomato",
      image: TomatoCart,
      originalPrice: 53,
      discount: 26.1,
      quantity: 1,
      selectedWeight: "1000g",
      priceByWeight: {
        "1000g": 56,
        "500g": 28,
        "250g": 14,
      },
    },
    {
      id: 2,
      name: "Organic Kiwi",
      image: KiwiCart,
      originalPrice: 63,
      discount: 26.1,
      quantity: 1,
      selectedWeight: "1000g",
      priceByWeight: {
        "1000g": 26,
        "500g": 13,
        "250g": 6.5,
      },
    },
    // {
    //   id: 3,
    //   name: "Organic Tomato",
    //   image: TomatoCart,
    //   originalPrice: 53,
    //   discount: 26.1,
    //   quantity: 1,
    //   selectedWeight: "1000g",
    //   priceByWeight: {
    //     "1000g": 56,
    //     "500g": 28,
    //     "250g": 14,
    //   },
    // },
    // {
    //   id: 4,
    //   name: "Organic Tomato",
    //   image: TomatoCart,
    //   originalPrice: 53,
    //   discount: 26.1,
    //   quantity: 1,
    //   selectedWeight: "1000g",
    //   priceByWeight: {
    //     "1000g": 56,
    //     "500g": 28,
    //     "250g": 14,
    //   },
    // },
  ]);

  const handleWeightChange = (id, weight) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              selectedWeight: weight,
            }
          : item
      )
    );
  };

  const updateQuantity = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + delta } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const itemCount = cartItems.filter((item) => item.quantity > 0).length;
  const subtotal = cartItems.reduce((sum, item) => {
    const unitPrice = item.priceByWeight?.[item.selectedWeight] || 0;
    return sum + unitPrice * item.quantity;
  }, 0);

  const totalDiscount = cartItems.reduce((sum, item) => {
    const discount = item.quantity > 0 ? item.discount || 0 : 0;
    return sum + discount;
  }, 0);

  const handleDelete = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleSaveForLater = (item) => {
    //   navigate("/profile");
  };

  return (
    <Container className="justify-content-center align-items-center">
      <div className="pt-3">
        <div
          className="d-flex flex-row justify-content-between align-items-center fs-4"
          style={{ color: "#666666" }}
        >
          <p>Items ({itemCount} items)</p>
          <p>Quantity</p>
          <p>Subtotal</p>
        </div>

        <div className="mainitemsec justify-content-center align-items-center"
          style={{
            maxHeight: cartItems.length > 2 ? "450px" : "auto",
            overflowY: cartItems.length > 2 ? "auto" : "visible",
            marginBottom: "20px",
            paddingRight: "10px",
          }}
        >
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="d-flex flex-row justify-content-between align-items-center pt-4 cart-item"
            >
              <div className="d-flex flex-row justify-content-center align-items-center gap-3 itemimg">
                <img src={item.image}  />
                <div className="imgtext">
                  <div>{item.name}</div>
                  <p>
                    <MdOutlineEuro />
                    {item.priceByWeight[item.selectedWeight].toFixed(2)}
                    <span className="ms-3" style={{ color: "#666666" }}>
                      PMD <MdOutlineEuro /> {item.originalPrice}
                    </span>
                  </p>
                </div>
              </div>

              <div style={{ marginRight: 150 }}  className="cart-item-buttons">
                <div className="d-flex flex-row justify-content-center align-items-center gap-3">
                  <SplitButton
                    as={ButtonGroup}
                    size="sm"
                    variant="light"
                    title={item.selectedWeight}
                    onSelect={(e) => handleWeightChange(item.id, e)}
                  >
                    {Object.keys(item.priceByWeight).map((weightOption) => (
                      <Dropdown.Item key={weightOption} eventKey={weightOption}>
                        {weightOption}
                      </Dropdown.Item>
                    ))}
                  </SplitButton>

                  <div className="d-flex flex-row justify-content-center align-items-center gap-2 ">
                    <Button
                     style={{
                         borderWidth:1,
                         width:35,
                        backgroundColor: "white",
                        color:"black",
                         borderColor:"#FF9900"
                      }}
                      onClick={() => updateQuantity(item.id, -1)}
                    >
                      -
                    </Button>
                    <p className=" midCount">{item.quantity}</p>
                    <Button
                      style={{
                         borderWidth:1,
                        backgroundColor: "white",
                        color:"black",
                         borderColor:"#FF9900"
                      }}
                      onClick={() => updateQuantity(item.id, 1)}
                    >
                      +
                    </Button>
                  </div>
                </div>

                <div className="d-flex flex-row justify-content-center align-items-center gap-2 mt-2">
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </Button>
                  <Button
                    variant="outline-primary"
                    size="sm"
                    onClick={() => handleSaveForLater(item)}
                  >
                    Save for Later
                  </Button>
                 
                </div>
              </div>

              <div className="cart-item-price">
                <div>
                  <MdOutlineEuro />{" "}
                  {(
                    item.priceByWeight[item.selectedWeight] * item.quantity
                  ).toFixed(2)}
                </div>

                <div style={{ color: "#17B017", fontSize: 14 }}>
                  discount: <MdOutlineEuro />{" "}
                  {item.quantity > 0 ? item.discount.toFixed(2) : "0.00"}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            position: "sticky",
            bottom: 0,
            backgroundColor: "#fff",
            zIndex: 1000,
            paddingBottom: "10px",
          }}
        >
          <div
            style={{ backgroundColor: "#D9D9D9", borderRadius: 10 }}
            className="d-flex justify-content-between align-items-center flex-row ps-3 pe-5 mt-5"
          >
            <p className="pt-3">Missed Something ?</p>
            <Button variant="light">+ Add items </Button>
          </div>

          <div
            style={{ backgroundColor: "#D4E7F3", borderRadius: 10 }}
            className="d-flex justify-content-between align-items-center flex-row mt-3 pe-5"
          >
            <div className="ps-3 pt-2 pb-2 d-flex flex-column text-start gap-3">
              <div>
                Subtotal({itemCount} items): <MdOutlineEuro />{" "}
                {subtotal.toFixed(2)}
              </div>
              <div style={{ fontSize: 14 }}>
                discount: <MdOutlineEuro /> {totalDiscount.toFixed(2)}
              </div>
            </div>
            <Button
              className="w-25 border-0"
              style={{ backgroundColor: "#FF9900", height: 40 }}
            >
              Place & Order
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Cart;
