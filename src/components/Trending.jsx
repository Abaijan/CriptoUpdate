import React, { useEffect, useState } from 'react'
import { useAxios } from './../hooks/useAxios';
import { CoinsTrending } from './CoinsTrending';
import { Skeleton } from './Skeleton';

export const Trending = () => {
    // data = {  data.coins (array with objects)  }
    const { response, loading } = useAxios('search/trending')

    if (loading) {
        return (
            <div className='wrapper-container'>
                <Skeleton className='h-8 w-32' />
                <Skeleton className='h-8 w-full mt-2' />
                <Skeleton className='h-8 w-full mt-2' />
                <Skeleton className='h-8 w-full mt-2' />
                <Skeleton className='h-8 w-full mt-2' />
            </div>
        )
    }

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
