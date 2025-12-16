import React from "react";
import styles from "./Navbar.module.css";

interface INavbarProps {
  children?: React.ReactNode;
  parentStyle?: React.CSSProperties;
}

const Navbar: React.FC<INavbarProps> = ({
  parentStyle,
  children = "Navbar Component",
}) => {
  return (
    <div className={styles.Navbar} style={parentStyle} data-testid="Navbar">
      {children}
    </div>
  );
};

export default Navbar;
