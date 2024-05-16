import React, { useState, useCallback } from 'react';

import MenuItem from '../MenuItem/MenuItem.jsx';

import './Menu.css';


const Menu = ({ items,error }) => {
  const [itemsToShow, setItemsToShow] = useState(30);

const loadMore = useCallback(() => {
    setItemsToShow(prevItemsToShow => prevItemsToShow + 30);
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (!items.length) return <div>Loading...</div>;

  return (
      <div className='menu'>
        <div className="menu-grid">
          {items.slice(0, itemsToShow).map(item => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
        {itemsToShow < items.length && (
          <button onClick={loadMore} className="menu-item-button middle">
            See More
          </button>
        )}
      </div>
  );
};

export default Menu;
