import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./component.css";
import Card from "./Card";
import NavBar from "./NavBar";
import data from "./data/data.json";
import { Redirect } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token");
    let loggedIn = true;
    if (token === null) {
      loggedIn = false;
    }
    this.state = {
      loggedIn
    };
  }
  render() {
    if (!this.state.loggedIn) {
      return <Redirect to="/" />;
    }
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
