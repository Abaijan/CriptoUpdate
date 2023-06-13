import React, { useEffect, useState } from 'react'
import { useAxios } from './../hooks/useAxios';
import { CoinsTrending } from './CoinsTrending';
import { Skeleton } from './Skeleton';

export const Trending = () => {
    const { response, loading } = useAxios('search/trending')

    const [value, setValue] = useState('')

    const filteredCoins = response.coins?.filter(coin_result => {
        return coin_result.item.name.toLowerCase().includes(value.toLowerCase())
    })

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
            <form className='wrapper-container' onSubmit={(e) => {
                e.preventDefault()
            }}>
                <input
                    type="text"
                    className='
                    w-72 
                    h-8 
                    px-4
                    py-2 
                    rounded border 
                    border-gray-300 
                    bg-white 
                    text-gray-700 
                    placeholder-gray-400 
                    focus:outline-none 
                    focus:border-blue-500 
                    focus:ring-blue-500
                '
                    onChange={(event) => setValue(event.target.value)}
                />
            </form>
            <h1 className='text-2xl mb-2 border-b'>
                Trending
            </h1>
            {response && filteredCoins?.map((coin) => {
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
