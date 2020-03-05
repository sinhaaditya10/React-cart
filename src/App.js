import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home.jsx";
import Product from "./components/Product.jsx";
//import Card from "./components/Card.jsx";
import { Route } from "react-router-dom";

function App(props) {
  return (
    <div>
      <Route exact path="/" render={() => <Login />} />
      <Route path="/home/:username" component={Home} name="home" />
      <Route
        path="/details/:user/:id/:name/:price"
        component={Product}
        name="product"
      />
      }
    </div>
  );
}

export default App;
