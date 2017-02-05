'use strict'
import React from 'react'
import { View, Text } from 'react-native'
export default class TabTwoScreenOne extends React.Component {
  render(){
    return(
      <View style={{
        flex:1,
        backgroundColor:'yellow',
        alignItems:'center',
        justifyContent:'center'
      }}>
        <Text>{ 'Tab Two Screen One' }</Text>
      </View>
    )
  }
}
