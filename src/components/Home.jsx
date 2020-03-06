import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./component.css";
import Card from "./Card";
import NavBar from "./NavBar";
import data from "./data/data.json";

class Home extends Component {
  render() {
    return (
      <div>
        <NavBar user={this.props.match.params.username} />
        <div className="row-container">
          {data.map(product => (
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
