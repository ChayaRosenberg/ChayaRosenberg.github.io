import React, { Component } from "react";
import Product from "./Product";
import { products } from "./products.mock";
import "./Products.css";
import Cart from "./Cart";
import { Slider } from "antd";

export default class Products extends Component {
  state = {
    products,
    cartProducts: 0,
    min: 0,
    max: 0,
    flag:false,
  };

  pricelist = products.map((o) => o.price);
  rangeMin = Math.min(...this.pricelist);
  rangeMax = Math.max(...this.pricelist);

  range = (value) => {
    this.setState({ min: value[0], max: value[1] });
    console.log(this.state.min, this.state.max);
  };

  filteredArray = (products) => {
      return products.filter(
      (product) =>
        product.price >= this.state.min && product.price <= this.state.max
    );
  };

  addToCart = (product) => {
    if (product.quantity > 0) {
      this.setState({ cartProducts: this.state.cartProducts + 1 });
      this.setState((state) => {
        return {
          products: state.products.map((i) =>
            i.title === product.title ? { ...i, quantity: i.quantity - 1 } : i
          ),
        };
      });
    }
  };

  render() {
    const { products, cartProducts } = this.state;
    return (
      <div className="productsContainer">
        Price Range{" "}
        <Slider
          className="slider"
          range
          defaultValue={[this.rangeMin, this.rangeMax]}
          min={this.rangeMin}
          max={this.rangeMax}
          onChange={this.range}
        />
        <Cart cartProducts={cartProducts} />
        {this.filteredArray(products).map((product, productIndex) => (
          <Product
            key={productIndex}
            image={product.image}
            title={product.title}
            price={product.price}
            quantity={product.quantity}
            onAddToCart={() => this.addToCart(product)}
          />
        ))}
      </div>
    );
  }
}
