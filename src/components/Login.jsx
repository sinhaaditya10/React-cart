import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginLogo from "./account.svg";
import "./component.css";
import { Redirect } from "react-router-dom";

class Login extends Component {
  state = {
    username: "",
    password: "",
    error: "",
    isHidden: false,
    loggedIn: false
  };
  constructor(props) {
    super(props);
  }
  onLoginClick() {
    if (
      this.state.username === "sinhaaditya10@gmail.com" &&
      this.state.password === "12345"
    ) {
      this.setState({ loggedIn: true });
      localStorage.setItem("token", "comviva2020");
    } else {
      this.setState({
        isHidden: true,
        error: "Username/Password is incorrect. Try again.",
        loggedIn: false
      });
    }
  }
  render() {
    if (this.state.loggedIn) {
      return <Redirect to={`/home/${this.state.username.split("@")[0]}`} />;
    }
    return (
      <div>
        <div className="login-header">
          <img src={LoginLogo} alt="" />
          <h3>Sign In</h3>
        </div>

        <div
          className="card-group"
          style={{
            maxWidth: "500px",
            marginLeft: "auto",
            marginRight: "auto"
          }}
        >
          <div className="card">
            <span className="error-message">{this.state.error}</span>
            <input
              type="text"
              placeholder="Email Address"
              name="email"
              size="40"
              style={{
                marginBottom: "20px",
                marginTop: "30px",
                marginLeft: "13%",
                marginRight: "13%"
              }}
              onChange={event =>
                this.setState({ username: event.target.value })
              }
            />
            <br />
            <input
              type="password"
              size="40"
              placeholder="Password"
              name="password"
              style={{
                marginBottom: "20px",
                marginLeft: "13%",
                marginRight: "13%"
              }}
              onChange={event =>
                this.setState({ password: event.target.value })
              }
            />
            <br />
            <button
              className="btn btn-primary btn-sm"
              style={{
                width: "120px",
                marginLeft: "35%",
                marginBottom: "20px"
              }}
              onClick={this.onLoginClick.bind(this)}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
