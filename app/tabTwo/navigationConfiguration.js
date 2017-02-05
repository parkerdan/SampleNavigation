'use strict'
// Screens
import TabTwoScreenOne from './views/TabTwoScreenOne'
import TabTwoScreenTwo from './views/TabTwoScreenTwo'
export const routeConfiguration = {
  TabTwoScreenOne: { screen: TabTwoScreenOne },
  TabTwoScreenTwo: { screen: TabTwoScreenTwo },
}
// going to disable the header for now
export const stackNavigatorConfiguration = {
  headerMode: 'none'
}
export const routeStack = [
  {
    key: 'TabTwoScreenOne',
    routeName: 'TabTwoScreenOne'
  },
  {
    key: 'TabTwoScreenTwo',
    routeName: 'TabTwoScreenTwo'
  }
]
