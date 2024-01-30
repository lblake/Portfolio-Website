import React from 'react';
import styles from './intro.module.css';

function Intro() {
  return (
    <div className={styles.introContainer}>
      <div className={styles.introLeft}>
        <div className={styles.introLeftWrapper}>
          <h2 className={styles.introHeading}>Hello, my name is</h2>
          <h1 className={styles.introName}>Lloyd Blake</h1>
          <h2 className={styles.introJob}>Shopify Website Developer</h2>
          <div className={styles.introTitle}>
            <div className={styles.introTitleWrapper}>
              <div className={styles.introTitleItem}></div>
            </div>
          </div>
          <p className={styles.introTitleDescription}>
            "Eager to bring my expertise in Shopify development to a dynamic
            role, where I can help seamlessly blend my creativity and technical
            finesse to contribute to the success of an innovative e-commerce
            powerhouse."
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
