import React, { FC } from 'react';
import styles from './FlexH3Grow.module.css';

interface FlexH3GrowProps {}

const FlexH3Grow: FC<FlexH3GrowProps> = () => (
  <div className={styles.FlexH3Grow} data-testid="FlexH3Grow">
    FlexH3Grow Component
  </div>
);

export default FlexH3Grow;
