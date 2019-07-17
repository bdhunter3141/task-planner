import React, { Component } from "react";

class Login extends Component {
  state = {
    password: "",
    authenticated: false,
    error: null
  };

  handleChange = e => {
    this.setState({ password: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.password === process.env.REACT_APP_PASSWORD) {
      this.props.authenticateUser();
      this.setState({ error: null });
    } else {
      this.setState({
        error: "You have entered the incorrect password. Please try again."
      });
    }
    this.setState({ password: "" });
  };

  render() {
    return (
      <div id="login-form">
        <form onSubmit={this.handleSubmit}>
          <label id="login-label">When do you want it?</label>
          <input
            type="password"
            onChange={this.handleChange}
            value={this.state.password}
          />
        </form>
        <p>{this.state.error}</p>
      </div>
    );
  }
}

export default Login;
