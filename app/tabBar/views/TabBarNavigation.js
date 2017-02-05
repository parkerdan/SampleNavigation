'use strict'

// React
import React from 'react'
import { BackAndroid, View } from 'react-native'

// Navigation
import { TabNavigator, addNavigationHelpers } from 'react-navigation'
import { routeConfiguration, tabBarConfiguration } from '../navigationConfiguration'

//Redux
import { connect } from 'react-redux'

const TabBar = TabNavigator(routeConfiguration,tabBarConfiguration)

const mapStateToProps = (state) => {
 return {
  navigationState: state.tabBar,
  tabOneIndex: state.tabOne.index,
  tabTwoIndex: state.tabTwo.index,
  tabThreeIndex: state.tabThree.index,
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
    const { navigationState: {index: tabIndex}, tabOneIndex, tabTwoIndex, tabThreeIndex } = this.props

    console.log('back action..', this.props)


    const tabIndexArray = [ tabOneIndex, tabTwoIndex, tabThreeIndex ]
    const routeIndexZero = (tabIndexArray[tabIndex] === 0) ? true:false

    if ( tabIndex === 0 && routeIndexZero ) {
      return false
    } else {
      this.navigator.props.navigation.goBack({tabIndex:tabIndex,routeIndexZero:routeIndexZero})
      return true
    }
  }

  render(){
    const { dispatch, navigationState } = this.props
    return (
      <View style={{flex:1}}>
        <TabBar
          ref={ (ref) =>  this.navigator = ref  }
          navigation={
            addNavigationHelpers({
              dispatch: dispatch,
              state: navigationState,
            })
          }
        />
      </View>
    )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TabBarNavigation)
