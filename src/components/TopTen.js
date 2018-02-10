import React, { Component } from 'react';
import playlistType from '../type';
import playlistDefault from '../data/default';
import Pod from './Pod';
import './TopTen.css';

class TopTen extends Component {
	static propTypes = {
	  playlist: playlistType,
	};

	static defaultProps = {
	  playlist: playlistDefault,
	};

	displayName = 'TopTen';

	render() {
	  const { playlist, onPodSelection } = this.props;

	  return (
  <div className="topTen">
    {
					playlist.map(pod => (
  <Pod
    key={pod._id}
    pod={pod}
    onPodSelection={() => onPodSelection(pod._id)}
  />
					))
				}
  </div>
	  );
	}
}

export default TopTen;
