import React from 'react';
import styles from './services.module.css';

function Services() {
  return (
    <div className={styles.servicesContainer}>
      <h1 className={styles.servicesTitle}>Shopify Services</h1>
      <div className={styles.services}>Setups</div>
      <div className={styles.services}>Migrations</div>
      <div className={styles.services}>Intergations</div>
      <div className={styles.services}>Customizations</div>
    </div>
  );
}

export default Services;
