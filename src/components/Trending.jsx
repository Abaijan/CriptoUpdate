import React, { useEffect, useState } from 'react'
import { useAxios } from './../hooks/useAxios';
import { CoinsTrending } from './CoinsTrending';

export const Trending = () => {
    // data = {  data.coins (array with objects)  }
    const { response } = useAxios('search/trending')

    return (
        <div className='mt-8'>
            <h1 className='text-2xl mb-2'>
                Trending
            </h1>
            {response && response.coins?.map((coin) => {
                return (
                    <CoinsTrending
                        key={coin.item.coin_id}
                        coin={coin.item}
                    />
                )
            })}
        </div>
    )
}
