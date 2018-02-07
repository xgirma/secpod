import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AudioPlayer from 'react-responsive-audio-player';
import './Player.css';

const playlist = [
	{
		url: 'http://benwiley4000.github.io/react-responsive-audio-player/audio/secret_of_trash_island.mp3',
		displayText: 'Trash Island'
	},
	{
		url: 'http://benwiley4000.github.io/react-responsive-audio-player/audio/marty_mcpaper_theme.mp3',
		displayText: 'Marty McPaper'
	},
	{
		url: 'http://benwiley4000.github.io/react-responsive-audio-player/audio/in_the_hall_of_the_mountain_king.mp3',
		displayText: 'Mountain King'
	}
];

class Player extends Component {
	displayName = 'name';
	
	static propTypes = {};
	
	static defaultProps = {};
	
	state = {};
	
	render() {
		let audioElement = {};
		return (
			<div className="App-Player">
				<AudioPlayer
					playlist={playlist}
					controls={['spacer', 'backskip', 'playpause', 'forwardskip', 'spacer', 'progress']}
					autoplay={true}
					style={{position: 'fixed', top: 0}}
					audioElementRef={function (elem) {
						audioElement = elem;
					}}
					onMediaEvent={{
						'playing': function (e) {
							console.log('Playback has started', audioElement.src);
						},
						'pause': function (e) {
							console.log('Playback was paused', audioElement.src);
						}
					}}
				/>
			</div>
		)
	}
}

export default Player;