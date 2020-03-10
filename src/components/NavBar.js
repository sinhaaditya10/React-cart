import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./component.css";
import CartLogo from "./cart.svg";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { Redirect } from "react-router-dom";

export class NavBar extends Component {
  state = {
    session: true,
    cartActive: false
  };
  logOut = () => {
    this.setState({ session: false });
  };
  cartClicked = () => {
    this.setState({ cartActive: true });
  };
  render() {
    if (!this.state.session) {
      return <Redirect to="/" />;
    }
    if (this.state.cartActive) {
      return <Redirect push to={`/cart/${this.props.user}`} />;
    }
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
          <div className="cart-button">
            <button
              className="btn btn-secondary btn-sm m-2"
              style={{
                backgroundColor: "transparent",
                width: "60px",
                float: "right"
              }}
              onClick={this.cartClicked}
            >
              Cart
            </button>
          </div>
          <DropdownButton
            id="dropdown-basic-button"
            title={`Welcome ${this.props.user} `}
            style={{ textDecorationColor: "black" }}
          >
            <Dropdown.Item href="#" onClick={this.logOut}>
              Log out
            </Dropdown.Item>
          </DropdownButton>
        </nav>
      </div>
    );
  }
}

export default NavBar;
