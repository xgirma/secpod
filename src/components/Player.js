import React, { Component } from 'react';
import AudioPlayer from 'react-responsive-audio-player';
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

	state = {
	  playlist: this.props.playlist,
	};

	render() {
	  let audioElement = {};
	  const playlist = this.state.playlist;
	  console.log('Playlist inside Player component', playlist);

	  return (
  <div className="player">
    <AudioPlayer
      playlist={playlist}
      conpols={['spacer', 'backskip', 'playpause', 'forwardskip', 'spacer', 'progress']}
      autoplay={false}
      style={{ position: 'relative', top: 0 }}
      audioElementRef={elem => audioElement = elem}
      onMediaEvent={{
						playing(e) {
							console.log('Playback has started', audioElement.src);
						},
						pause(e) {
							console.log('Playback was paused', audioElement.src);
						},
					}}
    />
    <div>
      <p>Playlist: {playlist[0].title}</p>
      <p>Link: {playlist[0].link}</p>
      <p>description: {playlist[0].description}</p>
      <p>owner: {playlist[0].owner_name}</p>
      <p>email: {playlist[0].owner_email}</p>
      <p>published: {playlist[0].published}</p>
      <p>likes: {playlist[0].likes}</p>
    </div>
  </div>
	  );
	}
}

export default Player;
