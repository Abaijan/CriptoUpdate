import React, { useContext, useEffect } from 'react'
import { CustomContext } from '../context/Context'
import { ArrowRightIcon, TrendingDown, TrendingUp } from '../icons/Icon'
import { Link } from 'react-router-dom'
import dayjs from 'dayjs'
import { useAxios } from '../hooks/useAxios'

export const FavoriteCoin = ({ coin }) => {
    const { portfolio } = useContext(CustomContext)
    // const { response } = useAxios(`coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`)

    return (
        <div className=''>
            {portfolio?.map((item) => {
                return (
                    <Link to={`coin/${item.id}`}>
                        <div key={item.id} className="font-light mb-2 p-2 border-gray-200 border-2 rounded hover:bg-gray-300 cursor-pointer flex justify-between">
                            <div className="flex items-center gap-1">
                                <p className="font-semibold">{item.market_cap_rank}.</p>
                                <picture>
                                    <img
                                        className="w-6"
                                        src={item.image} alt={item.name} />
                                </picture>
                                <p>{item.name}</p>
                                <small className="text-xs">({item.symbol})</small>
                            </div>
                            <span className={`flex gap-1 ${item.price_change_percentage_24h < 0 ? 'text-red-400' : 'text-green-400'}`}>
                                {item.price_change_percentage_24h < 0 ? <TrendingDown /> : <TrendingUp />}
                                {item.price_change_percentage_24h}
                            </span>
                            <div className='flex items-center gap-5'>
                                <p>
                                    {dayjs(item.atl_date).format('YYYY_DD_MM')}
                                </p>
                            </div>
                            <Link to={`/coin/${item.id}`}>
                                <div className='flex items-center hover:text-red-800 transition-all 0.3'>
                                    More Info
                                    <ArrowRightIcon />
                                </div>
                            </Link>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}
