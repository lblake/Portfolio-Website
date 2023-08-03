import React from 'react';
import styles from './about.module.css';
import image from './my-image.avif';
import { Link } from 'react-scroll';

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutLeft}>
        <div className={styles.aboutCardBackground}></div>
        <div className={styles.aboutCard}>
          <img src={image} alt='desktop' className={styles.aboutImage} />
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
          <button>Contact Me</button>
        </Link>
        <Link
          activeClass='active'
          to='projects'
          spy={true}
          smooth={true}
          offset={5}
          duration={2000}
          
        >
          <button>My Work</button>
        </Link>
      </div>
      <div className={styles.aboutRight}>
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
          expertise in creating visually stunning and user-friendly e-commerce
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
          Shopify themes with dynamic elements. Additionally, I completed a
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
          team, React, Typescript, Javascript, CSS, & HTML. Through{' '}
          <a
            href='https://www.frontendmentor.io/challenges'
            target='_blank'
            rel='noopener noreferrer'
          >
            Frontend Mentor{' '}
          </a>
          challenges, I have sharpened my frontend development skills to deliver
          exceptional user interfaces. Finally I bring a diverse skill set
          acquired through the bootcamp(s), self-learning & over 10+ years of IT
          experience working in various sectors. I am actively seeking new
          projects to bring captivating online stores to life. Let's collaborate
          and create an impactful e-commerce presence!.
        </p>
      </div>
    </div>
  );
}
