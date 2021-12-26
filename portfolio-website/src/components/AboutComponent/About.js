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
      <div className={styles.aboutRight}>
        <h1 className={styles.aboutTitle}>About Me</h1>
        <p className={styles.SubHeading}>
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className={styles.aboutDescription}>
          I'm Frontend developer who loves to convert beautiful designs, into
          pixel perfect web interfaces. I have a really good eye for details, so
          this kind of challenges are really amazing for me. Currently I'm being
          mentored by a Senior Software Engineer from Cinch.co.uk, who has
          helped me level up my technical skills, showing me different ways to
          resolve my issues, and how to write clean and modular code. I have
          created multiple projects from Frontend Mentor, and some set by my
          mentor. My favourite tools of the trade are CSS, JavaScript, React and
          I'm ready to take on new challenges.
        </p>
      </div>
    </div>
  );
}
