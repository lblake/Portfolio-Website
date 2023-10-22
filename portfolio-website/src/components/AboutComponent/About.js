import React from 'react';
import styles from './about.module.css';
// import image from './my-image.avif';
import { Link } from 'react-scroll';

export default function About() {
  const image = new Image();
  image.src = require('./my-image.avif');

  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutLeft}>
        <div className={styles.aboutCardBackground}></div>
        <div className={styles.aboutCard}>
          <img
            src={image.src}
            alt='desktop'
            className={styles.aboutImage}
            loading='lazy'
          />
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <Link
          activeClass='active'
          to='contactMe'
          spy={true}
          smooth={true}
          offset={1000}
          duration={3000}
        >
          <button className={styles.contactButton}>Contact Me</button>
        </Link>
        <Link
          activeClass='active'
          to='projects'
          spy={true}
          smooth={true}
          offset={5}
          duration={2000}
        >
          <button className={styles.workButton}>My Work</button>
        </Link>
      </div>
      <div id='aboutMe' className={styles.aboutRight}>
        {/* <h1 className={styles.aboutTitle}>About Me</h1> */}

        <p className={styles.aboutDescription}>
          I have{' '}
          {/* <a
            href='https://github.com/lblake'
            target='_blank'
            rel='noopener noreferrer'
          >
            Frontend Shopify Developer
          </a>{' '} */}
          expertise in creating visually stunning and user-friendly Shopify
          experiences. I recently completed a comprehensive Freelance Shopify
          Developer Bootcamp run by{' '}
          <a
            href='https://www.freemote.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            Freemote.
          </a>{' '}
          Gaining a deeper understanding of the Shopify ecosystem and enhancing
          Shopify themes with dynamic sections. Additionally, I also completed a
          Full-Stack coding bootcamp by{' '}
          <a
            href='https://www.techreturners.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Tech Returners
          </a>{' '}
          in association with{' '}
          <a
            href='https://northcoders.com/our-courses/coding-bootcamp'
            target='_blank'
            rel='noopener noreferrer'
          >
            North Coders.
          </a>{' '}
          Equipping me with a broad range of skills including working as part of
          team, React, Typescript, Javascript, CSS, & HTML. I bring a diverse
          skill set acquired through the bootcamp(s), self-learning & over 10+
          years of IT experience working in various sectors. Finally the {' '}
          <a
            href='https://lunatemplates.co/pages/shopify-course-for-designers'
            target='_blank'
            rel='noopener noreferrer'
          >
            Design Freedom on Shopify {' '}
          </a>
          course has been a game-changer for me. With newfound proficiency in Figma &
          Adobe XD, I'm well-equipped to breathe life into any design on any Shopify theme. I am
          actively seeking new projects to bring captivating Shopify stores to
          life. Let's collaborate and create an impactful Shopify presence!.
        </p>
      </div>
    </div>
  );
}
