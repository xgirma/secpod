import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TopTen extends Component {
	static propTypes = {};

	static defaultProps = {};

	displayName = 'TopTen';

	state = {};

	render() {
	  return (
  <div className="topTen">
    {`Topten: ${5}`}
  </div>
	  );
	}
}

export default TopTen;
