import React from 'react';
// import Footer from 'components/FooterComponent/Footer'
import pricing_image from './images/Pricing.jpg';
import styles from './pages.module.css';

export default function Pricing() {
  return (
    <div>
      <img src={pricing_image} alt='pricing' className={styles.image}></img>
      {/* <Footer/>    */}
    </div>
  );
}
