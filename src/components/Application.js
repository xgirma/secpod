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
	  sortByDate: true,
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

	async fetchTopTenLiked() {
	  try {
	    const response = await getTenLiked();
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

	sortByLikes = (likes) => {
	  if (likes) {
	  }
	};

	sortBySelectedPod = (id) => {
	  const { playlist } = this.state;
	  const index = playlist.findIndex(pod => pod._id === id);
	  const newPlaylist = [...(playlist.slice(index)), ...(playlist.slice(0, index))];
	  this.setState({
	    playlist: newPlaylist,
	  }, () => console.log(this.state.playlist));
	};

	render() {
	  const {
	    playlist, isLoading,
	  } = this.state;

	  if (isLoading) {
	    return <p>Loading ... </p>;
	  }

	  return (
  <div className="app">
    <Header />
    <h1> Podcast on Security</h1>
    <Player playlist={playlist} />
    <TopTen playlist={playlist} onPodSelection={this.sortBySelectedPod} />
    <Footer />
  </div>
	  );
	}
}

export default Application;
