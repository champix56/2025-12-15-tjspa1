import React from "react";
import style from "./Button.module.css";
interface IButtonProps {
  children: string|React.ReactElement|Array<string|React.ReactElement>;
  onButtonClick?: ()=>void;
  bgColor?: string;
  type?: "button" | "submit" | "reset";
}
const Button = ({ children, onButtonClick, bgColor = "red", type="button" }: IButtonProps) => {
  console.trace(children);
  return (
    <button
      type={type}
      className={style.Button}
      style={{ backgroundColor: bgColor }}
      onClick={() => {
        //traitement event
        if (onButtonClick) {
          onButtonClick();
        }
      }}
    >
      {children}
    </button>
  );
};

export default Button;
