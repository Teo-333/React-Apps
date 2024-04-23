import React, { Component } from 'react';
import './ButtonList.css';

class ButtonList extends Component {
  render() {
    const { items } = this.props; 
    return (
      <div className="column_main">
        <div className="column_main-h1">{items[0]}</div>
        {items.slice(1).map((buttonText, index) => {
 
          return (
            <button 
              className="column_main-buttons" 
              key={"button-list-" + index}>{buttonText}</button> 
          );
        })}
      </div>
    );
  }
}

export default ButtonList;


