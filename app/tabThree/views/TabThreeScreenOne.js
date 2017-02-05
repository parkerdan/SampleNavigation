'use strict'
import React from 'react'
import { View, Text, TouchableOpacity, TouchableHighlight } from 'react-native'
export default class TabThreeScreenOne extends React.Component {
  render(){
    return(
      <View style={{
        flex:1,
        backgroundColor:'aqua',
        alignItems:'center',
        justifyContent:'center'
      }}>
        <TouchableHighlight
          onPress={ () => console.log('hi') }
          style={{
          padding:30,
          backgroundColor:'deeppink'
        }}>
          <Text>
            {'TouchableHighlight'}
          </Text>
        </TouchableHighlight>

        <TouchableOpacity
          onPress={
            () => {
              console.log('hi, new screen please')
              // this.props.navigation.navigate('TabThreeScreenTwo')
            }
          }
          style={{
            padding:20,
            backgroundColor:'red',
            borderRadius:20,
            marginBottom:50,
            zIndex:99
          }}>
          <Text>{' Go to Screen Two '}</Text>
        </TouchableOpacity>
        <Text>{ 'Tab Three Screen One' }</Text>
      </View>
    )
  }
}
