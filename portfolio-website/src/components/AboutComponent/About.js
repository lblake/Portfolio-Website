import React from 'react';
import styles from './about.module.css';
import image from './Lloyd-Desk.jpg';
// import lloyd_image from './Lloyd.jpg';

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutLeft}>
        <div className={styles.aboutCardBackground}></div>
        <div className={styles.aboutCard}>
          {/* <img src={lloyd_image} alt='lloyd' className={styles.lloydImage} /> */}

          <img src={image} alt='desktop' className={styles.aboutImage} />
        </div>
      </div>
      <div className={styles.aboutRight}>
        <h1 className={styles.aboutTitle}>About Me</h1>

        <p className={styles.aboutDescription}>
          I'm Frontend developer who loves to convert beautiful designs, into
          pixel perfect web interfaces. I have a really good eye for details, so
          this kind of challenges are really amazing for me. Currently I'm being
          mentored by a Senior Software Engineer from{' '}
          <a
            href='https://www.cinch.co.uk'
            target='_blank'
            rel='noopener noreferrer'
          >
            Cinch.co.uk
          </a>
          , who has helped me level up my technical skills, showing me different
          ways to resolve my issues, and how to write clean and modular code. I
          have created multiple projects from{' '}
          <a
            href='https://www.frontendmentor.io/challenges'
            target='_blank'
            rel='noopener noreferrer'
          >
            Frontend Mentor
          </a>
          , and some set by my mentor. My favourite tools of the trade are CSS,
          JavaScript, React and I'm ready to take on new challenges.
        </p>
      </div>
    </div>
  );
}
