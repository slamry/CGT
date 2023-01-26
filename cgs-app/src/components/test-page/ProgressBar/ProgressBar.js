import React from 'react'
import styles from './ProgressBar.module.css'

const ProgressBar = ({ progress }) => {

    const Childdiv = {
        width: `${progress}%`,
    }

    return (
        <div className={styles.progressBar}>
            <div style={Childdiv} className={styles.activeProgressLine}>
            </div>
        </div>
    )
}

export default ProgressBar;
