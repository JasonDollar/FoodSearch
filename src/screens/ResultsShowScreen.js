import React, { useEffect, useState } from 'react'
import { View, Text, Image, FlatList, StyleSheet } from 'react-native'
import yelp from '../api/yelp'

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null)
  const getResult = async (id) => {
    const res = await yelp.get(`/${id}`)
    setResult(res.data)
  }
  useEffect(() => {
    const id = navigation.getParam('id')
    getResult(id)
  }, [])
  // useEffect(() => {
  //   console.log(result)
  // }, [result])
  if (!result) {
    return null
  }
  return (
    <View>
      <Text>{result.name}</Text>

        <FlatList 
          data={result.photos}
          keyExtractor={(item) => item}
          renderItem={({item}) => console.log(item) || <Image style={styles.image} source={{ uri: item }} /> }
        />

    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300
  }
})


export default ResultsShowScreen
