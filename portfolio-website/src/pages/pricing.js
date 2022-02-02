import React from 'react';
import pricing_image from './images/Pricing.jpg';
import styles from './pages.module.css';
import { useParams } from 'react-router-dom';

export default function Pricing() {
  const { projectName } = useParams();
  return (
    <div className={styles.image}>
      <img src={pricing_image} alt='pricing'></img>
    </div>
  );
}
