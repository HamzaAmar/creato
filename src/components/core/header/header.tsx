import { Facebook, Instagram, Twitter } from '@components/icons';
import React from 'react';

import styles from './header.module.css';

const header = () => {
  return (
    <header className={styles.header}>
      <h1>Logo</h1>

      <ul className={styles.socialMediaList}>
        <li className={styles.socialMediaItem}>
          <Facebook />
        </li>
        <li className={styles.socialMediaItem}>
          <Instagram />
        </li>
        <li className={styles.socialMediaItem}>
          <Twitter />
        </li>
      </ul>
    </header>
  );
};

export default header;
