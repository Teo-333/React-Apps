import FooterBackground from '../../../assets/img/Footer-Background.svg';
import { BUTTONS, SOCIALLINKS } from '../../../constants/constants';
import Column from '../Column/Column';
import './Footer.css';
import Img from '../Img/Img';
import SocialLink from '../SocialLinks/SocialLinks';


const Footer = () => {
  return (
    <footer className="footer">
    <Img className={"footer-background"} src = {FooterBackground} />
    <div className="footer-content">
      <div className="footer-column-left">
        <Img  
          src={require("../../../assets/img/Nav-logo.svg").default} 
          alt="Navigation Logo"
          className="content-logo"
          id="logo"
        />
        <div className='content-text'>Takeaway & Delivery template</div>
        <div className='content-text'>for small - medium businesses.</div>
      </div>
      <div className="footer-column-right">
        <Column items={BUTTONS[0].firstColumn}/>
        <Column items={BUTTONS[1].secondColumn}/>
        <Column items={BUTTONS[2].thirdColumn}/>
      </div>
    </div>
    <div className="footer-social">
    <div className="footer-info">
      Built by <span className='blue'>Flowbase </span> · Powered by <span className='blue'>Webflow</span>
    </div>
    <div className="footer-links">
    {SOCIALLINKS.map((link, index) => (
        <SocialLink key={index} url={link.url} iconName={link.iconName} path={link.path} />
      ))}

    </div>
    </div>
  </footer>
  );
};



export default Footer;

