import "./styles/page1.css";
import "./styles/App.css";
import React, { Component } from "react";

class Page extends Component {
  constructor() {
    super();
    this.state = {
      userId: "",
      password: "",
      userLists: [],
    };
  }

  onChangeuserId = (event) => {
    this.setState({ userId: event.target.value });
  };

  onChangepassword = (event) => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { userId, password, userLists } = this.state;
    const { history } = this.props;
    userLists.forEach((useritem) => {
      if (userId === useritem.email && password === useritem.username) {
        localStorage.setItem("selectedUser", JSON.stringify(useritem));
        history.push("/posts");
      }
    });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          userLists: data,
        });
      });
  }

  render() {
    return (
      <div>
        <div className="login-form-container">
          <h1 className="main-headings"> WELCOME ! </h1>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              className="username-field"
              value={this.state.userId}
              name="userId"
              placeholder="user id"
              onChange={this.onChangeuserId}
            />
            <br />
            <input
              type="password"
              className="password-field"
              value={this.state.password}
              name="passWord"
              placeholder="password"
              onChange={this.onChangepassword}
            />
            <br />
            <button type="submit" className="login-button">
              Sign in
            </button>
          </form>
        </div>
        <p>Antonette</p>
      </div>
    );
  }
}
export default Page;
