import React from 'react';
import Footer from '../FooterComponent/Footer';
import styles from './shopify.module.css';

function SlateCoffee() {
  return (
    <div>
      <h1 className={styles.heading}>Coffee Brand Shopify Store Demo</h1>
      <div className={styles.container}>
        <iframe
          src={'https://app.screencast.com/NWaxwuwt28nYc/e'}
          title='Shopify Store'
          frameborder='0'
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
        ></iframe>
      </div>
      <Footer />
    </div>
  );
}

export default SlateCoffee;
