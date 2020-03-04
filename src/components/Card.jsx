import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CartLogo from "./cart.svg";
import { Link } from "react-router-dom";
import "tachyons";
function Card(props) {
  return (
    <Link
      to={{
        pathname: "/details"
      }}
    >
      <div className="grow">
        <img src={CartLogo} alt="..." style={{ width: "80px" }} />
        <p>
          <strong>{props.product.name}</strong>
        </p>
        <p style={{ color: "green" }}>
          <strong>{props.product.price}</strong>
        </p>
      </div>
    </Link>
  );
}

export default Card;
