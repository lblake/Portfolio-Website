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
        <img src={img} alt='' className={styles.productImage} />
        <div className={styles.overLay}>
          <div className={styles.text}>{description}</div>
          <a
            className={styles.button}
            href={link}
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}
