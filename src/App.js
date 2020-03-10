import React from "react";
import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home.jsx";
import Product from "./components/Product.jsx";
import Cart from "./components/Cart.jsx";
import { Route } from "react-router-dom";

function App(props) {
  return (
    <div>
      <Route exact path="/" render={() => <Login />} />
      <Route path="/home/:username" component={Home} name="home" />
      <Route path="/cart/:user" component={Cart} name="cart" />
      <Route path="/details/:user/:id" component={Product} name="product" />}
    </div>
  );
}

export default App;
