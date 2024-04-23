import React, { Component } from 'react';
import './Tooltip.css';

class Tooltip extends Component {
  render() {
    const { children, text } = this.props; 

    return (
      <div className="tooltip">
        {children}
        <span className="tooltip_text">{text}</span>
      </div>
    );
  }
}

export default Tooltip;

