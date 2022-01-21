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
            <img src={icon.img} alt={icon.alt} />
          </li>
        ))}
      </ul>
    </div>
  );
}
