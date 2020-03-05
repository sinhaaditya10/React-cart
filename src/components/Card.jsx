import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CartLogo from "./cart.svg";
import { Link } from "react-router-dom";
import "tachyons";
class Card extends Component {
  render() {
    return (
      <Link
        to={{
          pathname: `/details/${this.props.user}/${this.props.product.id}/${this.props.product.name}/${this.props.product.price}`
        }}
      >
        <div className="grow">
          <img src={CartLogo} alt="..." style={{ width: "80px" }} />
          <p>
            <strong>{this.props.product.name}</strong>
          </p>
          <p style={{ color: "green" }}>
            <strong>{this.props.product.price}</strong>
          </p>
        </div>
      </Link>
    );
  }
}

export default Card;
