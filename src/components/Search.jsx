import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAxios } from '../hooks/useAxios'

export const Search = () => {
    const { id } = useParams()
    const { response } = useAxios(`/search?query=${id}`)
    const data = response.categories;

    console.log(data);

    const [searchTerm, setSearchTerm] = useState('')
    const [searchCoins, setSearchCoins] = useState(data)
    const [filteredCoins, setFilteredCoins] = useState([])

    const filterCoins = (searchText, listOfCoins) => {
        if (!searchText) {
            return listOfCoins;
        }

        return listOfCoins?.filter(({ coin_result }) => {
            return coin_result?.toLowerCase()?.includes(searchText?.toLowerCase())
        })

    };

    useEffect(() => {

        const debounce = setTimeout(() => {
            const filterResult = filterCoins(searchTerm, searchCoins)
            setFilteredCoins(filterResult)
        }, 500);
        return () => clearTimeout(debounce)
    }, [searchTerm, searchCoins])

    return (
        <div>
            <form
                className='flex content-center items-center'
                onSubmit={(e) => e.preventDefault()}
            >
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    title='Example: Bitcoin'
                    placeholder='Search For Coin'
                    id='searchInput'
                    className='shadow appearance-none border border-red-500 rounded w-72 py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline'
                />
            </form>
            <ul className='z-10'>
                {filteredCoins?.map((coin, index) => {
                    return (
                        <li key={index}>{coin}</li>
                    )
                })}
            </ul>
        </div>
    )
}
