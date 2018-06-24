import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	render() {
		return (
			<div>Hello world</div>
		);
	}
}

const mountNode = document.getElementById('root');

ReactDOM.render(<App />, mountNode);
