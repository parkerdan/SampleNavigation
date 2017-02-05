'use strict'
// React
import React from 'react'
// Navigation
import { StackNavigator, addNavigationHelpers } from 'react-navigation'
import { routeConfiguration, stackNavigatorConfiguration } from '../navigationConfiguration'
//Redux
import { connect } from 'react-redux'
const Navigator = StackNavigator(routeConfiguration,stackNavigatorConfiguration)
const mapStateToProps = (state) => {
 return {
  navigationState: state.tabTwo
  }
}
const mapDispatchToProps = (dispatch) => {
  return { dispatch }
}
class TabTwoNavigation extends React.Component {
render(){
    const { dispatch, navigationState} = this.props
return (
      <Navigator
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
