import React from 'react';
import styles from './FlexV1Grow.module.css';

interface IFlexV1GrowProps {
  children: Array<React.ReactNode>|React.ReactNode;
  parentStyle?:React.CSSProperties
}
const FlexV1Grow: React.FC<IFlexV1GrowProps> = ({ parentStyle,children = 'FlexV1Grow component' }) => {
  return (
    <div className={styles.FlexV1Grow} data-testid="FlexV1Grow" style={parentStyle}>
      {children}
    </div>
  );
}
export default FlexV1Grow;
