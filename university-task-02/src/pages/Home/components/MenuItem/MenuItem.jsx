import React from 'react';
import './MenuItem.css';

const MenuItem = ({ item }) => {
  return (
    <div className="menu-item">
      <img src={item.imageUrl} alt={item.name} className="menu-item-image" />
      <h3 className="menu-item-title">{item.name}</h3>
      <p className="menu-item-description">{item.description}</p>
      <div className="menu-item-price">{item.price} USD</div>
      <div className="menu-item-add">
        <input type="number" defaultValue={1} min={1} className="menu-item-quantity" />
        <button className="menu-item-button">Add to card</button>
      </div>
    </div>
  );
};

export default MenuItem;
