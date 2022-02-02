import React from 'react';
import pricing_image from './Pricing.jpg'
import styles from './pricing.module.css';

export default function Pricing() {
  return (
    <div>
      <img src={pricing_image} alt='pricing' className={styles.image}></img>
    </div>
  );
}
