import React, { Component } from 'react';
import playlistDefault from '../data/default';
import playlistType from '../type';
import './Player.css';

class Player extends Component {
	static propTypes = {
	  playlist: playlistType,
	};

	static defaultProps = {
	  playlist: playlistDefault,
	};

	displayName = 'Player';

	render() {
	  const playlist = this.props.playlist;

	  return (
  <div className="player">
    <div className="play_section">
      <div>
        <p>{playlist[0].title} | {playlist[0].owner_name}</p>
        <p>{playlist[0].description}</p>
        <p>{playlist[0].published}</p>
        <p>{playlist[0].link}</p>
        <p>likes: {playlist[0].likes}</p>
      </div>
    </div>
  </div>
	  );
	}
}

export default Player;
