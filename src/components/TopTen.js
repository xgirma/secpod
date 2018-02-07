import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TopTen extends Component {
	displayName = 'name';
	
	static propTypes = {};
	
	static defaultProps = {};
	
	state = {};
	
	render() {
		return (
			<div className="App-TopTen">
				{"hello" + 5}
			</div>
		)
	}
}

export default TopTen;