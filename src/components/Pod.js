import React, { Component } from 'react';
import './Pod.css';

class Pod extends Component {
	static propTypes = {};

	static defaultProps = {};

	displayName = 'Pod';

	render() {
	  const { pod, onPodSelection } = this.props;
	  return (
  <div>
    <a onClick={() => onPodSelection(pod._id)}>
      {pod._id}. {pod.published} : {pod.displayText} : {pod.likes}
    </a>
  </div>
	  );
	}
}

export default Pod;
