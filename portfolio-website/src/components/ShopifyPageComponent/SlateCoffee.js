import React from 'react';
import Footer from '../FooterComponent/Footer';
import styles from './shopify.module.css';
import NavBar from '../NavBarComponent/NavBar';

function SlateCoffee() {
  return (
    <div>
    <NavBar/>
      <h1 className={styles.heading}>Beverage Brand Shopify Store Demo</h1>
      <div className={styles.container}>
        <iframe
          src={'https://www.youtube.com/embed/HDT19bdcIbw'}
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
