import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer JiKi7oX_8fOM9LK-bo5byFyQ6MNXF6WRHumL_Qs-dVNnHCLFdadW6MEIIu04ZAFHUM-JxcCoTSE6qZYqjRJ35SnsvU0HWXKilyqo5M2Z-JVSGpyaTAP9_gO5oieTXXYx'
  }
})