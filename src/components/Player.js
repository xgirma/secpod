import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Player extends Component {
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

export default Player;