import React, { Component } from "react";
import CommentInput from './CommentInput';
import CommentList from './CommentList';

export default class CommentApp extends React.Component {

  constructor() {
    super();
    this.state = {
      comments: []
    }
  }

  // callback function from CommentInput
  handleSubmitComment(comment) {
    if (comment === undefined || !comment) {
      return;
    }
    if (!comment.username) {
      return alert('Input user name');
    }
    if (!comment.content) {
      return alert('Input comment');
    }
    this.state.comments.push(comment);
    console.log(comment);
    this.setState({
      comments: this.state.comments
    });
  }
  render() {
    return (
      <div className='wrapper'>  
        <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
        <CommentList comments={this.state.comments}/>
      </div>);
  }
}
