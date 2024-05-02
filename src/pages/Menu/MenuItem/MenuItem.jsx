import React, { useState, useCallback } from 'react';
import { useCount } from '../../../contexts/CountContext.js';
import './MenuItem.css'; 

const MenuItem = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [inputValue, setInputValue] = useState(0);
  const { handleAddition } = useCount();

  const toggleExpand = useCallback((e) => {
    e.stopPropagation();
    setIsExpanded(prevIsExpanded => !prevIsExpanded);
  }, []);

  const handleSubmit = useCallback(() => {
    const valueToAdd = Number(inputValue);
    handleAddition(valueToAdd);
    setInputValue(0); 
  }, [inputValue, handleAddition]);

  const handleChange = useCallback((e) => {
    setInputValue(parseInt(e.target.value) || 0);
  }, []);

  return (
    <div className="menu-item">
      <img src={item.img} alt={item.meal} className="menu-item-image" />
      <h3 className="menu-item-title">{item.meal}</h3>
      <div className={`menu-item-description ${isExpanded ? 'expanded' : ''}`}>
        {item.instructions}
        <button className="read-more" onClick={toggleExpand}>{isExpanded ? 'Less' : 'More'}</button>
      </div>
      <div className="menu-item-price">{item.price} USD</div>
      <div className="menu-item-add">
        <input type="number" value={inputValue} min={1} className="menu-item-quantity" onChange={handleChange} />
        <button className="menu-item-button" onClick={handleSubmit}>Add to cart</button>
      </div>
    </div>
  );
};

export default MenuItem;

