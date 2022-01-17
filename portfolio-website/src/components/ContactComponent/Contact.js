import React from 'react';
import styles from './contact.module.css';

export default function Contact() {
  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.contactTitle}>Contact Me</h1>
      <a href='mailto:treleven.lloyd@gmail.com'>
        <button className={styles.contactButton}>email me</button>
      </a>
    </div>
  );
}
