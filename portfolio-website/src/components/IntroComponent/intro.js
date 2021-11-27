import React from 'react';
import styles from './intro.module.css';

function Intro() {
  return (
    <div className={styles.intro}>
      <div className={styles.introRight}>
        <div className={styles.introLeftWrapper}>
          <h2 className={styles.introIntro}>Hello, My name is</h2>
          <h1 className={styles.introName}>Lloyd Blake</h1>
          <div className={styles.introTitle}>
            <div className={styles.introTitleWrapper}>
              <div className={styles.introTitleItem}>Web Developer</div>
              <div className={styles.introTitleItem}>
                Senior Automation Engineer
              </div>
              <div className={styles.introTitleItem}>Senior QA Engineer</div>
              <div className={styles.introTitleItem}>PPC/SEO Excutive</div>
              <div className={styles.introTitleItem}>Test Analyst</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.introLeft}>Left</div>
    </div>
  );
}

export default Intro;
