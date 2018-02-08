import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Footer extends Component {
	static propTypes = {};

	static defaultProps = {};

	displayName = 'Footer';

	state = {};

	render() {
	  return (
  <div className="footer">
    {`Footer: ${5}`}
  </div>
	  );
	}
}

export default Footer;
