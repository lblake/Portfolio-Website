import React from 'react'
import styles  from "./intro.module.css"

function Intro() {
    return (
        <div className={styles.intro}>
            <div className={styles.introRight}>Right
            <div className={styles.introLeftWrapper}>
                <h2 className={styles.introIntro}>Hello, My name is</h2>
                <h1 className={styles.introName}>Lloyd Blake</h1>
            </div>
            </div>
            <div className={styles.introLeft}>Left</div>
        </div>
    )
}

export default Intro
