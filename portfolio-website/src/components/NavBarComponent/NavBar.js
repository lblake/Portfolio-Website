import React from 'react';
import styles from './navbar.module.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div>
      {/* <a
        className={styles.button}
        href='/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <h1 className={styles.heading}>Portfolio</h1>
      </a> */}
      <Link
        // className={styles.heading}
        to='/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <h1 className={styles.heading}>Portfolio</h1>
      </Link>
    </div>
  );
}
