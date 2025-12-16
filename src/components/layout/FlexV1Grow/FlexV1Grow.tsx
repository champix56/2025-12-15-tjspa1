import React from "react";
import styles from "./FlexV1Grow.module.css";

interface IFlexV1GrowProps {
  children?: React.ReactNode;
  parentStyle?: React.CSSProperties;
}

const FlexV1Grow: React.FC<IFlexV1GrowProps> = ({
  parentStyle,
  children = "FlexV1Grow Component",
}) => {
  return (
    <div className={styles.FlexV1Grow} style={parentStyle} data-testid="FlexV1Grow">
      {children}
    </div>
  );
};

export default FlexV1Grow;
