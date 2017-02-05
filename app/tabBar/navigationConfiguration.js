'use strict'
// Tab-Navigators
import TabOneNavigation from '../tabOne/views/TabOneNavigation'
import TabTwoNavigation from '../tabTwo/views/TabTwoNavigation'
import TabThreeNavigation from '../tabThree/views/TabThreeNavigation'


export const routeConfiguration = {
  TabOneNavigation: { screen: TabOneNavigation },
  TabTwoNavigation: { screen: TabTwoNavigation },
  TabThreeNavigation: { screen: TabThreeNavigation },
}
export const tabBarConfiguration = {
  //...other configs
tabBarOptions:{
    // tint color is passed to text and icons (if enabled) on the tab bar
    activeTintColor: 'white',
    inactiveTintColor: 'blue',
// background color is for the tab component
    activeBackgroundColor: 'blue',
    inactiveBackgroundColor: 'white',
  }
}


// this is the route stack used in the reducer
export const routeStack = [
  {
    key:'TabOneNavigation',
    routeName:'TabOneNavigation'
  },
  {
    key:'TabTwoNavigation',
    routeName:'TabTwoNavigation'
  },
  {
    key:'TabThreeNavigation',
    routeName:'TabThreeNavigation'
  }
]
