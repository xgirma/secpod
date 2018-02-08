import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AudioPlayer from 'react-responsive-audio-player';
import './Player.css';

const playlist = [
  {
    id: 1,
    url: 'http://benwiley4000.github.io/react-responsive-audio-player/audio/secret_of_trash_island.mp3',
    displayText: 'Trash Island',
  },
  {
    id: 2,
    url: 'http://benwiley4000.github.io/react-responsive-audio-player/audio/marty_mcpaper_theme.mp3',
    displayText: 'Marty McPaper',
  },
  {
    id: 3,
    url: 'http://benwiley4000.github.io/react-responsive-audio-player/audio/in_the_hall_of_the_mountain_king.mp3',
    displayText: 'Mountain King',
  },
];

class Player extends Component {
	static propTypes = {};

	static defaultProps = {};

	displayName = 'Player';

	state = {
	  playlist,
	};

	render() {
	  let audioElement = {};
	  const list = this.state.playlist;
	  const listItems = list.map(song => (
  <li key={song.id}>
    {song.id}, {song.url}, {song.displayText}
  </li>));

	  return (
  <div className="player">
    <AudioPlayer
      playlist={playlist}
      controls={['spacer', 'backskip', 'playpause', 'forwardskip', 'spacer', 'progress']}
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
      <ul>{listItems}</ul>
    </div>
  </div>
	  );
	}
}

export default Player;
