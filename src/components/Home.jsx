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
        name: "Fastrack Men Black Analogue Watch NK3120SM02",
        price: "Rs. 11695.00"
      },
      {
        id: "124",
        name: "OnePlus 7T",
        price: "Rs. 34,999.00"
      },
      {
        id: "125",
        name: "Meow Meow Women's Artificial Leather Tote Handbag (Pink)",
        price: "Rs. 349.00"
      },
      {
        id: "126",
        name: "Apple AirPods Pro",
        price: "Rs. 24,900.00"
      },
      {
        id: "127",
        name:
          "Canon EOS 1500D 24.1 Digital SLR Camera (Black) with EF S18-55 is II Lens, 16GB Card and Carry Case",
        price: "Rs. 24,990.00"
      },
      {
        id: "128",
        name: "Reebok Men's Ultra Lite Running Shoes",
        price: "Rs. 1,599.00"
      },
      {
        id: "129",
        name: "Mi Smart Band 4",
        price: "Rs. 2,299.00"
      }
    ]
  };
  async componentDidMount() {
    if (this.props.match.params) {
      console.log(this.props.match.params);
    } else {
      console.log("Nothing");
    }
  }
  render() {
    return (
      <div>
        <NavBar user={this.props.match.params.username} />
        <div className="row-container">
          {this.state.products.map(product => (
            <div className="column-container" key={product.id}>
              <Card
                user={this.props.match.params.username}
                product={product}
                key={product.id}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
