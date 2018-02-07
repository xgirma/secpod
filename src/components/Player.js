import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Player extends Component {
	displayName = 'name';
	
	static propTypes = {};
	
	static defaultProps = {};
	
	state = {};
	
	render() {
		return (
			<div className="App-header">
				<audio
					// src="http://www.nihilus.net/soundtracks/Static%20Memories.mp3"
					autoPlay>
					Your browser does not support the <code>audio</code> element.
				</audio>
			</div>
		)
	}
}

export default Player;