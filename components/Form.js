import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'

const Form = (props) => (
  <View style={styles.header}>
    <TextInput
      onChangeText={props.onChangeText}
      onEndEditing={props.onSubmit}
      style={styles.textInput}
    />
  </View>
)

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  textInput: {
    width: 300,
    height: 40,
    borderColor: 'grey',
    borderWidth: 2,
    padding: 5
  }
})

export default Form
