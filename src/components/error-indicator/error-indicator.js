import React from "react";
import './error-indicator.css';
import icon from './death-star.png';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img src={icon} alt="error icon"/><br/>
      <span className="boom">BOOM!</span><br/>
      <span>
        something has gone terribly wrong
      </span><br/>
      <span>
        (but we already sent droids to fix it)
      </span>
    </div>
  );
};

export default ErrorIndicator;