import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./component.css";
import NavBar from "./NavBar";
import data from "./data/data.json";

export class Product extends Component {
  state = {
    id: "",
    name: "",
    price: "",
    buttonText: "Add to Cart",
    buttoncolor: "primary"
  };
  componentDidMount() {
    data.map(product => {
      if (product.id === this.props.match.params.id) {
        this.setState({
          id: product.id,
          name: product.name,
          price: product.price,
          url: product.url
        });
        console.log(product.url);
      }
    });
  }
  productAdded = () => {
    console.log("Product Added");
    this.setState({ buttonText: "Item Added", buttoncolor: "grey" });
  };
  render() {
    return (
      <div>
        <NavBar user={this.props.match.params.user} />
        <div className="row-container" style={{ marginTop: "80px" }}>
          <div className="column-container">
            <img
              src={this.state.url}
              alt="..."
              style={{
                float: "center",
                width: "300px",
                height: "300px",
                padding: "none"
              }}
            />
          </div>
          <div className="column-container">
            <p className="display-4" style={{ textAlign: "left" }}>
              {this.state.name}
            </p>
            <p
              className="badge badge-secondary text-wrap"
              style={{
                textAlign: "left",
                // marginBottom: "60px",
                float: "left"
              }}
            >
              Product id: #{this.state.id}
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
              {this.state.price}
            </p>

            <button
              className="btn btn-primary btn-sm"
              style={{
                float: "left",
                backgroundColor: `${this.state.buttoncolor}`
              }}
              onClick={this.productAdded}
            >
              {this.state.buttonText}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
