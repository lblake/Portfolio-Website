import React from 'react';
import styles from './skills.module.css';
import { icons } from './skillsData';

export default function skills() {
  return (
    <div className={styles.skillsContainer}>
      <h1 className={styles.skillsTitle}>Skills</h1>
      {/* icons are displayed virtically even though using same css */}
      {icons.map((icon) => (
          <ul className={styles.skillsList}>
              <li className={styles.skillsList} key={icon.id}>  <img src={icon.img} alt={icon.alt}/> </li>
          </ul>
        ))}

{/* icons displayed correctly using the same css */}
      <ul className={styles.skillsList}>
        <li className={styles.skillsList}>
          <img
            src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg'
            alt=''
          />
        </li>
        <li className={styles.skillsList}>
          <img
            src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg'
            alt=''
          />
        </li>
        <li className={styles.skillsList}>
          <img
            src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
            alt=''
          />
        </li>
        <li className={styles.skillsList}>
          <img
            src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg'
            alt=''
          />
        </li>
        <li className={styles.skillsList}>
          <img
            src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg'
            alt=''
          />
        </li>
        <li className={styles.skillsList}>
          <img
            src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg'
            alt=''
          />
        </li>
      </ul>
    </div>
  );
}
