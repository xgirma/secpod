import React, {Component} from 'react';
import ReactPlayer from 'react-player'
import MdSubdirectoryArrowLeft from 'react-icons/lib/md/subdirectory-arrow-left';
import MdSubdirectoryArrowRight from 'react-icons/lib/md/subdirectory-arrow-right';
import playlistDefault from '../data/default';
import playlistType from '../type';
import './Player.css';

class Player extends Component {
	displayName = 'Player';
	
	static propTypes = {
		playlist: playlistType,
	};
	
	static defaultProps = {
		playlist: playlistDefault,
	};
	
	state = {
		nowPlaying: this.props.playlist[0].url
	};
	
	handleBack = () => {
		const { playlist, onPodSelection, onAutoPlay } = this.props;
		onPodSelection(playlist[9]._id);
		onAutoPlay(true);
	};
	
	handleForward = () => {
		const { playlist, onPodSelection, onAutoPlay } = this.props;
		onPodSelection(playlist[1]._id);
		onAutoPlay(true);
	};
	
	render() {
		const { playlist, autoPlay } = this.props;
		const nowPlaying = playlist[0];
		
		return (
			<div className="player">
				<div>
					<div className="media-player">
						<div className="navigation">
							<a onClick={this.handleBack}>
								<MdSubdirectoryArrowLeft/>
							</a>
						</div>
						<ReactPlayer
							url={this.props.playlist[0].url}
							playing={autoPlay}
							controls={true}
						/>
						<div className="navigation">
							<a onClick={this.handleForward}>
								<MdSubdirectoryArrowRight/>
							</a>
						</div>
					</div>
					<div className="social-player">
						<p><b>{nowPlaying.displayText}</b></p>
					</div>
				</div>
			</div>
		);
	}
}

export default Player;
