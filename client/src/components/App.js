import React from 'react';
import ReactDOM from 'react-dom';
import { reduceEachLeadingCommentRange } from 'typescript';

const appState = {
  head: {
    text: 'Header',
    color: 'red'
  },
  body: {
    text: 'Body',
    color: 'green'
  }
}

class Header extends React.Component {
  render() {  
    return (
      <div>header</div>
    );
  }
}

class Body extends React.Component {
  render() {
    return (
      <div>body</div>
    );
  }
}

class App extends React.Component {
  render() {
    return [
      <Header />,
      <Body />
    ];
  }
}

export default App;

