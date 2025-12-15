import React from "react";
import style from './Button.module.css'
const Button = ({ title, onButtonClick }) => {
  console.log(style);
  return (
    <button
      className={style.Button}
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
