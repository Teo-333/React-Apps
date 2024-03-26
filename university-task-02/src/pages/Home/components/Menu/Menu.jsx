import React from 'react';
import MenuItem from '../MenuItem/MenuItem.jsx';
import './Menu.css'; 

const Menu = ({ items }) => {
  return (
    <div className="menu-grid">
      {items.map(item => <MenuItem key={item.id} item={item} />)}
    </div>
  );
};

export default Menu;
