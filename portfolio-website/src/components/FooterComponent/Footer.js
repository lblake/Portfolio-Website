import React from 'react';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <p>@ 2023 <a href="https://lloydblake.dev/" > <i class="fa fa-globe"></i> lloydblake.dev</a> POWERED BY REACT </p>
    </div>
  );
}
