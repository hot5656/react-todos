// Counter.js
import React from 'react';

class Test extends React.Component {
	// componentDidMount : mount
	componentDidMount() {
		console.log('test mount')
	}

	// componentWillUnmount : before unmount(not render the component)
	componentWillUnmount() {
		console.log('test umount')
	}
	render() {
		return <div>123</div>
	}
}

// export default class Counter extends React.PureComponent {
// PureComponent : same as memo(props 有變動才update)
export default class Counter extends React.Component {
	constructor(props) {
		super(props)
		// add state
		this.state = {
			counter: 1
		};
		console.log('constructor')
	}

	// shouldComponentUpdate : return false not update
	shouldComponentUpdate(nextProps, nextState) {
		if (nextState.counter > 5) return false;
		return true;
	}

	// componentDidMount : mount
	componentDidMount() {
		console.log('did mount', this.state)
	}

	// componentDidUpdate : update 
	componentDidUpdate(prevProps, prevState) {

		console.log('update prevState:', prevState)
	}

	// componentWillUnmount : before unmount(not render the component)
	componentWillUnmount() {
		console.log('unmount')
	}

	compont


	handleClick= () => {
		this.setState({
			counter: this.state.counter + 1
		})
	}

	render () {
		// add state
		const { counter} = this.state;
		console.log('render')
		return (
			<div>
				<button onClick={this.handleClick}>+1</button>
				counetr: {counter}
				{counter === 1 && <Test />}
			</div>
		)
	}
}