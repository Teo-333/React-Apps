import React, { Component } from 'react';

class SocialLink extends Component {
  render() {
    const { url, iconName, path } = this.props;
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" className="social-link">
        <img src={path} alt={iconName} className="social-icon" />
      </a>
    );
  }
}

export default SocialLink;
