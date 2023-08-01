import React from 'react';
import styles from './intro.module.css';

function Intro() {
  return (
    <div className={styles.introContainer}>
      <div className={styles.introLeft}>
        <div className={styles.introLeftWrapper}>
          <h2 className={styles.introHeading}>Hello, my name is</h2>
          <h1 className={styles.introName}>Lloyd Blake</h1>
          <h2 className={styles.introJob}>Frontend Shopify Developer</h2>
          <div className={styles.introTitle}>
            <div className={styles.introTitleWrapper}>
              <div className={styles.introTitleItem}></div>
            </div>
          </div>
          <p className={styles.introTitleDescription}>
            "It's supposed to be hard. If it wasn't hard, everyone would do it.
            The hard... is what makes it great."
          </p> 
        </div>
      </div>
      <div className={styles.introRight}>
        <div className={styles.introBackground}></div>
      </div>
    </div>
  );
}

export default Intro;
