'use strict'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
export default class TabOneScreenOne extends React.Component {
  render(){
    return(
      <View style={{
        flex:1,
        backgroundColor:'red',
        alignItems:'center',
        justifyContent:'center'
      }}>
        <TouchableOpacity
          onPress={ () => console.log('pressed!') }
          style={{
            padding:20,
            backgroundColor:'yellow'
          }}>
          <Text>{ 'Hi' }</Text>
        </TouchableOpacity>
        <Text>{ 'Tab One Screen One' }</Text>
      </View>
    )
  }
}
