import React from 'react'
import { Trending } from '../components/Trending'
import { Markets } from '../components/Markets'

export const CryptoHome = () => {
    return (
        <div className='wrapper-container'>
            <Trending />
            <Markets />
        </div>
    )
}
