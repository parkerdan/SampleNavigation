'use strict'
// Screens
import TabOneScreenOne from './views/TabOneScreenOne'
import TabOneScreenTwo from './views/TabOneScreenTwo'
export const routeConfiguration = {
  TabOneScreenOne: { screen: TabOneScreenOne },
  TabOneScreenTwo: { screen: TabOneScreenTwo },
}
// going to disable the header for now
export const stackNavigatorConfiguration = {
  headerMode: 'none'
}
export const routeStack = [
  {
    key: 'TabOneScreenOne',
    routeName: 'TabOneScreenOne'
  },
  {
    key: 'TabOneScreenTwo',
    routeName: 'TabOneScreenTwo'
  }
]
