import React, {Component} from 'react';
import ReactPlayer from 'react-player'
import MdSubdirectoryArrowLeft from 'react-icons/lib/md/subdirectory-arrow-left';
import MdSubdirectoryArrowRight from 'react-icons/lib/md/subdirectory-arrow-right';
import TiSocialFacebook from 'react-icons/lib/ti/social-facebook';
import TiSocialTwitter from 'react-icons/lib/ti/social-twitter';
import MdThumbUp from 'react-icons/lib/md/thumb-up';
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
	
	state = {
		nowPlaying: this.props.playlist[0].url
	};
	
	displayName = 'Player';
	
	render() {
		const {playlist, autoPlay} = this.props;
		const nowPlaying = playlist[0];
		
		console.log('this.props.autoPlay: ', this.props);
		
		return (
			<div className="player">
				<div>
					<div className="media-player">
						<div className="navigation">
							<MdSubdirectoryArrowLeft/>
						</div>
						<ReactPlayer
							url={this.props.playlist[0].url}
							playing={autoPlay}
							controls={true}
						/>
						<div className="navigation">
							<MdSubdirectoryArrowRight/>
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
