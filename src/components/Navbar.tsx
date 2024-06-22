import React from 'react'
import styles from '../styles/navBar.module.css'
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className={styles.NavBar}>
            <button className={styles.Button}><Link to="/Home">Home</Link></button>
            <button className={styles.Button}><Link to="/Pokedex">Pokedex</Link></button>
        </div>
    )
}

export default Navbar