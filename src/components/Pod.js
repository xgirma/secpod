import React, { Component } from 'react';
import moment from 'moment';
import './Pod.css';

class Pod extends Component {
	static propTypes = {};

	static defaultProps = {};

	displayName = 'Pod';
	
	handleClick = () => {
		const { pod, onPodSelection, onAutoPlay} = this.props;
		onPodSelection(pod._id);
		onAutoPlay();
	};

	render() {
	  const { pod } = this.props;
	  const published = moment(pod.published).format("MMM DD YY");
	  return (
  <div className="pod">
    <a onClick={this.handleClick} id="pod_pod">
	    <div className="date_pod">
		    <b>{published} </b>
	    </div>
	    <div className="episode_title_pod">
		    {pod.displayText} <b>{pod.duration}</b>
	    </div>
    </a>
  </div>
	  );
	}
}

export default Pod;
