import React, { useContext } from 'react'
import { currencyFormat } from '../utils'
import { StarIcon, TrendingDown, TrendingUp } from '../icons/Icon'
import { Link, useParams } from 'react-router-dom'
import { CustomContext } from '../context/Context'
import { useAxios } from '../hooks/useAxios'

export const CoinsMarkets = ({ coin }) => {

    const { count, setCount, portfolio, setPortfolio } = useContext(CustomContext)
    const { response } = useAxios(`coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`)


    const AddProduct = () => {
        if (!response) {
            setPortfolio(response)
            setCount(count + 1)
        } else {
            alert('already have')
        }
    }

    console.log(portfolio);

    return (
        <>
            <span className='cursor-pointer' onClick={AddProduct}>
                <StarIcon />
            </span>
            <Link to={`/coin/${coin.id}`}>
                <div className="grid grid-cols-3 md:grid-cols-4 font-light p-2 rounded border-gray-200 border-b hover:bg-gray-300 transition-all-3">
                    <div className='flex items-center gap-1 w-full'>
                        <p className='mr-10'>{coin.market_cap_rank}</p>
                        <img className='w-6' src={coin.image} alt={coin.name} />
                        <p>{coin.name}</p>
                        <span className='text-xs'>({coin.symbol})</span>
                    </div>
                    <span className='w-full text-center'>
                        {currencyFormat(coin.current_price)}
                    </span>
                    <span className={`flex gap-1 ${coin.price_change_percentage_24h < 0 ? 'text-red-400' : 'text-green-400'}`}>
                        {coin.price_change_percentage_24h < 0 ? <TrendingDown /> : <TrendingUp />}
                        {coin.price_change_percentage_24h}
                    </span>
                    <div className='hidden sm:block'>
                        <p className='font-bold'>Market Cap</p>
                        <span>
                            {currencyFormat(coin.market_cap)}
                        </span>
                    </div>
                </div>
            </Link>
        </>
    )
}
