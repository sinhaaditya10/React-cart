import React, { Component } from "react";
import NavBar from "./NavBar";
class Cart extends Component {
  render() {
    return (
      <div>
        <NavBar user={this.props.match.params.user} />
        <div className="container">Hello</div>
      </div>
    );
  }
}
export default Cart;
