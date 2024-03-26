import React from 'react';
import './ButtonList.css';


function ButtonList({ items }) {
  return (
    <div className="column_main">
      <div className="column_main-h1">{items[0]}</div>
      {items.slice(1).map((buttonTittle) => {
        return (
          <button 
            className="column_main-buttons" 
            key={buttonTittle}>{buttonTittle}</button> 
        );
      })}
    </div>
  );
}

export default ButtonList;