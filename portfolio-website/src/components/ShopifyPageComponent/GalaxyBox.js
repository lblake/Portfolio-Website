import React from 'react';
import Footer from '../FooterComponent/Footer';
import styles from './shopify.module.css';
import NavBar from '../NavBarComponent/NavBar';

function GalaxyBox() {
  return (
    <div>
  <NavBar/>
      <h1 className={styles.heading}>Single Product Shopify Store Demo</h1>
      
      <div className={styles.container}>
        <iframe
          src={'https://www.youtube.com/embed/9b9Vf_4-bXI'}
          title='Shopify Store'
          frameBorder='0'
          webkitallowfullscreen
          mozallowfullscreen
          allowFullScreen
        ></iframe>
      </div>
      <Footer />
    </div>
  );
}

export default GalaxyBox;
