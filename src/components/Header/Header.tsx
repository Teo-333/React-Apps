import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../data/store';
import './Header.css';

import NavLogo from '../../assets/images/Nav-logo.svg'; 
import ShoppingCart from '../../assets/images/Nav-shopping-cart.svg'; 
import { BUTTONS } from '../../constants/constants';  
import { NavLink } from 'react-router-dom';
import ThemeToggleButton from './ThemeToggle/ThemeToggle';

const Header = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [logoAnimation, setLogoAnimation] = useState('');
  const totalQuantity = useSelector((state: RootState) => state.cart.totalQuantity);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
    setLogoAnimation(logoAnimation === '' || logoAnimation === 'logo-animate-back' 
      ? 'logo-animate' 
      : 'logo-animate-back');
  };

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
  
      <div className={`navbar-links ${hamburgerOpen ? 'visible' : ''}`}>
        {BUTTONS[3].navBar?.map((button: string, index: number) => (
          <NavLink 
            key={index} 
            id={`nav-link-${index}`} 
            className="nav-link" 
            to={`/${button.toLowerCase()}`}
          >
            {button}
          </NavLink>
        ))}
      </div>
      <ThemeToggleButton />
      <button className="navbar-cart">
        <NavLink to={'/order'}>
        <img  
          src={ShoppingCart} 
          alt="Cart Icon" 
          className="cart-icon"
        />
        <span className="cart-items">{totalQuantity}</span>
        </NavLink>
      </button>
    </nav>
  );
};

export default Header;
