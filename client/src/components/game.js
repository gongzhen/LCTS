import React, { Component } from 'react';
import Board from './board';
import calculateWinner from './calculateWinner';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      stepNumber: 0,
      xIsNext: true
    };
  }

  handleClick(i) { 
    const history = this.state.history.slice(0, this.state.stepNumber + 1);  
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    } 
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([
        {
          squares: squares
        }
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext      
    });
  }

  resetGame() {
    this.setState({
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      stepNumber: 0,
      xIsNext: true
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];

    const moves = history.map((squares, indexStep) => {
      const desc = indexStep ? 'Go to move #' + indexStep : 'Go to move start';
      return(
        <li key={indexStep}>
          <button onClick={()=>this.jumpTo(indexStep)}>{desc}</button>
        </li>
      );
    });

    let status;
    const winner = calculateWinner(current.squares);
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }
    // onClick will be child class's props name.
    // handleClick will take the number as the index of squares.
    // props.oncClick(i)
    return (
      <div className="game">
        <div className="game-board">
          <Board 
            squares = {current.squares}
            onClick={(i) => {this.handleClick(i)}}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <div>{moves}</div>      
        </div>
        <div className="game-info">
          <button onClick={() => this.resetGame()}>Restart</button>
        </div>
      </div>
    );
  }
}