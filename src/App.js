import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home.jsx";
import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Route exact path="/" render={() => <Login />} />
      <Route path="/home" render={() => <Home />} />
    </div>
  );
}

export default App;
