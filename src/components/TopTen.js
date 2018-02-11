import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { playlistType } from '../type';
import { playlistDefault } from '../data/default';
import Pod from './Pod';
import './TopTen.css';

class TopTen extends Component {
	static propTypes = {
	  playlist: playlistType,
	  onPodSelection: PropTypes.func.isRequired,
	  onAutoPlay: PropTypes.func.isRequired,
	};

	static defaultProps = {
	  playlist: playlistDefault,
	};

	displayName = 'TopTen';

	render() {
	  const { playlist, onPodSelection, onAutoPlay } = this.props;

	  return (
  <div className="topTen">
    {
					playlist.map(pod => (
  <Pod
    key={pod._id}
    pod={pod}
    onPodSelection={() => onPodSelection(pod._id)}
    onAutoPlay={() => onAutoPlay(true)}
  />
					))
				}
  </div>
	  );
	}
}

export default TopTen;
