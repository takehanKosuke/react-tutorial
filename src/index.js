import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';


function Square(props) {
  return (
    <button className="square" onClick={() => props.onClick()}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     squares: Array(9).fill(null),
  //     isNext: true,
  //   }
  // }
  renderSquare(i) {
    return <Square value={this.props.squares[i]} onClick={() => this.props.onClick(i)} />;
  }
  //
  // handleCleck(i) {
  //   const squares = this.state.squares.slice();
  //   if (calculateWinner(squares) || squares[i]){
  //     return;
  //   }
  //   squares[i] = this.state.isNext ?  "○" :　"☓";
  //   this.setState({
  //     squares: squares,
  //     isNext: !this.state.isNext,
  //   });
  // }

  render() {
    const winner = calculateWinner(this.props.squares)
    let status;
    if (winner) {
      status = "winer" + winner;
    } else {
      status = "次は" + (this.props.isNext ?  "○" :　"☓") + "の番です";
    }
    return (
      <div>
        <div className="status">{status}</div>
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

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      isNext: true
    };
  }



  handleCleck(i) {
    var history = this.state.history;
    var current = history[history.length - 1];
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]){
      return;
    }
    squares[i] = this.state.isNext ?  "○" :　"☓";
    this.setState({
      squares: squares,
      isNext: !this.state.isNext,
    });
  }


  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board
              squares={ this.state.history[this.state.history.length - 1] }
              onClick={(i)=> this.handleCleck(i)}
            />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('container')
);

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
