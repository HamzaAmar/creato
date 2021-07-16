/* eslint-disable @shopify/jsx-no-hardcoded-content */
import React from 'react';
import { Layout } from '@components/core';
import { Developer } from '@components/logos';
import styles from '@styles/home.module.css';
import { Button } from '@components/ui';
import { America } from '@components/icons';

const Plan = () => {
  return (
    <div className={styles.planContainer}>
      <header className={styles.header}>
        <h2>Hello</h2>
      </header>
      <section className={styles.planDetail}>
        <h2>Hello</h2>
        <ul className={styles.planDetailList}>
          <li className={styles.planDetailItem}>Hello World</li>
          <li className={styles.planDetailItem}>Hello World</li>
          <li className={styles.planDetailItem}>Hello World</li>
          <li className={styles.planDetailItem}>Hello World</li>
          <li className={styles.planDetailItem}>Hello World</li>
          <li className={styles.planDetailItem}>Hello World</li>
        </ul>
      </section>
      <footer>
        <Button type="button"> Hello</Button>
      </footer>
    </div>
  );
};

const index = () => {
  return (
    <Layout>
      <div className={styles.about}>
        <section className={styles.aboutInfo}>
          <h1 className={styles.heading}>A Creative Team Specialized in Web</h1>
          <p>
            Want to make an impression? We at Artrivo. build unique websites
            that help you do just that!
          </p>
          <Button type="button">Hello</Button>
        </section>
        <div className={styles.svgContainer}>
          <Developer width="100%" />
        </div>
      </div>
      <section className={styles.solutionContainer}>
        <h1> Our Web Solutions</h1>
        <p>Custom-built, SEO friendly websites with the best UI/UX combo!</p>
        <div className={styles.solution}>
          {new Array(6).fill(null).map((_, index) => (
            <div className={styles.solutionItem} key={index}>
              <America width="30" />
              <div className={styles.solutionItemInfo}>
                <h3>Load Faster</h3>
                <p>
                  Our websites area
                  <span role="img" aria-label="fast emoji">
                    ⚡
                  </span>
                  fast
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h1>Our Places</h1>
        <p>Choose the plan you want you can custom it</p>
        <div className={styles.planContainer}>
          <Plan />
          <Plan />
          <Plan />
        </div>
      </section>
    </Layout>
  );
};

export default index;
