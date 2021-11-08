import React, { Component } from "react";
import "./styles/App.css";
import "./styles/page1.css";
import Header from "./Header";
export default class Details extends Component {
  render() {
    const userArray = JSON.parse(localStorage.getItem("selectedUser"));
    return (
      <div>
        <Header />
        <br /> <br />
        <div>
          <div className="user-details">
            <h2 className="main-headings">Your Profile</h2>
            <h3>Username : {userArray.username}</h3>
            <h3>Mail ID : {userArray.email}</h3>
            <h3>Ph No : {userArray.phone}</h3>
            <h3>Website : {userArray.website}</h3>
            <h3>
              Company : {userArray.company.name},{" "}
              {userArray.company.catchPhrase}
            </h3>
            <h3>
              Address : {userArray.address.street}, {userArray.address.city},
              {userArray.address.suite}, {userArray.address.zipcode}{" "}
            </h3>
          </div>
        </div>
      </div>
    );
  }
}
