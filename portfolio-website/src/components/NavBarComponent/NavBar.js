import React from 'react';
import styles from './navbar.module.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div>
      <Link to='/' rel='noopener noreferrer'>
        <h1 className={styles.heading}>Portfolio</h1>
      </Link>
    </div>
  );
}
