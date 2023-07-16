import React from 'react';
import styles from './about.module.css';
import image from './my-test-image.png';

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
            Frontend Shopify Developer
          </a>{' '}
          specializing in creating seamless online stores. With expertise in
          Shopify theme development. I excel at building visually stunning and
          user-friendly e-commerce experiences. I possess a solid understanding
          of the Shopify platform its components, including Shopify Liquid.
          Leveraging them to enhance Shopify themes with dynamic and interactive
          elements. I recently completed a comprehensive Freelance Shopify
          Developer Bootcamp run by{' '}
          <a
            href='https://www.freemote.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            Freemote.
          </a>{' '}
          This bootcamp enabled me gain a deeper understanding of the Shopify
          ecosystem. Another course I completed was a Full-Stack coding bootcamp
          run by{' '}
          <a
            href='https://www.techreturners.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Tech Returners
          </a>{' '}
          in collaboration with{' '}
          <a
            href='https://northcoders.com/our-courses/coding-bootcamp'
            target='_blank'
            rel='noopener noreferrer'
          >
            North Coders.
          </a>{' '}
          Equipping me with a broad range of skills including working as part of
          team, React, Typescript, Javascript, CSS, & HTML. Participation in{' '}
          <a
            href='https://www.frontendmentor.io/challenges'
            target='_blank'
            rel='noopener noreferrer'
          >
            Frontend Mentor{' '}
          </a>
          challenges has sharpened my frontend development skills, enabling me
          to deliver exceptional user interfaces. Finally I bring extensive
          experience, a diverse skill set acquired through the bootcamp(s),
          self-learning & over 10+ years of IT experience working in various sectors. I'm actively
          seeking new projects to bring captivating online stores to life. Let's
          collaborate and create an impactful e-commerce presence!.
        </p>
      </div>
    </div>
  );
}
