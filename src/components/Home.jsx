import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./component.css";
import CartLogo from "./cart.svg";
import Card from "./Card";

class Home extends Component {
  state = {
    products: [
      {
        id: "123",
        name: "Fasttrack",
        price: "$ 500.0"
      },
      {
        id: "123",
        name: "Fasttrack",
        price: "$ 500.0"
      },
      {
        id: "123",
        name: "Fasttrack",
        price: "$ 500.0"
      }
    ]
  };
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <span className="home-logo">
            React
            <img
              src={CartLogo}
              alt=""
              style={{ width: "40px", height: "40px" }}
            />
          </span>
          <span className="home-welcome">Welcome Home</span>
        </nav>
        <div className="container"></div>
      </div>
    );
  }
}

export default Home;
