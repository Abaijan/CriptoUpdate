import React from 'react'
import { Trending } from '../components/Trending'
import { Markets } from '../components/Markets'
import { Search } from '../components/Search'

export const CryptoHome = () => {
    return (
        <div className='wrapper-container'>
            <Search />
            <Trending />
            <Markets />
        </div>
    )
}
