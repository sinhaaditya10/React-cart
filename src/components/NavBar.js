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
              className="nav-logo"
              src={CartLogo}
              alt=""
              style={{ width: "40px", height: "40px", marginTop: "5px" }}
            />
          </span>
          <span className="home-welcome">Welcome {this.props.user}</span>
        </nav>
      </div>
    );
  }
}

export default NavBar;
