import React, {useState, useEffect} from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar'
import ResultsList from '../components/ResultsList'
import useResults from '../hooks/useResults'

const SearchScreen = ({  }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchApi, results, error] = useResults()

  const filterResultsByPrice = (price) => {
    return results.filter(item => item.price === price)
  }

  return (
    <>
      <SearchBar searchTerm={searchTerm} onTermChange={setSearchTerm} onTermSubmit={searchApi} />
      {/* <Text>We have found {results.length} results</Text> */}
      {error ? <Text>{error}</Text> : null}
      <ScrollView>
        <ResultsList title="Cost Effective" results={filterResultsByPrice('$')} />
        <ResultsList title="Bit Pricier" results={filterResultsByPrice('$$')} />
        <ResultsList title="Big Spender" results={filterResultsByPrice('$$$')} />

      </ScrollView>
    </>
  )
}

export default SearchScreen
