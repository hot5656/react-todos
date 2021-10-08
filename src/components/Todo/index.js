// index.js
import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {date: new Date()};
		console.log('constructor');
	}

	componentDidMount() {
		this.timerId = setInterval(
			() => this.tick(), 1000);
		
			console.log('componentDidMount');
	}

	componentWillUnmount() {
		clearInterval(this.timeId);
	}

	tick() {
		this.setState({
			date: new Date()
		});
		
		console.log('tick');
	}

	render() {
		return (
			<div>
				<h1>Hello, world!</h1>
				{/* <h2>It is {this.state.date}</h2> */}
				<h2>It is {this.state.date.toLocaleTimeString()}.</h2>
				{/* this.state.date.toLocaleTimeString() */}
			</div>
		);
	}
}

ReactDOM.render(
	<Clock />,
  document.getElementById('root')
);

