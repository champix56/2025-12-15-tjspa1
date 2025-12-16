import React, { FC } from 'react';
import styles from './MemeSvgViewer.module.css';

interface MemeSvgViewerProps {}

const MemeSvgViewer: FC<MemeSvgViewerProps> = () => (
  <div className={styles.MemeSvgViewer} data-testid="MemeSvgViewer">
    MemeSvgViewer Component
  </div>
);

export default MemeSvgViewer;
