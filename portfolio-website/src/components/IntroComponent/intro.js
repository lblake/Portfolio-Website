import React from 'react';
import styles from './intro.module.css';
import image from '../../images/me3-removebg.png';

function Intro() {
  return (
    <div className={styles.intro}>
      <div className={styles.introLeft}>
        <div className={styles.introLeftWrapper}>
          <h2 className={styles.introIntro}>Hello, My name is</h2>
          <h1 className={styles.introName}>Lloyd Blake</h1>
          <div className={styles.introTitle}>
            <div className={styles.introTitleWrapper}>
              <div className={styles.introTitleItem}>FrontEnd Developer</div>
              <div className={styles.introTitleItem}>
                Senior Automation Engineer
              </div>
              <div className={styles.introTitleItem}>Senior QA Engineer</div>
              <div className={styles.introTitleItem}>PPC/SEO Executive</div>
              <div className={styles.introTitleItem}>Test Analyst</div>
            </div>
          </div>
          <div className={styles.introTitleDescription}>
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services and
            online stores.
          </div>
        </div>
      </div>
      <div className={styles.introRight}>
        <div className={styles.introBackground}></div>

        <img src={image} alt='lloyd' className={styles.introImage} />
      </div>
    </div>
  );
}

export default Intro;
