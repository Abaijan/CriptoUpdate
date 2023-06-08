import React from 'react'
import { useAxios } from '../hooks/useAxios'
import { CoinsMarkets } from './CoinsMarkets';

export const Markets = () => {

    const { response } = useAxios(`coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`)

    return (
        <section className='mt-8'>
            <h1 className='text-2xl mb-2'>Markets</h1>
            {response && response.map((coin) => {
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
