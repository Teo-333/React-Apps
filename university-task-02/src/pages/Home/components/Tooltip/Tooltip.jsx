import React, { useState } from 'react';
import './Tooltip.css'; 

const Tooltip = ({ children, text }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <span className="tooltip" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
      {isHovered && <span className="tooltip_text">{text}</span>}
    </span>
  );
};

export default Tooltip;
