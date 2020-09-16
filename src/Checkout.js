import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal.js";
import FlipMove from "react-flip-move";

function Checkout() {
  const [{ basket, user }] = useStateValue();

  const ticketNotVisibleState = {
    transform: "translateX(100%)",
    opacity: 0.1,
  };
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="ad"
        ></img>

        <div>
          {user ? (
            <h3 style={{ padding: "10px" }}>Hi, {user.email.split("@")[0]}</h3>
          ) : (
            ""
          )}
          <h2 className="checkout__title">Your shopping Basket</h2>
          {/* <FlipMove
            enterAnimation={{
              from: ticketNotVisibleState,
              to: {},
            }}
            leaveAnimation={{
              from: {},
              to: ticketNotVisibleState,
            }}
          > */}
          {basket.map((item, index) => (
            <CheckoutProduct key={index} {...item} />
          ))}
          {/* </FlipMove> */}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
