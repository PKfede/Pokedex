import React from 'react'
import styles from '../styles/card.module.css'

const Card = ({ name, setSearchInput }: any) => {
    return (

        <div className={styles.Card} >
            <button className={styles.PokeImage} onClick={() => { setSearchInput(name) }}>
                <img className={styles.PokeImage}
                    src={`https://projectpokemon.org/images/normal-sprite/${name}.gif`}
                />
            </button>

            <div>
                {name}
            </div>
        </div>

    )
}

export default Card



