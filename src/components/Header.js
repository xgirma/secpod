import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
	displayName = '';
	
	static propTypes = {};
	
	static defaultProps = {};
	
	state = {};
	
	render () {
		return (
			<div className="App-header">
				<h4> Home | Playlist | List </h4>
			</div>
		)
	}
}

export default Header;