import React, { Component } from 'react';
import './Header.css';
import { BUTTONS } from '../../constants/constants.js';
import ShoppingCart from "../../assets/images/Nav-shopping-cart.svg";
import NavLogo from "../../assets/images/Nav-logo.svg";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hamburgerOpen: false,
      logoAnimation: ''
    };
  }

  toggleHamburger = () => {
    this.setState(prevState => ({
      hamburgerOpen: !prevState.hamburgerOpen,
      logoAnimation: prevState.logoAnimation === '' || prevState.logoAnimation === 'logo-animate-back' 
        ? 'logo-animate' 
        : 'logo-animate-back'
    }));
  };

  render() {
    const { count } = this.props;
    const { hamburgerOpen, logoAnimation } = this.state;

    console.log(count);

    return (
      <nav className="navbar">
        <div className="navbar-logo">
          <img  
            src={NavLogo}  
            alt="Navigation Logo"
            onClick={this.toggleHamburger}
            className={logoAnimation}
            id="logo-button"
          />
        </div>
    
        <div className={`navbar-links ${hamburgerOpen ? 'visible' : ''}`}>
          {BUTTONS[3].navBar.map((button, index) => { 
              return <a key={index} id={`nav-link-${index}`} href={`/${button.toLowerCase()}`} className="nav-link">{button}</a>;
          })}
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
  }
}

export default Header;
