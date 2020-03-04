import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./component.css";
import Card from "./Card";
import NavBar from "./NavBar";

class Home extends Component {
  state = {
    products: [
      {
        id: "123",
        name: "Fasttrack",
        price: "$ 500.0"
      },
      {
        id: "124",
        name: "Fasttrack",
        price: "$ 500.0"
      },
      {
        id: "125",
        name: "Fasttrack",
        price: "$ 500.0"
      },
      {
        id: "126",
        name: "Fasttrack",
        price: "$ 500.0"
      },
      {
        id: "127",
        name: "Fasttrack",
        price: "$ 500.0"
      },
      {
        id: "128",
        name: "Fasttrack",
        price: "$ 500.0"
      },
      {
        id: "129",
        name: "Fasttrack",
        price: "$ 500.0"
      }
    ]
  };
  render() {
    return (
      <div>
        <NavBar />
        <div className="row-container">
          {this.state.products.map(product => (
            <div className="column-container" key={product.id}>
              <Card product={product} key={product.id} ref={this.cardref} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
