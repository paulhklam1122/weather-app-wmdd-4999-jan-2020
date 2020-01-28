import React, { Component } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

import Content from './components/Content'
import Footer from './components/Footer'
import Form from './components/Form'

const API_KEY = 'c8c4865b1ee49f77a87780ffabb644b3'

const images = {
  Clear: 'http://ayay.co.uk/mobiles/weather/strange/northern-lights.jpg',
  Rain: 'https://i.pinimg.com/736x/54/59/d7/5459d741279e8d72661990f52774473f--cell-phone-wallpapers-gif-photos.jpg'
}
class App extends Component {
  state = {
    city: '',
    country: '',
    description: '',
    minTemp: '',
    pressure: '',
    temp: '',
    windSpeed: ''
  }

  fetchData = () => {
    const { city } = this.state
    console.log('fetching data')
    this.fetchCityData(city)
  }

  fetchCityData = async (city) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const apiCall = await fetch(url)

    const response = await apiCall.json()
    console.log('response', response)

    this.setState({
      country: response.sys.country,
      description: response.weather[0].main,
      minTemp: response.main.temp_min,
      pressure: response.main.pressure,
      temp: response.main.temp,
      windSpeed: response.wind.speed
    })
  }

  render() {
    const { city, country, description, minTemp, pressure, temp, windSpeed } = this.state
    return (
      <View style={styles.container}>
        <Image style={{ position: 'absolute', width: '100%', height: '100%' }} source={{ uri: images[description]}} />
        <Form
          onChangeText={text => this.setState({ city: text })}
          onSubmit={this.fetchData}
        />
        <Content
          country={country}
          city={city}
          temp={temp}
        />
        <Footer
          pressure={pressure}
          windSpeed={windSpeed}
          minTemp={minTemp}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default App