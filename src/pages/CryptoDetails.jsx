import React from 'react'
import { CoinDetail } from '../components/CoinDetails';
import { HistoryChart } from './../components/HistoryChart';

export const CryptoDetails = () => {
    return (
        <div className='wrapper-container mt-8'>
            <HistoryChart />
            <CoinDetail />
        </div>
    )
}
