import React, { useState } from 'react'
import styles from '../styles/cardStats.module.css'
import typeLibrary from '../assets/typesImg/assetIndex'

const CardStats = ({ data }: any) => {



    return (
        <div className={styles.CardStats}>
            <h1>{(data.name).toUpperCase()} </h1>
            <div className={styles.Layout}>
                <div className={styles.LeftLayout}>
                    <img className={styles.PokeImage}
                        src={`https://projectpokemon.org/images/normal-sprite/${data.name}.gif`}
                    />
                    {data.types.map((val: any) => {
                        return <p><img src={Object(typeLibrary)[val.type.name]} alt="" /> </p>
                    })}
                </div>
                <div className={styles.RightLayout}>
                    <p>Weight: {data.weight} </p>
                    {data.stats.map((val: any) => {
                        return <p>{(val.stat.name.toUpperCase())}: {val.base_stat} </p>
                    })}
                </div>
            </div>

        </div>
    )

}

export default CardStats