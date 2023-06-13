import React, { useContext } from 'react'
import { CustomContext } from '../context/Context'

export const FavoriteCoin = () => {

    const { portfolio } = useContext(CustomContext)

    return (
        <div className=''>
            {portfolio?.map((el, index) => (
                <div key={index} className='flex items-center gap-10 text-white'>
                    <li>{el.name}</li>
                </div>
            ))}
        </div>
    )
}
