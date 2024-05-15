import React from 'react';

import FooterBackground from '../../assets/images/Footer-Background.svg';
import { BUTTONS, SOCIALLINKS } from '../../constants/constants';
import ButtonList from '../ButtonList/ButtonList';
import SocialLink from '../SocialLink/SocialLink';
import NavLogo from '../../assets/images/Nav-logo.svg';

import './Footer.css';


function Footer() {
  return (
    <footer className="footer">
      <img className="footer-background" src={FooterBackground} alt="background" />
      <div className="footer-content">
        <div className="footer-column-left">
          <img 
            src={NavLogo} 
            alt="Navigation Logo" 
            className="content-logo" 
            id="logo"
          />
          <div className="content-text">Takeaway & Delivery template</div>
          <div className="content-text">for small - medium businesses.</div>
        </div>
        <div className="footer-column-right">
          <ButtonList items={BUTTONS[0].firstColumn} />
          <ButtonList items={BUTTONS[1].secondColumn} />
          <ButtonList items={BUTTONS[2].thirdColumn} />
        </div>
      </div>
      <div className="footer-social">
        <div className="footer-info">
          Built by <span className="blue">Flowbase </span>· Powered by <span className="blue">Webflow</span>
        </div>
        <div className="footer-links">
          {SOCIALLINKS.map((link, index) => (
            <SocialLink key={link.iconName + "-key"} url={link.url} iconName={link.iconName} path={link.path} />
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
