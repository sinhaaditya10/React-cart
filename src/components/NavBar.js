import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./component.css";
import CartLogo from "./cart.svg";

export class NavBar extends Component {
  showCart() {}
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <div className="home-logo">
            React
            <img
              src={CartLogo}
              alt=""
              style={{
                width: "40px",
                height: "40px",
                marginTop: "5px",
                marginBottom: "0px"
              }}
            />
          </div>
          <div>
            <a href="#" style={{ marginLeft: "900px", color: "white" }}>
              Cart
            </a>
          </div>
          <div className="home-welcome">
            <span>Welcome {this.props.user}</span>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
