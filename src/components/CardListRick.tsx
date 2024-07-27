import React from 'react'
import CardRick from './CardRick';

const CardListRick = ({ list }: any) => {
    return (
        <>
            {
                list.map((val: any) => {
                    return <CardRick key={val.id} val={val} />
                })
            }
        </>
    )
}

export default CardListRick