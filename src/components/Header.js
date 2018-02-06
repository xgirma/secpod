import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
	displayName = '';
	
	static propTypes = {};
	
	static defaultProps = {};
	
	state = {};
	
	render () {
		return (
			<div>
				{ "hello" + 5 }
			</div>
		)
	}
}

export default Header;