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

const Navigator = StackNavigator(routeConfiguration,stackNavigatorConfiguration)

const mapStateToProps = (state) => {
 return {
  navigationState: state.tabOne
  }
}

const mapDispatchToProps = (dispatch) => {
  return { dispatch }
}

class TabOneNavigation extends React.Component {
  static navigationOptions = {
    tabBar: {
      label: 'Tab One',
      icon: ({ tintColor }) => <Icon name={'cogs'} size={20} color={ tintColor } />,
    }
  }

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
export default connect(mapStateToProps,mapDispatchToProps)(TabOneNavigation)
