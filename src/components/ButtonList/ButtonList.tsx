import React from 'react';
import './ButtonList.css';

interface ButtonListProps {
  items: string[];
}

const ButtonList: React.FC<ButtonListProps> = ({ items }) => {
  return (
    <div className="column_main">
      <div className="column_main-h1">{items[0]}</div>
      {items.slice(1).map((buttonTitle) => (
        <button 
          className="column_main-buttons" 
          key={buttonTitle}
        >
          {buttonTitle}
        </button>
      ))}
    </div>
  );
}

export default ButtonList;
