import React from 'react';
import styles from './about.module.css';

export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.aboutLeft}>
        <div className={styles.aboutCardBackground}></div>
        <div className={styles.aboutCard}>
          <img
            src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className={styles.aboutImage}
          />
        </div>
      </div>
      <div className={styles.aboutLeft}>
        <h1 className={styles.aboutTitle}>About Me</h1>
        <p className={styles.SubHeading}>
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className={styles.aboutDescription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
        </p>
      
      </div>
    </div>
      
    );
}
