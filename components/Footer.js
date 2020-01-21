import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import moment from 'moment'

const Footer = () => (
  <View style={styles.footer}>
    <View style={{ justifyContent:'center', alignItems: 'center', flex: 1 }}>
      <Text style={{ fontSize: 15, color: 'red', paddingBottom: 20, backgroundColor: 'transparent'}}>
        {moment().format('LLLL')}
      </Text>
    </View>
    <View style={{flexDirection: 'row', paddingHorizontal: 20, flex: 3, paddingTop: 20 }}>
      <View style={{flex: 1}}>
        <Text style={styles.textLabel}>
          Pressure
        </Text>
        <Text style={{fontSize: 30, backgroundColor: 'transparent'}}>
          50
        </Text>
      </View>
      <View style={{flex: 1}}>
        <Text style={styles.textLabel}>
          Wind Speed
        </Text>
        <Text style={{fontSize: 30, backgroundColor: 'transparent'}}>
          60
        </Text>
      </View>
      <View style={{flex: 1}}>
        <Text style={styles.textLabel}>
          Min Temp
        </Text>
        <Text style={{fontSize: 30, backgroundColor: 'transparent'}}>
          15
        </Text>
      </View>
    </View>
  </View>
)

export default Footer

const styles = StyleSheet.create({
  footer: {
    flex: 3,
    width: '100%'
  },
  textLabel: {
    backgroundColor: 'transparent'
  }
})