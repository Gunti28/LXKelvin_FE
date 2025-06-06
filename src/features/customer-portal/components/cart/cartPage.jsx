import React, { useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import CartModule from "../../../../lib/common/css/cart/Cart.module.css";
import { MdOutlineEuro } from "react-icons/md";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import SplitButton from "react-bootstrap/SplitButton";
import { useDispatch, useSelector } from "react-redux";
import { deleteCartItem } from "../../../../lib/services/cartAsyncThunk";
import {
  updateWeight,
  updateQuantity,
} from "../../../../store/slice/cartSlice";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    console.log("Placing order...");
    navigate("/deliveryaddress");
  };

  const cartItems = useSelector((state) => state.cart.items ?? []);
  console.log("Cart items:", cartItems);

  const itemCount = cartItems.filter((item) => item.quantity > 0).length;
  console.log("Item count:", itemCount);

  const subtotal = cartItems.reduce((sum, item) => {
    const price = item.priceByWeight?.[item.selectedWeight] ?? item.price ?? 0;
    const itemSubtotal = price * item.quantity;
    console.log(
      `Subtotal for ${item.name}: ${price} x ${item.quantity} = ${itemSubtotal}`
    );
    return sum + itemSubtotal;
  }, 0);

  const totalDiscount = cartItems.reduce((sum, item) => {
    const discount = item.quantity > 0 ? item.discount || 0 : 0;
    console.log(`Discount for ${item.name}: ${discount}`);
    return sum + discount;
  }, 0);

  useEffect(() => {
    console.log("CartPage mounted or updated");
  }, [cartItems]);

  return (
    <div className={CartModule.CartMain}>
      <div className="pt-3">
        <div
          className="d-flex flex-row justify-content-between align-items-center fs-4"
          style={{ color: "#666666" }}
        >
          <p>Items ({itemCount} items)</p>
          <p>Quantity</p>
          <p>Subtotal</p>
        </div>

        <div
          className={`${CartModule.mainitemsec} justify-content-center align-items-center`}
          style={{ marginBottom: "20px", paddingRight: "10px" }}
        >
          {cartItems.map((item) => {
            const price =
              item.priceByWeight?.[item.selectedWeight] ?? item.price ?? 0;
            const itemTotal = price * item.quantity;
            console.log(
              `Rendering ${item.name}: quantity = ${item.quantity}, selectedWeight = ${item.selectedWeight}, price = ${price}, total = ${itemTotal}`
            );

            return (
              <div
                key={item.id}
                className={`d-flex flex-row justify-content-between align-items-center pt-4 ${CartModule.cartItem}`}
              >
                <div
                  className={`d-flex flex-row justify-content-center align-items-center gap-3 ${CartModule.itemimg}`}
                >
                  <img src={item.image} alt={item.name} />
                  <div className={CartModule.imgtext}>
                    <div>{item.name}</div>
                    <p>
                      <MdOutlineEuro />
                      {itemTotal.toFixed(2)}
                      <span className="ms-3" style={{ color: "#666666" }}>
                        PMD <MdOutlineEuro /> {item.originalPrice}
                      </span>
                    </p>
                  </div>
                </div>

                <div
                  style={{ marginRight: 150 }}
                  className={CartModule.itembtn}
                >
                  <div className="d-flex flex-row justify-content-center align-items-center gap-3 w-200">
                    <SplitButton
                      as={ButtonGroup}
                      size="sm"
                      variant="light"
                      title={item.selectedWeight ?? "Select Weight"}
                      onSelect={(e) => {
                        console.log(`Changed weight for ${item.name} to ${e}`);
                        dispatch(updateWeight({ id: item.id, weight: e }));
                      }}
                    >
                      {Object.keys(item.priceByWeight ?? {}).map(
                        (weightOption) => (
                          <Dropdown.Item
                            key={weightOption}
                            eventKey={weightOption}
                          >
                            {weightOption}
                          </Dropdown.Item>
                        )
                      )}
                    </SplitButton>

                    <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                      <Button
                        style={{
                          borderWidth: 1,
                          width: 35,
                          backgroundColor: "white",
                          color: "black",
                          borderColor: "#FF9900",
                        }}
                        onClick={() => {
                          console.log(`Decreased quantity for ${item.name}`);
                          dispatch(
                            updateQuantity({
                              id: item.id,
                              changeInQuantity: -1,
                            })
                          );
                        }}
                      >
                        -
                      </Button>
                      <p className={CartModule.midCount}>{item.quantity}</p>
                      <Button
                        style={{
                          borderWidth: 1,
                          backgroundColor: "white",
                          color: "black",
                          borderColor: "#FF9900",
                        }}
                        onClick={() => {
                          console.log(`Increased quantity for ${item.name}`);
                          dispatch(
                            updateQuantity({
                              id: item.id,
                              changeInQuantity: 1,
                            })
                          );
                        }}
                      >
                        +
                      </Button>
                    </div>
                  </div>

                  <div className="d-flex flex-row justify-content-center align-items-center gap-2 mt-2">
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => {
                        console.log(`Deleting ${item.name}`);
                        dispatch(deleteCartItem(item.id));
                      }}
                    >
                      Delete
                    </Button>
                    <Button variant="outline-primary" size="sm">
                      Save for Later
                    </Button>
                  </div>
                </div>

                <div className={CartModule.itemprice}>
                  <div>
                    <MdOutlineEuro /> {itemTotal.toFixed(2)}
                  </div>
                  <div style={{ color: "#17B017", fontSize: 14 }}>
                    discount: <MdOutlineEuro />{" "}
                    {(item.discount ?? 0).toFixed(2)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div
          style={{
            position: "sticky",
            backgroundColor: "#fff",
            paddingBottom: "10px",
          }}
        >
          <div
            style={{ backgroundColor: "#D9D9D9", borderRadius: 10 }}
            className="d-flex justify-content-between align-items-center flex-row ps-3 pe-5 mt-5"
          >
            <p className="pt-3">Missed Something ?</p>
            <Button
              variant="light"
              onClick={() => {
                console.log("Navigating to all categories");
                navigate("/products/all-categories");
              }}
            >
              + Add items
            </Button>
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
                Discount: <MdOutlineEuro /> {totalDiscount.toFixed(2)}
              </div>
              <div style={{ fontWeight: "bold", fontSize: 16 }}>
                Total Amount: <MdOutlineEuro />{" "}
                {(subtotal - totalDiscount).toFixed(2)}
              </div>
            </div>
            <Button
              className="w-25 border-0"
              style={{ backgroundColor: "#FF9900", height: 40 }}
              onClick={handlePlaceOrder}
            >
              Place & Order
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
