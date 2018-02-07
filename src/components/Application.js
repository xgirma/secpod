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
			<div className="App">
				<Header/>
				<h1> Podcast on Security</h1>
				<Player/>
				<TopTen/>
				<Footer/>
			</div>
		)
	}
}

export default Application;