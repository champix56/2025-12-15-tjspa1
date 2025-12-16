import React, { useEffect, useState } from "react";
import style from "./Button.module.css";
interface IButtonProps {
  children: string | React.ReactElement | Array<string | React.ReactElement>;
  onButtonClick?: () => void;
  bgColor?: string;
  type?: "button" | "submit" | "reset";
}
const Button = ({
  children,
  onButtonClick,
  bgColor = "red",
  type = "button",
}: IButtonProps) => {
  const [isClicked, setisClicked] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setisClicked(false);
    }, 200);
  }, [isClicked]);

  return (
    <button
      type={type}
      className={`${style.Button}${isClicked ? ` ${style.clicked}` : ""}`}
      style={{ backgroundColor: bgColor }}
      onClick={() => {
        setisClicked(true);
        //traitement event
        if (onButtonClick) {
          onButtonClick();
        }
      }}
    >
      {children}
      <br />
      {isClicked.toString()}
    </button>
  );
};

export default Button;
