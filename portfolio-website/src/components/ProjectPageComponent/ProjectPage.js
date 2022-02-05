import React from 'react';
import { useParams } from 'react-router-dom';
import { projects } from './projectData';
import styles from './project.module.css';
import Footer from '../FooterComponent/Footer'


export default function ProjectPage() {
  const { projectName } = useParams();

  return (
    <div className={styles.container}>
    <div >
      {/* <img className={styles.mainImage} src={projects[projectName].topPricingImage} alt=''/> */}
    </div>
    <h1 className={styles.heading}>{projects[projectName].title}</h1>
      {/* <p>{projects[projectName].description}</p> */}
      <img 
        className={styles.backgroundImage}
        src={projects[projectName].image}
        alt='projects'
      />
      <Footer/>
    </div>
  );
}
