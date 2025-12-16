import React from "react";
import styles from "./MemeSvgViewer.module.css";

interface IMemeSvgViewerProps {
  children?: React.ReactNode;
  parentStyle?: React.CSSProperties;
}

const MemeSvgViewer: React.FC<IMemeSvgViewerProps> = ({
  parentStyle,
  children = "MemeSvgViewer Component",
}) => {
  return (
    <div className={styles.MemeSvgViewer} style={parentStyle} data-testid="MemeSvgViewer">
      {children}
    </div>
  );
};

export default MemeSvgViewer;
