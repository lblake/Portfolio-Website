import React from 'react';
import styles from './error.module.css'




export default function ErrorPage() {
  return (
      <div >
         <h1 className={styles.error}>404 Page not found</h1>
         <a className={styles.error} href="https://lloydblake.dev/">Navigate to Portfolio Page</a>
      
      </div>
  )
}
