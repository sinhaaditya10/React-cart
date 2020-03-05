import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginLogo from "./account.svg";
import "./component.css";
import { Link } from "react-router-dom";
//import Home from "./Home";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  render() {
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
            <form>
              <input
                type="text"
                placeholder="Email Address"
                name="email"
                size="40"
                style={{
                  marginBottom: "20px",
                  marginTop: "20px",
                  marginLeft: "15%"
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
                style={{ marginBottom: "20px", marginLeft: "15%" }}
                onChange={event =>
                  this.setState({ password: event.target.value })
                }
              />
              <br />
              <Link to={`/home/${this.state.username.split("@")[0]}`}>
                <button
                  className="btn btn-primary btn-sm"
                  style={{
                    width: "120px",
                    marginLeft: "35%",
                    marginBottom: "20px"
                  }}
                >
                  Login
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
