import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Footer, Header, Player, TopTen }  from './index';

class Application extends Component {
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

export default Application;