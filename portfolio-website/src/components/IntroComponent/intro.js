import React from 'react';
import styles from './intro.module.css';

function Intro() {
  return (
    <div className={styles.introContainer}>
      <div className={styles.introLeft}>
        <div className={styles.introLeftWrapper}>
          <h2 className={styles.introHeading}>Hello, My name is</h2>
          <h1 className={styles.introName}>Lloyd Blake</h1>
          <div className={styles.introTitle}>
            <div className={styles.introTitleWrapper}>
              <div className={styles.introTitleItem}></div>
            </div>
          </div>
          <p className={styles.introTitleDescription}>
          I have a wide range of experience testing on different platforms and technologies 
          with a particular emphasis on web technologies 
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
