import React from 'react'
import styles from '../styles/home.module.css'

const Home = () => {
    return (
        <>
            <div className={styles.screen}>
                <h2>Welcome to the Homepage</h2>
                <h3>Here you can find and move to all available projects</h3>
                <div className={styles.projectSection}>
                    <div>
                        <h1>Project 1</h1>
                    </div>
                    <div>
                        <h1>Project 2</h1>
                    </div>
                    <div>
                        <h1>Project 3</h1>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home