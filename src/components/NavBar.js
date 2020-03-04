import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./component.css";
import CartLogo from "./cart.svg";

export class NavBar extends Component {
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
      </div>
    );
  }
}

export default NavBar;
