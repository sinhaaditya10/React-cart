import React, { Component } from "react";
import CartLogo from "./cart.svg";
class Card extends Component {
  state = {};
  render() {
    return (
      <div className="card">
        <img src={CartLogo} alt="..." style={{ width: "50px" }} />
        <p>Product Name</p>
        <p>Product Description</p>
        <p>Price</p>
        <button className="btn btn-primary btn-sm m-2">Add To Cart</button>
      </div>
    );
  }
}

export default Card;
