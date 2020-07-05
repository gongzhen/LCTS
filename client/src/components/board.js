import React, { Component } from 'react';
import Square from './square';

export default class Board extends React.Component {

  constructor(props) {
    super(props);
    console.log(props.onClick);
    // there are two props:
    // squares is array and length is 9
    // onClick: i => this.handleClick(i);
    // function(i) {
    //    this.handleClick(i) 
    // }    
  }

  renderSquare(i) {
    // props: squares amd onClick
    // squares from game and it will pass to Square with index i.
    // this.props.onClick is
    // i => this.handleClick(i)
    // which is function(i) { this.handleClick(i) }
    // onClick(i) => function(i) {this.handleClick(i)}
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );   
  }
  
  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
