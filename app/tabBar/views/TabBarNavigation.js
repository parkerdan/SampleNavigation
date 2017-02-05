'use strict'
// React
import React from 'react'
import { BackAndroid } from 'react-native'
// Navigation
import { TabNavigator, addNavigationHelpers } from 'react-navigation'
import { routeConfiguration, tabBarConfiguration } from '../navigationConfiguration'
//Redux
import { connect } from 'react-redux'
const TabBar = TabNavigator(routeConfiguration,tabBarConfiguration)
const mapStateToProps = (state) => {
 return {
  navigationState: state.tabBar
  }
}
const mapDispatchToProps = (dispatch) => {
  return { dispatch }
}
class TabBarNavigation extends React.Component {

  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', this.handleBackAction);
  }

  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress', this.handleBackAction)
  }

  handleBackAction = () => {
    if (this.props.navigationState.index === 0) {
      return false
    } else {
      this.navigator.props.navigation.goBack('TabBarBack')
      return true
    }
  }

  render(){
    const { dispatch, navigationState } = this.props
    return (
      <TabBar
        ref={ (ref) =>  this.navigator = ref  }
        navigation={
          addNavigationHelpers({
            dispatch: dispatch,
            state: navigationState,
          })
        }
      />
    )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TabBarNavigation)
