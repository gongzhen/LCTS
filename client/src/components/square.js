import React, { Component } from 'react';


export default class Square extends React.Component {
  // TODO: remove the constructor
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    // TODO: use onClick={this.props.onClick}
    // TODO: replace this.state.value with this.props.value
    return (
      <button
        className="square"
        onClick={() => this.props.onClick()}
      >
        {this.props.value}
      </button>
    );
  }
}


// export function components.
// export default function Square(props) {
//   return (
//     <button className="square" onClick={props.onClick}>
//       {props.value}
//     </button>
//   );
// }