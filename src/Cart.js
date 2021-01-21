import React from "react";
import "./Cart.css";

export default function Cart(props) {
  return (
    <div className="cart">
      <div className="numProducts"> {props.cartProducts}</div>
    </div>
  );
}
