import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../data/cartSlice';
import './MenuItem.css';

interface Meal {
  id: string;
  meal: string;
  category: string;
  area: string;
  instructions: string;
  img: string;
  price: number;
}

interface MenuItemProps {
  item: Meal;
}

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [inputValue, setInputValue] = useState<number>(1);
  const dispatch = useDispatch();

  const toggleExpand = useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    setIsExpanded(prevIsExpanded => !prevIsExpanded);
  }, []);

  const handleSubmit = useCallback(() => {
    const itemToAdd = {
      id: item.id,
      name: item.meal,
      category: item.category,
      area: item.area,
      instructions: item.instructions,
      image: item.img,
      price: item.price,
      quantity: inputValue
    };
    console.log("Adding to cart:", itemToAdd); // Debugging line
    dispatch(addToCart(itemToAdd));
    setInputValue(1);
  }, [dispatch, item, inputValue]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(parseInt(e.target.value, 10) || 1);
  }, []);

  return (
    <div className="menu-item">
      <img src={item.img} alt={item.meal} className="menu-item-image" />
      <h3 className="menu-item-title">{item.meal}</h3>
      <div className={`menu-item-description ${isExpanded ? 'expanded' : ''}`}>
        {item.instructions}
        <button className={`read-more ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpand}>
          {isExpanded ? 'Less' : 'More'}
        </button>
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
