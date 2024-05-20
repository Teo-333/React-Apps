import React from 'react';
import FooterBackground from '../../assets/images/Footer-Background.svg';
import { BUTTONS, SOCIALLINKS, ButtonColumn } from '../../constants/constants';
import ButtonList from '../ButtonList/ButtonList';
import SocialLink from '../SocialLink/SocialLink';
import NavLogo from '../../assets/images/Nav-logo.svg';
import './Footer.css';


const getButtonItems = (buttonColumn: ButtonColumn) => {
  if ('firstColumn' in buttonColumn) {
    return buttonColumn.firstColumn;
  } else if ('secondColumn' in buttonColumn) {
    return buttonColumn.secondColumn;
  } else if ('thirdColumn' in buttonColumn) {
    return buttonColumn.thirdColumn;
  } else {
    return [];  
  }
};

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className='footer-background'>
                <img className="footer-background-img" src={FooterBackground} alt="background" />
            </div>
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
                    {BUTTONS[0] && <ButtonList items={getButtonItems(BUTTONS[0])} />}
                    {BUTTONS[1] && <ButtonList items={getButtonItems(BUTTONS[1])} />}
                    {BUTTONS[2] && <ButtonList items={getButtonItems(BUTTONS[2])} />}
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
