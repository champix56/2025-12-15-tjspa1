import React, { FC } from 'react';
import styles from './FlexV1Grow.module.css';

interface FlexV1GrowProps {}

const FlexV1Grow: FC<FlexV1GrowProps> = () => (
  <div className={styles.FlexV1Grow} data-testid="FlexV1Grow">
    FlexV1Grow Component
  </div>
);

export default FlexV1Grow;
