// index.js
import React from 'react';
import ReactDOM from 'react-dom';
// add propTypes
import PropTypes from "prop-types";

// class Square extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: null,
//     };
//   }

//   render() {
//     return (
//       <button
//         className="square"
//         onClick={() => this.props.onClick()}
//       >
//         {this.props.value}
//       </button>
//     );
//   }
// }

// change to function component
function Square(props) {
	return (
		<button classNmae="square" onClick={props.onClick} >
			{props.value}
		</button>
	);
}

// add propTypes
Square.propTypes = {
	onClick: PropTypes.func,
	value: PropTypes.string
};

class Board extends React.Component {
  
  // handleClick (i) {
	// 	const squares = this.state.squares.slice();
	// 	squares[i] = this.state.xIsNext ? 'X' : 'O';
	// 	this.setState({
	// 		squares:squares,
	// 		xIsNext: !this.state.xIsNext
	// 	});
  // }
  
  renderSquare(i) {
    return (
          <Square 
             value={this.props.squares[i]} 
             onClick = {() => this.props.onClick(i)}
          />
    );
  }

  render() {
		// const winner = calculateWinner(this.state.squares);
		// let status;
		// if ((!winner) || (winner === '_')) {
		// 	status = 'Next player : ' + (this.state.xIsNext ? 'X' : 'O');
		// }
		// else {
		// 	status = "Winner : " + winner;
		// }


    return (
      <div>
        {/* <div className="status">{status}</div> */}
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

// add propTypes
Board.propTypes = {
	squares: PropTypes.object,
	onClick: PropTypes.func
};

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
				squares: Array(9).fill('_')
		}],
		stepNumber: 0,
		xIsNext: true
    };
  }

  handleClick (i) {
		const history = this.state.history.slice(0, this.state.stepNumber + 1);
		const current = history[history.length-1];
		const squares = current.squares.slice();
		const winner = calculateWinner(current.squares);

		if ((winner === 'X') || (winner === 'O') || (squares[i] !== '_')) {
			return;
		}

		squares[i] = this.state.xIsNext ? 'X' : 'O';
		this.setState({
			history: history.concat([{
				squares: squares
			}]),
			stepNumber: history.length,
			xIsNext: !this.state.xIsNext
		});
  }

	jumpTo(step) {
		this.setState({
			stepNumber: step,
			xIsNext: (step % 2 ) === 0
		});
	};

  render() {
		const history = this.state.history;
		const current = history[this.state.stepNumber];
		const winner = calculateWinner(current.squares);
		const moves = history.map((item,index) =>{
			const desc = index ?
				'Go to move #' + index :
				"Go to game start";
			return (
				<li key={index}>
					<button onClick={() => this.jumpTo(index)}>{desc}</button>
				</li>
			);
		});

		let status;
		if ((!winner) || (winner === '_')) {
			status = 'Next player : ' + (this.state.xIsNext ? 'X' : 'O');
		}
		else {
			status = "Winner : " + winner;
		}		
    return (
      <div className="game">
        <div className="game-board">
					<div>{status}</div>
          <Board 
						squares={current.squares}
						onClick={(i)=>this.handleClick(i)}
					/>
        </div>
        <div className="game-info">
          <div>{/*status*/}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
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
