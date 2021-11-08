import "./styles/App.css";
import React, { Component } from "react";
import Page from "./LoginPage";
import Details from "./Details";
import Posts from "./Posts";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import PostComments from "./PostComments";

function ProtectedRoute(props) {
  const userAuth = JSON.parse(localStorage.getItem("selectedUser"));
  if (
    userAuth &&
    userAuth.username &&
    userAuth.username.length > 0 &&
    userAuth.email
  ) {
    return <Route {...props} />;
  } else {
    return <Redirect to="/" />;
  }
}

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Page}></Route>
          <ProtectedRoute
            exact
            path="/details"
            component={Details}
          ></ProtectedRoute>
          <ProtectedRoute
            exact
            path="/posts"
            component={Posts}
          ></ProtectedRoute>
          <ProtectedRoute
            exact
            path="/post-comments"
            component={PostComments}
          ></ProtectedRoute>
        </Switch>
      </Router>
    );
  }
}
export default App;
