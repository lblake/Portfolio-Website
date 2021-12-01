import React from 'react';
import styles from './about.module.css';

export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.aboutLeft}>
        <div className={styles.aboutCardBackground}></div>
        <div className={styles.aboutCard}>
          <img
            src='https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
            alt=''
            className={styles.aboutImage}
          />
        </div>
      </div>

      <div className={styles.aboutRight}></div>
    </div>
  );
}
