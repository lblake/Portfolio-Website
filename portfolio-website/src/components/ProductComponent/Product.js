import React from 'react';
import styles from './product.module.css';

export default function Product({ link, img }) {
  return (
    <div className={styles.product}>
      <div className={styles.productBrowser}>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
      </div>
      <a href={link} target='_blank' rel='noreferrer'>
        <img src={img} alt='' className={styles.productImage} />
      </a>
    </div>
  );
}
