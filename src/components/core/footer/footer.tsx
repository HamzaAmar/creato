import React from 'react';
import cn from 'classnames';

import styles from './footer.module.css';

const footer = () => {
  return (
    <>
      <section>
        <h1>Hello , We are artrivo.</h1>
        <p>
          We create every website with care so each of them has a unique
          personality much like you and your business! We pay greater attention
          to detail.
        </p>
        <p>
          Everyone has a unique story and we would love to hear yours. Let’s
          make your story a digital reality!
        </p>
        <button type="button">Hello</button>
      </section>
      <div className={styles.copyRight}>
        © {new Date().getFullYear()} - All Rights Reserved.
      </div>
    </>
  );
};

export default footer;
