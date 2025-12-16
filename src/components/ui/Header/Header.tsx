import React from "react";
import styles from "./Header.module.css";

interface IHeaderProps {
  children?: React.ReactNode;
  parentStyle?: React.CSSProperties;
}

const Header: React.FC<IHeaderProps> = ({
  parentStyle,
  children = "Header Component",
}) => {
  return (
    <div className={styles.Header} style={parentStyle} data-testid="Header">
      {children}
    </div>
  );
};

export default Header;
