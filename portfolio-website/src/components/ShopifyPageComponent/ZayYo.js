import React from 'react';
import Footer from '../FooterComponent/Footer';
import styles from './shopify.module.css';
import NavBar from '../NavBarComponent/NavBar';

function ZayYo() {
  return (
    <div>
    <NavBar/>
      <h1 className={styles.heading}>Fashion Brand Shopify Store Demo</h1>
      <div className={styles.container}>
         <iframe
         src={'https://www.youtube.com/embed/hWn2E7o435I'}
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

export default ZayYo;
