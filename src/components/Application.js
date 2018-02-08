import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Footer, Header, Player, TopTen } from './index';
import './Application.css';

class Application extends Component {
	static propTypes = {};

	static defaultProps = {};

	displayName = 'Application';

	state = {};

	render() {
	  return (
  <div className="app">
    <Header />
    <h1> Podcast on Security</h1>
    <Player />
    <TopTen />
    <Footer />
  </div>
	  );
	}
}

export default Application;
