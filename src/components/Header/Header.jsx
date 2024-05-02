import React, { useState } from 'react';
import './Header.css';
import NavLogo from '../../assets/images/Nav-logo.svg'; 
import ShoppingCart from '../../assets/images/Nav-shopping-cart.svg'; 
import { BUTTONS } from '../../constants/constants'; 
import { useCount } from '../../contexts/CountContext.js';



const Header = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [logoAnimation, setLogoAnimation] = useState('');
  const { count } = useCount();

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
    setLogoAnimation(logoAnimation === '' || logoAnimation === 'logo-animate-back' 
      ? 'logo-animate' 
      : 'logo-animate-back');
  };

  const handleButtonClick = (button) => {
    window.location.href = `/${button.toLowerCase()}`;
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img  
          src={NavLogo}  
          alt="Navigation Logo"
          onClick={toggleHamburger}
          className={logoAnimation}
          id="logo-button"
        />
      </div>
      {/* <div className={`navbar-links ${hamburgerOpen ? 'visible' : ''}`}>
        {BUTTONS[3].navBar.map((button, index) => { 
            return <Link key={index} id={`nav-link-${index}`} className="nav-link" to={"/" + button.toLocaleLowerCase()}>{button}</Link>;
        })}
      </div> */}

    <div className={`navbar-links ${hamburgerOpen ? 'visible' : ''}`}>
      {BUTTONS[3].navBar.map((button, index) => (
        <span
          key={index}
          id={`nav-link-${index}`}
          className="nav-link"
          onClick={() => handleButtonClick(button)}
          style={{ cursor: 'pointer' }}
        >
          {button}
        </span>
      ))}
    </div>
      <button className="navbar-cart">
        <img  
          src={ShoppingCart} 
          alt="Cart Icon" 
          className="cart-icon"
        />
        <span className="cart-items">{count}</span>
      </button>
    </nav>
  );
};

export default Header;


