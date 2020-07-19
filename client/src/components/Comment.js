import React, { Component } from "react";

export default class Comment extends Component {
  constructor() {
    super();
  }
  render() {
    console.log(this.props);    
    return (
      <div className="comment">
        <div className="comment-user">
          <span>{this.props.comment.username}</span>
        </div>
        <p>{this.props.comment.content}</p>
      </div>
    );
  }
}