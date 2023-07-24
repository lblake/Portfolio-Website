import React from 'react';
import styles from './success.module.css';
import Footer from '../FooterComponent/Footer';
import image from './success-image.png';

function success() {
  return (
    <div className={styles.container}>
      <p className={styles.heading}>Your Message Has Been Recieved</p> 

      <img className={styles.successImage} src={image} alt='' />
      <p className={styles.text}>
        Thank you for contacting me! I appreciate your email and the potential
        opportunity of working with you on your project(s). I will review your message
        and contact you soon. I look forward to speaking to & working with you soon.
      </p>
      <Footer />
    </div>
  );
}

export default success;
