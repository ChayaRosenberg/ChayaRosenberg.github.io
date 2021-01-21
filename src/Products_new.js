import React, { useState } from "react";
import Product from "./Product";
import productsMock from "./products.mock";
import "./Products.css";
import Cart from "./Cart";

export default function Products(props) {
  const [products, setProducts] = useState(productsMock);
  const [cartProducts, setCartProducts] = useState(0);

  const addToCart = (product) => {
    if (product.quantity > 0) {
      setCartProducts(cartProducts + 1);
      setProducts((products) => {
        return products.map((i) =>
            i.title === product.title ? { ...i, quantity: i.quantity - 1 } : i
          )
      });
    }
  };

  return (
    <div className="productsContainer">
      <Cart cartProducts={cartProducts} />
      {products.map((product, productIndex) => (
        <Product
          key={productIndex}
          image={product.image}
          title={product.title}
          quantity={product.quantity}
          onAddToCart={() => addToCart(product)}
        />
      ))}
    </div>
  );
}
