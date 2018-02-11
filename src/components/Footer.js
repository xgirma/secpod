import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Footer.css';

class Footer extends Component {
	static propTypes = {};

	static defaultProps = {};

	displayName = 'Footer';

	state = {};

	render() {
	  return (
  <div className="footer">
	  {'Contact Us: Follow us'}
  </div>
	  );
	}
}

export default Footer;
