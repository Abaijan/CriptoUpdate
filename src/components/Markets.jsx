import React, { useState } from 'react'
import { useAxios } from '../hooks/useAxios'
import { CoinsMarkets } from './CoinsMarkets';

export const Markets = () => {

    const { response } = useAxios(`coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`)
    const [value, setValue] = useState('')
    
    const filteredCoins = response?.filter(coin_result => {
        return coin_result.name.toLowerCase().includes(value.toLowerCase())
    })

    return (
        <section className='mt-8'>
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
            <h1 className='text-2xl mb-2 border-b'>Markets</h1>
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
