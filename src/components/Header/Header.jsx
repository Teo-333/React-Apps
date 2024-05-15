// import React, { useState, useContext } from 'react';
// import './Header.css';
// import NavLogo from '../../assets/images/Nav-logo.svg'; 
// import ShoppingCart from '../../assets/images/Nav-shopping-cart.svg'; 
// import { BUTTONS } from '../../constants/constants'; 
// import { NavLink } from 'react-router-dom';
// import { CountContext } from '../../context/CountContext';



// const Header = () => {
//   const [hamburgerOpen, setHamburgerOpen] = useState(false);
//   const [logoAnimation, setLogoAnimation] = useState('');
//   const { count } = useContext(CountContext);

//   const toggleHamburger = () => {
//     setHamburgerOpen(!hamburgerOpen);
//     setLogoAnimation(logoAnimation === '' || logoAnimation === 'logo-animate-back' 
//       ? 'logo-animate' 
//       : 'logo-animate-back');
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">
//         <img  
//           src={NavLogo}  
//           alt="Navigation Logo"
//           onClick={toggleHamburger}
//           className={logoAnimation}
//           id="logo-button"
//         />
//       </div>
  
//       <div className={`navbar-links ${hamburgerOpen ? 'visible' : ''}`}>
//         {BUTTONS[3].navBar.map((button, index) => { 
//             return <NavLink key={index} id={`nav-link-${index}`} href={`/${button.toLowerCase()}`} className="nav-link" to={"/" + button.toLocaleLowerCase()}>{button}</NavLink>;
//         })}
//       </div>

//       <button className="navbar-cart">
//         <img  
//           src={ShoppingCart} 
//           alt="Cart Icon" 
//           className="cart-icon"
//         />
//         <span className="cart-items">{count}</span>
//       </button>
//     </nav>
//   );
// };

// export default Header;

import React, { useState, useContext } from 'react';
import './Header.css';
import NavLogo from '../../assets/images/Nav-logo.svg'; 
import ShoppingCart from '../../assets/images/Nav-shopping-cart.svg'; 
import { BUTTONS } from '../../constants/constants'; 
import { NavLink } from 'react-router-dom';
import { CountContext } from '../../context/CountContext';

const Header = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [logoAnimation, setLogoAnimation] = useState('');
  const { count } = useContext(CountContext);

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
        {BUTTONS[3].navBar.map((button, index) => (
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



