import React from 'react';
import './Column.css';


const Column = ({ items }) => {
return(
    <div className="column_main">
    <div className="column_main-h1">{items[0]}</div>
    {items.slice(1).map((buttonText)=>{
        return <button className="column_main-buttons">{buttonText}</button>
    })}
    </div>
);

};

export default Column;


