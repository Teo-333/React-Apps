import React from 'react';
import './SocialLink.css';

interface SocialLinkProps {
  url: string;
  iconName: string;
  path: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ url, iconName, path }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="social-link">
      <img src={path} alt={iconName} className="social-icon" />
    </a>
  );
}

export default SocialLink;
