import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Content from './components/Content'
import Footer from './components/Footer'
import Form from './components/Form'

class App extends Component {
  state = {
    city: '',
    countryCode: ''
  }

  render() {
    return (
      <View style={styles.container}>
        <Form
          onChangeText={text => this.setState({ city: text })}
        />
        <Content />
        <Footer />
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