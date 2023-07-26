import React from 'react';
import { useParams } from 'react-router-dom';
import { projects } from './projectData';
import styles from './project.module.css';
import Footer from '../FooterComponent/Footer';
import NavBar from '../NavBarComponent/NavBar'

export default function ProjectPage() {
  const { projectName } = useParams();

  
  return (
    <div className={styles.container}>
    <NavBar/>
      <div className={styles.backgroundImage}
      style={{backgroundImage: `url(${projects[projectName].image})`}}
      >
      </div>

      <div className={styles.content}>
        <h1 className={styles.heading}>{projects[projectName].title}</h1>
        <p
          className={styles.description}
          dangerouslySetInnerHTML={{
            __html: projects[projectName].description,
          }}
        ></p>
        <div className={styles.center}>
          <a
            className={styles.button}
            href={projects[projectName].link}
            target='_blank'
            rel='noopener noreferrer'
          >
            Live Demo
          </a>
          <a
            className={styles.button}
            href={projects[projectName].github}
            target='_blank'
            rel='noopener noreferrer'
          >
            Github
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
