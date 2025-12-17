import React from "react";
import styles from "./MemeThumbnail.module.css";

interface IMemeThumbnailProps {
  children?: React.ReactNode;
  parentStyle?: React.CSSProperties;
}

const MemeThumbnail: React.FC<IMemeThumbnailProps> = ({
  parentStyle,
  children = "MemeThumbnail Component",
}) => {
  return (
    <div className={styles.MemeThumbnail} style={parentStyle} data-testid="MemeThumbnail">
      {children}
    </div>
  );
};

export default MemeThumbnail;
