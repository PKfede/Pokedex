import React from 'react'
import styles from "../styles/card.module.css";

const CardRick = ({ val }: any) => {
    return (
        <>
            {
                <div key={val.id} className={styles.Card}>
                    <img className={styles.PokeImage} src={val.image} alt="" />
                    <p> {val.name}</p>
                    <p> gender: {val.gender}</p>
                    <p> species: {val.species}</p>
                    <p> {val.created}</p>
                    <p> status: {val.status}</p>
                </div>

            }
        </>
    )
}

export default CardRick