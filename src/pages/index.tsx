/* eslint-disable @shopify/jsx-no-hardcoded-content */
import React from 'react';
import { Layout } from '@components/core';
import { Developer } from '@components/logos';
import styles from '@styles/home.module.css';
import { Button } from '@components/ui';
import { America, Check, Cross } from '@components/icons';

const Plan = ({ type, price }) => {
  return (
    <div className={styles.planContainer}>
      <header className={styles.planHeader}>
        <h1 className={styles.planType}>{type}</h1>
        <div className={styles.priceContainer}>
          <h4 className={styles.price}> from {price} $ </h4>
        </div>
      </header>
      <section className={styles.planDetail}>
        <h2>Hello</h2>
        <ul className={styles.planDetailList}>
          <li className={styles.planDetailItem}>
            <Check />{' '}
            <span className={styles.planDetailItemName}>Hello World</span>
          </li>
          <li className={styles.planDetailItem}>
            <Check /> <span className={styles.planDetailItemName}>HEllo</span>
          </li>
          <li className={styles.planDetailItem}>
            <Check /> <span className={styles.planDetailItemName}>Hello </span>
          </li>
          <li className={styles.planDetailItem}>
            <Check /> <span className={styles.planDetailItemName}>Hello </span>
          </li>
          <li className={styles.planDetailItem}>
            <Cross />
            <span className={styles.planDetailItemName}>Hello </span>
          </li>
          <li className={styles.planDetailItem}>
            <Cross />
            <span className={styles.planDetailItemName}>Hello </span>
          </li>
        </ul>
      </section>
      <footer className={styles.planFooter}>
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
      <section className={styles.section}>
        <div className={styles.solutionInfoContainer}>
          <h1 className={styles.headingMedium}> Our Web Solutions</h1>
          <p className={styles.paragraph}>
            Custom-built, SEO friendly websites with the best UI/UX combo!
          </p>
        </div>
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

      <section className={styles.section}>
        <div className={styles.solutionInfoContainer}>
          <h1 className={styles.headingMedium}>Our Places</h1>
          <p className={styles.paragraph}>
            Choose the plan you want you can custom it
          </p>
        </div>
        <div className={styles.plansContainer}>
          <Plan type="simple" price="200" />
          <Plan type="intermediate" price="200" />
          <Plan type="advanced" price="200" />
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.solutionInfoContainer}>
          <h1 className={styles.headingMedium}>Our Places</h1>
          <p className={styles.paragraph}>
            Choose the plan you want you can custom it
          </p>
        </div>
        <div className={styles.plansContainer}>
          <Plan type="simple" price="200" />
          <Plan type="intermediate" price="200" />
          <Plan type="advanced" price="200" />
        </div>
      </section>
    </Layout>
  );
};

export default index;
