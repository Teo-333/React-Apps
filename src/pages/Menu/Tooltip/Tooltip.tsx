import React from 'react';

import './Tooltip.css';

interface TooltipProps {
    children: React.ReactNode;
    text: string;
}

const Tooltip: React.FC<TooltipProps> = ({ children, text }) => {
  return (
    <div className="tooltip">
      {children}
      <span className="tooltip_text">{text}</span>
    </div>
  );
};

export default Tooltip;
