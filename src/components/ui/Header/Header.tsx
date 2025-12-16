import React from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => (
  <div className={styles.Header} data-testid="Header">
    <span className={styles.meme}>Meme<span className={styles.dot}>.</span><span className={styles.react}>react</span>
  </span></div>
);

export default Header;
