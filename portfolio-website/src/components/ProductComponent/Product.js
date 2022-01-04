import React from 'react';
import styles from './product.module.css';

export default function Product({ link, img, description }) {
  return (
    <div className={styles.product}>
      <div className={styles.productBrowser}>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        {/* <div className={styles.productTitle}></div> */}
      </div>
      <div className={styles.container}>
        {/* <a href={link} target='_blank' rel='noopener noreferrer'> */}
          <img src={img} alt='' className={styles.productImage} />
        {/* </a> */}
        <div className={styles.overLay}>
          <div className={styles.text}>{description}</div>
          <a href={link} target='_blank' rel='noopener noreferrer'>
            <button className={styles.button}>More Info</button>
          </a>
        </div>
      </div>
    </div>
  );
}
