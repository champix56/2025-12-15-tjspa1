import React from 'react';
import styles from './FlexH3Grow.module.css';

interface IFlexH3GrowProps {
  children: Array<React.ReactNode> | React.ReactNode;
  parentStyle?: React.CSSProperties
}
const FlexH3Grow: React.FC<IFlexH3GrowProps> = ({ parentStyle, children = 'FlexH3Grow component' }) => {
  return (
    <div className={styles.FlexH3Grow} data-testid="FlexH3Grow" style={parentStyle}>
      {children}
    </div>
  );
}
export default FlexH3Grow;
