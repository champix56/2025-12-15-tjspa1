import React, { FC } from 'react';
import styles from './MemeForm.module.css';

interface MemeFormProps {}

const MemeForm: FC<MemeFormProps> = () => (
  <div className={styles.MemeForm} data-testid="MemeForm">
    MemeForm Component
  </div>
);

export default MemeForm;
