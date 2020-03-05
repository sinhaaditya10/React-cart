import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./component.css";
import CartLogo from "./cart.svg";
import NavBar from "./NavBar";
export class Product extends Component {
  render() {
    return (
      <div>
        <NavBar user={this.props.match.params.user} />
        <div className="row-container" style={{ marginTop: "80px" }}>
          <div className="column-container">
            <img
              src={CartLogo}
              alt="..."
              style={{
                float: "center",
                width: "250px",
                height: "250px",
                padding: "none"
              }}
            />
          </div>
          <div className="column-container">
            <p className="display-4" style={{ textAlign: "left" }}>
              {this.props.match.params.name}
            </p>
            <p
              className="badge badge-secondary text-wrap"
              style={{
                textAlign: "left",
                // marginBottom: "60px",
                float: "left"
              }}
            >
              Product id: #{this.props.match.params.id}
            </p>
            <p
              className="display-5"
              style={{
                textAlign: "start",
                fontSize: "30px",
                color: "green",
                marginBottom: "30px",
                marginTop: "13%"
              }}
            >
              {this.props.match.params.price}
            </p>

            <button
              className="btn btn-primary btn-sm"
              style={{ float: "left" }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
