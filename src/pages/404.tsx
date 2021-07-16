import React from 'react';
import styles from '@styles/notFound.module.css';
import { Layout } from '@components/core';
import Link from 'next/link';

const About = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>404</h1>
          <h3>Page Not Found</h3>
          <p>
            We Think that You get Lost and we think that you need help please
            check our map to go fast for the page that you need
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
