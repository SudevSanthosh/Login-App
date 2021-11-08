import React, { Component } from "react";
import Header from "./Header";
import "./styles/page1.css";

class PostComments extends Component {
  constructor() {
    super();
    this.state = {
      commentsList: [],
      selectedUserPost: JSON.parse(localStorage.getItem("userPost")),
      selectedPost: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          commentsList: data,
        });
      });
  }

  filterComments(id) {
    return this.state.commentsList.filter(
      (item) => item.postId === this.state.selectedUserPost.id
    );
  }

  render() {
    const filteredComments = this.filterComments(
      this.state.commentsList.postId
    );

    return (
      <div>
        <div>
          <Header />
          <br />
          <br />
        </div>
        <div className="comments-container">
          <h2 className="main-headings">Comments !!</h2>
          {filteredComments.map((item) => (
            <div>
              <ul>
                <li>{item.body}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default PostComments;
