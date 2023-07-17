import React from 'react';
import styles from './skills.module.css';
import { icons } from './skillsData';

export default function skills() {
  return (
    <div className={styles.skillsContainer}>
      <h1 className={styles.skillsTitle}>Skills</h1>
      <ul className={styles.skillsList}>
        {icons.map((icon) => (
          <li className={styles.skillsList} key={icon.id}>
            <a
              className={styles.button}
              href={icon.link}
              target='_blank'
              rel='noopener noreferrer'
            >
              <img className={styles.icon}  src={icon.img} alt={icon.alt} />
              {/* <p className={styles.text}>More Info</p> */}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
