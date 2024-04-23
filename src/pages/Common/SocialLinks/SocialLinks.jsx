import React from 'react';

const SocialLink = ({ url, iconName, path }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="social-link">
      <img src={path} alt={iconName} className="social-icon" />
    </a>
  );
};

export default SocialLink;
