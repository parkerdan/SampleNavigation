'use strict'
// Screens
import TabThreeScreenOne from './views/TabThreeScreenOne'
import TabThreeScreenTwo from './views/TabThreeScreenTwo'
export const routeConfiguration = {
  TabThreeScreenOne: { screen: TabThreeScreenOne },
  TabThreeScreenTwo: { screen: TabThreeScreenTwo },
}
// going to disable the header for now
export const stackNavigatorConfiguration = {
  headerMode: 'none'
}
export const routeStack = [
  {
    key: 'TabThreeScreenOne',
    routeName: 'TabThreeScreenOne'
  },
  {
    key: 'TabThreeScreenTwo',
    routeName: 'TabThreeScreenTwo'
  }
]
