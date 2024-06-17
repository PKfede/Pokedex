import React, { useState } from 'react'
import styles from '../styles/cardStats.module.css'
import typeLibrary from '../assets/typesImg/assetIndex'

const CardStats = ({ data }: any) => {
    const { types } = data
    const nameType = []
    const imageType = []
    let count = 0
    if (types) {
        for (const typeName of types) {
            nameType.push(typeName.type.name)
            imageType.push(typeName.type.url)
        }

    }




    return (
        <div className={styles.CardStats}>
            <h1>{data.name} </h1>
            <div className={styles.Layout}>
                <img className={styles.PokeImage}
                    src={`https://projectpokemon.org/images/normal-sprite/${data.name}.gif`}
                />
                <div className={styles.StatsValues}>
                    <p>Weight: {data.weight} </p>
                    {nameType.map((val) => {
                        count++
                        return <p><img src={Object(typeLibrary)[val]} alt="" /> </p>
                        // return <p>type {count}: {val} <img src={Object(typeLibrary)[val]} alt="" /> </p>
                    })}
                </div>
            </div>

        </div>)

}

export default CardStats