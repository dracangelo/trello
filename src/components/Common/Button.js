import React from 'react';

const Button = ({ text, onClick, type = 'button', disabled = false }) => {
  return (
    <button
      className="common-button"
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
