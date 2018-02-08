import React, { Component } from 'react';
import { getRecentTen, getTenLiked } from '../api/api';
import { Footer, Header, Player, TopTen } from './index';
import playlistDefault from '../data/default';
import './Application.css';

class Application extends Component {
	displayName = 'Application';

	state = {
	  playlist: playlistDefault,
	  isLoading: false,
	  error: null,
	};

	componentDidMount() {
	  this.setState({
	    isLoading: true,
	  });
	  this.fetchRecentTen();
	}

	async fetchRecentTen() {
	  try {
	    const response = await getRecentTen();
		  this.setState({
			  playlist: response,
			  isLoading: false,
		  });
	  } catch (err) {
	  	this.setState({
			  error: err,
			  isLoading: false,
		  });
	  }
	}

	render() {
	  const { playlist, isLoading, error } = this.state;
	  if (isLoading) {
	    return <p>Loading ... </p>;
	  }

	  return (
  <div className="app">
    <Header />
    <h1> Podcast on Security</h1>
    <Player playlist={playlist} />
    <TopTen />
    <Footer />

  </div>
	  );
	}
}

export default Application;
