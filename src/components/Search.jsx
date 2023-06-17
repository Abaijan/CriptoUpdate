import React, { useEffect, useState } from 'react'
import { SearchIcon } from '../icons/Icon'
import { useParams } from 'react-router-dom'
import { useAxios } from '../hooks/useAxios'

const Search = () => {

    //data
    const { id } = useParams()
    const { response } = useAxios(`/search?query=${id}`)
    const data = [response.categories]
    // console.log(data[0])

    const [searchTerm, setSearchTerm] = useState('')
    const [searchCoins, setSearchCoins] = useState(data)
    const [datas, setDatas] = useState([])


    
    useEffect(() => {
        const Debounse = setTimeout(() => {
            const filterCoins = () => {
                if (!searchTerm) {
                    return data;
                } else(
                    data[0]?.map((result) => {
                        setDatas(result)
                     return result
                    }))
        
            };
            console.log(filterCoins);
           setSearchCoins(filterCoins)
            console.log(searchCoins)
        }, 500);
        return () => clearTimeout(Debounse)
    }, [searchTerm])
    return (
        <div >
            <form action="" className='flex content-center items-center'
                onSubmit={(e) => e.preventDefault()}
            >
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    title='Example: Bitcoin'
                    placeholder='Search For Coin  '
                    id='searchInput'
                    className='shadow appearance-none border border-red-500 rounded w-72 py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************'
                />
                <label htmlFor="inputSearch" className='z-10 absolute text-black right-16'><SearchIcon /></label>
            </form>
            {/* <ul className='z-10'>
                {searchCoins.map((coin, index) => {
                    return (
                        <li key={index}>{coin}</li>
                    )
                })}
                <li>some text   </li>
            </ul> */}
        </div>
    )
}

export default Search