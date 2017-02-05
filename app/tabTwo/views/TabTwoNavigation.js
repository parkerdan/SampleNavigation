'use strict'
// React
import React from 'react'
// Navigation
import { StackNavigator, addNavigationHelpers } from 'react-navigation'
import { routeConfiguration, stackNavigatorConfiguration } from '../navigationConfiguration'
//Redux
import { connect } from 'react-redux'
// Icon
import Icon from 'react-native-vector-icons/FontAwesome'

const NavigatorTabTwo = StackNavigator(routeConfiguration,stackNavigatorConfiguration)
const mapStateToProps = (state) => {
 return {
  navigationState: state.tabTwo
  }
}
const mapDispatchToProps = (dispatch) => {
  return { dispatch }
}
class TabTwoNavigation extends React.Component {
  static navigationOptions = {
    tabBar:{
      label: 'Tab Two',
      icon: ({ tintColor }) => <Icon size={ 20 } name={ 'taxi' } color={ tintColor }/>
    }
  }

render(){
    const { dispatch, navigationState} = this.props
return (
      <NavigatorTabTwo
        navigation={
          addNavigationHelpers({
            dispatch: dispatch,
            state: navigationState
          })
        }
      />
    )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TabTwoNavigation)
