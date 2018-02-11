import React, { Component } from 'react';
import TiSocialFacebook from 'react-icons/lib/ti/social-facebook';
import TiSocialTwitter from 'react-icons/lib/ti/social-twitter';
import MdThumbUp from 'react-icons/lib/md/thumb-up';
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
