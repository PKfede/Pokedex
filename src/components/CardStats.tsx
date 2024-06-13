import React, { useState } from 'react'
import styles from '../styles/card.module.css'

const CardStats = ({ data }: any) => {
    const { types } = data
    const test = []
    if (types) {
        console.log(types)
        for (const typeName of types) {
            test.push(typeName.type.name)
        }
        console.log(test)
    }

    return (
        <div className={styles.Card} >
            <img className={styles.PokeImage}
                src={`https://projectpokemon.org/images/normal-sprite/${data.name}.gif`}
            />
            <div>
                <p>Name: {data.name} </p>
                <p>Weight: {data.weight} </p>
                <p>{test.map((val) => {
                    return <p>type: {val}</p>
                })} </p>


            </div>
        </div>)

}

export default CardStats