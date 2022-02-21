import React from 'react';
import styles from './navbar.module.css';

export default function NavBar() {
  return (
    <div>
      <a
        className={styles.button}
        href='/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <h1 className={styles.heading}>Portfolio</h1>
      </a>
    </div>
  );
}
