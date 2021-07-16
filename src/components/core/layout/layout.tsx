import React from 'react';

import { Footer, Header } from '..';

import { LayoutProps } from './layout.interface';
import styles from './layout.module.css';

const layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default layout;
