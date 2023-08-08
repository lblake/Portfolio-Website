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

export default ZayYo;
