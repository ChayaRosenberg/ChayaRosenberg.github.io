import React from "react";
import "./Product.css";

export default function Product(props) {
  
return (
    <div className="product">
      <img src={props.image} alt="" />
      <h3 className="title">{props.title}</h3>
      <h5 className="price">Price: {props.price} NIS</h5>
      <div
        className={`inStock ${props.quantity > 0 ? "is-active" : "not-active"}`}
      >
        Quantity: {props.quantity}
      </div>
      <div
        className={`outOfStock ${
          props.quantity === 0 ? "is-active" : "not-active"
        }`}
      >
        OUT OF STOCK
      </div>
      <button
        className="addToCart"
        disabled={props.quantity === 0}
        onClick={props.onAddToCart}
      >
        {" "}
        ADD TO CART
      </button>
    </div>
  );
    }


