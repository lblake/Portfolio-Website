import React from 'react';
import Footer from '../FooterComponent/Footer';
import styles from './shopify.module.css';
// import NavBar from '../NavBarComponent/NavBar';

function GalaxyBox() {
  return (
    <div>
      <h1 className={styles.heading}>Single Product Shopify Store Demo</h1>

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

export default GalaxyBox;
