import React, {Component} from 'react';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			text: 'Server-Side Rendering!!!!'
		}
	}

	componentDidMount(){
		this.setState({
			text : 'Client Loaded'
		})
	}

	render() {
		return (
			<div>
				<h1>{this.state.text}</h1>
			</div>
		);
	}
}

export default App;
