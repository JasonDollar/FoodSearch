import { useEffect, useState } from 'react'
import yelp from '../api/yelp'

export default () => {
  const [results, setResults] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    searchApi('pasta')
  }, [])
  
  const searchApi = async (search) => {
    console.log('hello')
    try {
      const res = await yelp.get(`/search`, {
        params: {
          term: search,
          location: 'warsaw, poland',
          limit: 50
        }
      })
      // console.log(res.data.businesses)
      setResults(res.data.businesses)
    } catch (e) {
      setError(e.message)
    }
  }

  return [searchApi, results, error]
}