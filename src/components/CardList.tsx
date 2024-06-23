import React from 'react'
import Card from './Card';
import { Pagination } from '@mui/material';

const CardList = ({ pokemon, found, countNumber, setPage, setSearchInput }: any) => {
    return (
        <>
            {!found && <p>Not Found</p>}
            {found && pokemon.map((poke: any, index: any) => {
                return (
                    <Card
                        key={index}
                        name={poke.name}
                        setSearchInput={setSearchInput}
                    />
                );
            }

            )}
        </>
    )
}

export default CardList