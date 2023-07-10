import React from 'react';
import styles from './contact.module.css';
// import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.contactTitle}>Let's Connect</h1>
      <a className={styles.contactEmail} href='mailto:treleven.lloyd@gmail.com'>
        Email 
      </a>
      {/* <a className={styles.contactEmail} href='mailto:treleven.lloyd@gmail.com'>
        Github
      </a> */}
      <a className={styles.contactEmail} href='mailto:treleven.lloyd@gmail.com'>
        Linkedin 
      </a>
      <a className={styles.contactEmail} href='mailto:treleven.lloyd@gmail.com'>
        Resume
      </a>

      {/* <Link
        className={styles.contactEmail}
        to='LloydBlakeCV.pdf'
        target='_blank'
        download
      >
        download resume
      </Link> */}
    </div>

    
  );
  
}
