import React,{useState} from 'react';
import './Header.css';
import { BUTTONS } from '../../../constants/constants.js';
import Img from "../Img/Img.jsx";


const Header = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [logoAnimation, setLogoAnimation] = useState(''); 
  const [itemCount, setItemCount] = useState(0); 

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);

    if (logoAnimation === '' || logoAnimation === 'logo-animate-back') {
      setLogoAnimation('logo-animate');
    } else {
      setLogoAnimation('logo-animate-back');
    }
  };


    const incrementItemCount = () => {
      setItemCount(prevCount => prevCount + 1); 
    };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Img  
          src={require('../../../assets/img/Nav-logo.svg').default} 
          alt="Navigation Logo"
          onClick={toggleHamburger}
          className={logoAnimation}
          id="logo-button"
        />
      </div>
  
      <div className={`navbar-links ${hamburgerOpen ? 'visible' : ''}`}>
        {BUTTONS[3].navBar.map((button, index) => { 
            return <a key={index} id ={`nav-link-`+index} href={`/${button.toLowerCase()}`} className="nav-link">{button}</a>;
        })}
      </div>

      <button className="navbar-cart" onClick={incrementItemCount}>
      <Img  
        src={require('../../../assets/img/Nav-shopping-cart.svg').default} 
        alt="Cart Icon" 
        className={"cart-icon"}
      />
      <span className="cart-items">{itemCount}</span>
    </button>
    </nav>
  );
};

export default Header;