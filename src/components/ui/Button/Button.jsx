import React from "react";
import './Button.css';
const Button = ({ title, onButtonClick }) => {
  console.log(title);
  return (
    <button
      className="Button"
      onClick={(evt) => {
        //traitement event
        onButtonClick(title);
      }}
    >
      {title}
    </button>
  );
};

export default Button;
