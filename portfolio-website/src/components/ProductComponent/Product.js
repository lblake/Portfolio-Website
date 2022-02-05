import React from 'react';
import styles from './product.module.css';
import { Link } from 'react-router-dom';

export default function Product({ link, img, description }) {
  return (
    <div className={styles.product}>
      <div className={styles.productBrowser}>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
      </div>
      <div className={styles.container}>
        <img src={img} alt='' className={styles.productImage} />
        <div className={styles.overLay}>
          <div className={styles.text}>{description}</div>
          <Link
            className={styles.button}
            to={link}
        
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}
