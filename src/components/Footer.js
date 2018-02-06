import React, {Component} from 'react';
import PropTypes from 'prop-types';

class App extends Component {
	displayName = 'name';
	
	static propTypes = {};
	
	static defaultProps = {};
	
	state = {};
	
	render() {
		return (
			<div>
				{"hello" + 5}
			</div>
		)
	}
}

export default App;