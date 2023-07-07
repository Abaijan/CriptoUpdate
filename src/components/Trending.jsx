import React, { useEffect, useState } from 'react'
import { useAxios } from './../hooks/useAxios';
import { CoinsTrending } from './CoinsTrending';
import { Skeleton } from './Skeleton';

export const Trending = () => {
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
            <h1 className='text-2xl mb-2 border-b'>
                Trending
            </h1>
            <div className='flex flex-wrap justify-around gap-x-8 w-10/12 m-auto gap-y-8 '>
                {response && response?.coins?.map((coin) => {
                    return (
                        <CoinsTrending
                            className=''
                            key={coin.item.coin_id}
                            coin={coin.item}
                        />
                    )
                })}
            </div>
        </div>
    )
}
