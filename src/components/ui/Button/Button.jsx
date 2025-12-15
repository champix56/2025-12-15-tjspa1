import React from "react";
import style from './Button.module.css'
const Button = ({ children, onButtonClick, bgColor }) => {
   console.trace(children);
  return  (
    <button
      className={style.Button}
      style={{backgroundColor:bgColor}}
      onClick={(evt) => {
        //traitement event
        onButtonClick(title);
      }}
    >
      {children}
    </button>
  );
};

export default Button;
