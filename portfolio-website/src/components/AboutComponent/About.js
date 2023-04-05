import React from 'react';
import styles from './about.module.css';
import image from './Lloyd-Desk.jpg';

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutLeft}>
        <div className={styles.aboutCardBackground}></div>
        <div className={styles.aboutCard}>
          <img src={image} alt='desktop' className={styles.aboutImage} />
        </div>
      </div>
      <div className={styles.aboutRight}>
        <h1 className={styles.aboutTitle}>About Me</h1>

        <p className={styles.aboutDescription}>
          I am{' '}
          <a
            href='https://github.com/lblake'
            target='_blank'
            rel='noopener noreferrer'
          >
            Frontend Web Developer
          </a>{' '}
          who loves learning new technologies. I set myself a goal to gain an
          understanding of how React and it's related components work together.
          During this process I was mentored by a Senior Software Engineer from{' '}
          <a
            href='https://www.cinch.co.uk'
            target='_blank'
            rel='noopener noreferrer'
          >
            Cinch.co.uk
          </a>
          , who helped me level up my technical skills, showing me different
          ways to resolve my issues, and how to write clean and modular code. I
          have also recently completed a Full-Stack coding bootcamp run by{' '}
          <a
            href='https://www.techreturners.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Tech Returners
          </a>{' '} in partnership with <a
            href='https://northcoders.com/our-courses/coding-bootcamp'
            target='_blank'
            rel='noopener noreferrer'
          >
            North Coders.
          </a>{' '}
          I have also created a number of projects from{' '}
          <a
            href='https://www.frontendmentor.io/challenges'
            target='_blank'
            rel='noopener noreferrer'
          >
            Frontend Mentor.{' '} 
          </a>
          The end result was I gained a deeper
          understanding of how to create React apps and websites using web
          technologies such as CSS, JavaScript & React and I'm ready to take on
          new challenges.
        </p>
      </div>
    </div>
  );
}
