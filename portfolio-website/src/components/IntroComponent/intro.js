import React from 'react';
import styles from './intro.module.css';
import image from './Lloyd-removebg.png';

function Intro() {
  return (
    <div className={styles.introContainer}>
      <div className={styles.introLeft}>
        <div className={styles.introLeftWrapper}>
          <h2 className={styles.introHeading}>Hello, My name is</h2>
          <h1 className={styles.introName}>Lloyd Blake</h1>
          <div className={styles.introTitle}>
            <div className={styles.introTitleWrapper}>
              <div className={styles.introTitleItem}>Frontend Developer</div>
            </div>
          </div>
          <p className={styles.introTitleDescription}>
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services and
            online stores.
          </p>
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
