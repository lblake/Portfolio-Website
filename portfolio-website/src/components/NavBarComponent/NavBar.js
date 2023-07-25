import React from 'react';
import styles from './navbar.module.css';
import { Link } from 'react-router-dom';
import image from './icon.png';

export default function NavBar() {
  return (
    <div className={styles.navbar}>
      <Link to='/'>
        {/* <h2 className={styles.heading}>Home</h2> */}
        <img className={styles.icon} src={image} alt='icon' />
      </Link>
      <ul className={styles.navlink}>
        <li className={styles.item}>
          <Link to='/'>
            <h2 className={styles.heading}>Home</h2>
          </Link>
        </li>
        <li className={styles.item}>
          <Link to='/'>
            <h2 className={styles.heading}>About</h2>
          </Link>
        </li>
        <li className={styles.item}>
          <Link to='/'>
            <h2 className={styles.heading}>Contact</h2>
          </Link>
        </li>
        <li className='{styles.item}'>
          <Link to='/'>
            <h2 className={styles.heading}>Contact</h2>
          </Link>
        </li>
      </ul>
    </div>
  );
}
