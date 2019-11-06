import React, { useState } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

const SearchBar = ({searchTerm, onTermChange, onTermSubmit}) => {
  // const [search, setSearch] = useState('')
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput 
        style={styles.inputStyle} 
        value={searchTerm} 
        onChangeText={text => onTermChange(text)} 
        placeholder="Search" 
        autoCapitalize="none"
        autoCorrect={false}
        onEndEditing={() => onTermSubmit(searchTerm)}
      />
    </View>
  )
} 

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginBottom: 10
    // alignItems: 'center'

  },
  inputStyle: {
    // borderColor: 'black',
    // borderWidth: 1,
    // alignSelf: 'stretch',
    flex: 1,
    fontSize: 18
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15
  }
})


export default SearchBar
