import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "tachyons";

class Card extends Component {
  render() {
    return (
      <Link
        to={{
          pathname: `/details/${this.props.user}/${this.props.product.id}`
        }}
      >
        <div className="grow">
          <img
            src={this.props.product.url}
            alt="..."
            style={{ width: "115px", height: "100px" }}
          />
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
