'use strict'
// React
import React from 'react'
// Navigation
import { StackNavigator, addNavigationHelpers } from 'react-navigation'
import { routeConfiguration, stackNavigatorConfiguration } from '../navigationConfiguration'
//Redux
import { connect } from 'react-redux'
const NavigatorTabThree = StackNavigator(routeConfiguration,stackNavigatorConfiguration)
const mapStateToProps = (state) => {
 return {
  navigationState: state.tabThree
  }
}
const mapDispatchToProps = (dispatch) => {
  return { dispatch }
}
class TabThreeNavigation extends React.Component {
render(){
    const { dispatch, navigationState} = this.props
return (
      <NavigatorTabThree
        navigation={addNavigationHelpers({
          dispatch: dispatch,
          state: navigationState
        })}
      />
    )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TabThreeNavigation)
