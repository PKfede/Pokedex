import React, { useEffect, useState } from 'react'
import CardListRick from '../components/CardListRick'
import styles from '../styles/app.module.css'

const RickMorty = () => {

    const [list, setList] = useState<any>([])

    const apiCall = async () => {
        const fetchData = await fetch("https://rickandmortyapi.com/api/character")
        const apiData = await fetchData.json()
        console.log(apiData.results);

        setList(apiData.results)

    }

    useEffect(() => {
        apiCall()
    }, [])


    return (
        <>
            <div className={styles.screen}>
                <div className={styles.layout}>
                    {
                        <CardListRick list={list} />
                    }
                </div>
            </div>



        </>

    )
}

export default RickMorty