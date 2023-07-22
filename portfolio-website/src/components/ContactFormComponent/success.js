import React from 'react';
import styles from './success.module.css';
import Footer from '../FooterComponent/Footer';
import image from './zay-confirmation.png';

function success() {
  return (
    <div className={styles.container}>
      {/* <h2>Thank you for your message</h2> */}

      <img className={styles.successImage} src={image} alt='' />
      <p className={styles.text}>
        Thank you for contacting me! I appreciate your email and the potential
        opportunity of working with you on your project(s). I will review your message
        and contact you soon to provide the information you need or to answer
        any questions you have asked me...
      </p>
      <Footer />
    </div>
  );
}

export default success;
