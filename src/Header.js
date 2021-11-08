import React, { Component } from "react";
import "./styles/page1.css";
import "./styles/App.css";
import { useHistory, withRouter } from "react-router-dom";

class Header extends Component {
  constructor() {
    super();
    this.state = {};
  }
  signOut = (e) => {
    this.props.history.push("/");
    localStorage.removeItem("selectedUser");
  };

  viewProfile = (e) => {
    this.props.history.push("/Details");
  };
  viewPosts = (e) => {
    this.props.history.push("/Posts");
  };

  render() {
    const user = JSON.parse(localStorage.getItem("selectedUser"));
    return (
      <div className="header-components">
        <button onClick={(e) => this.signOut(e)} className="signout-button">
          Log out
        </button>
        <button
          onClick={(e) => this.viewProfile(e)}
          className="viewprofile-button"
        >
          {user.name}
        </button>
        <button onClick={(e) => this.viewPosts(e)} className="viewposts-button">
          My Posts
        </button>
      </div>
    );
  }
}
export default withRouter(Header);
