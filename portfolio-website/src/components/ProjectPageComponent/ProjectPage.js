import React from 'react';
import { useParams } from 'react-router-dom';
import pricing_image from './images/Pricing.jpg';
import blocks_image from './images/Blocks.jpg';
import filter_image from './images/Filter.jpg';
import weather_image from './images/Weather.jpeg';
import styles from './project.module.css';

export default function ProjectPage() {
  const { projectName } = useParams();

  return (
    <div>
      <img
        className={styles.backgroundImage}
        src={pricing_image}
        alt='projects'
      />
    </div>
  );
}
