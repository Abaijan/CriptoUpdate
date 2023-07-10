import React, { useState } from 'react'
import { useAxios } from '../hooks/useAxios'
import { CoinsMarkets } from './CoinsMarkets';
import { SearchIcon } from '../icons/Icon';

export const Markets = () => {

    const { response } = useAxios(`coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`)
    const [value, setValue] = useState('')

    const filteredCoins = response?.filter(coin_result => {
        return coin_result.name.toLowerCase().includes(value.toLowerCase())
    })

    return (
        <section className='mt-8'>
            <form className='wrapper-container relative  ' onSubmit={(e) => {
                e.preventDefault()
            }}>
                <h1 className='text-2xl mb-5 border-b'>Markets</h1>
                <input
                    type="text"
                    className='
                    mb-5
                    z-0
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
                placeholder='Search Coin'
                    onChange={(event) => setValue(event.target.value)}
                />
                <button className='absolute left-64 top-14'> 
                    <SearchIcon className="absolute" />
                </button>
            </form>
            {response && filteredCoins?.map((coin) => {
                return (
                    <CoinsMarkets
                        key={coin.id}
                        coin={coin}
                    />
                )
            })}
        </section>
    )
}
