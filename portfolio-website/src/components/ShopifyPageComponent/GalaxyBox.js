import React from 'react';
import Footer from '../FooterComponent/Footer';

import styles from './shopify.module.css';

function GalaxyBox() {
  return (
    <div>
      <h1>GalaxyBox Stars Shopify store</h1>

      <div className={styles.container}>
        <iframe
          src='https://www.loom.com/embed/279dd28705284caba32d9d13cc56e8ee?sid=71f414c4-7ad4-4208-a967-976d1c41431c?hide_share=true?hide_owner=true'
          title='Example Website'
          frameborder='0'
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
        ></iframe>
      </div>
      <Footer/>
    </div>
    
  );
  
}

export default GalaxyBox;
