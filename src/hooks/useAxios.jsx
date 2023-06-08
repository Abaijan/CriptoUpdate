import axios from 'axios'
import { useEffect, useState } from 'react'

export const useAxios = (param) => {

    const [response, setResponse] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    axios.defaults.baseURL = 'https://api.coingecko.com/api/v3'

    const fetchDataFromApi = async (param) => {
        try {
            setLoading(true)
            const result = await axios(param)
            setResponse(result.data)
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchDataFromApi(param)
    }, [])

    return { response, loading, error }
}
