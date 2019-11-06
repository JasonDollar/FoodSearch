import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import SearchScreen from './src/screens/SearchScreen'
import ResultsShowScreen from './src/screens/ResultsShowScreen'

const navigator = createStackNavigator({
  Search: SearchScreen,
  ResultsShow: ResultsShowScreen
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Business Search'
  }
})

export default createAppContainer(navigator)

/*
Client ID
rK6tmJ4f9Kh5MpquMpfo-w

API Key
JiKi7oX_8fOM9LK-bo5byFyQ6MNXF6WRHumL_Qs-dVNnHCLFdadW6MEIIu04ZAFHUM-JxcCoTSE6qZYqjRJ35SnsvU0HWXKilyqo5M2Z-JVSGpyaTAP9_gO5oieTXXYx

https://api.yelp.com/v3/businesses/{id}
*/