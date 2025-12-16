import React from "react";
import styles from "./Footer.module.css";

interface IFooterProps {
  children?: React.ReactNode;
  parentStyle?: React.CSSProperties;
}

const Footer: React.FC<IFooterProps> = ({
  parentStyle,
  children = "Footer Component",
}) => {
  return (
    <div className={styles.Footer} style={parentStyle} data-testid="Footer">
      {children}
    </div>
  );
};

export default Footer;
