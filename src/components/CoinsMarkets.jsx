import React, { useContext, useEffect } from 'react';
import { currencyFormat } from '../utils';
import { StarIcon, TrendingDown, TrendingUp } from '../icons/Icon';
import { Link } from 'react-router-dom';
import { CustomContext } from '../context/Context';

export const CoinsMarkets = ({ coin }) => {
    const { count, setCount, portfolio, AddProductToPortfolio } = useContext(CustomContext);

    const handleAddToPortfolio = () => {
        const productExists = portfolio.some((product) => coin.id === product.id);

        if (!productExists) {
            AddProductToPortfolio(coin);
            setCount(count + 1);
        } else {
            alert('Product already in the basket');
        }
    };

    return (
        <>
            <span className='cursor-pointer' onClick={handleAddToPortfolio}>
                <StarIcon />
            </span>
            <Link to={`/coin/${coin.id}`}>
                <div className='grid grid-cols-3 md:grid-cols-4 font-light p-2 rounded border-gray-200 border-b hover:bg-gray-300 transition-all-3'>
                    <div className='flex items-center gap-1 w-full'>
                        <p className='mr-10'>{coin.market_cap_rank}</p>
                        <img className='w-6' src={coin.image} alt={coin.name} />
                        <p>{coin.name}</p>
                        <span className='text-xs'>({coin.symbol})</span>
                    </div>
                    <span className='w-full text-center'>{currencyFormat(coin.current_price)}</span>
                    <span className={`flex gap-1 ${coin.price_change_percentage_24h < 0 ? 'text-red-400' : 'text-green-400'}`}>
                        {coin.price_change_percentage_24h < 0 ? <TrendingDown /> : <TrendingUp />}
                        {coin.price_change_percentage_24h}
                    </span>
                    <div className='hidden sm:block'>
                        <p className='font-bold'>Market Cap</p>
                        <span>{currencyFormat(coin.market_cap)}</span>
                    </div>
                </div>
            </Link>
        </>
    );
};
