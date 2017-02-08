'use strict'
import { StackNavigator } from 'react-navigation'

// Screens
import TabThreeScreenOne from './views/TabThreeScreenOne'
import TabThreeScreenTwo from './views/TabThreeScreenTwo'
import TabThreeScreenThree from './views/TabThreeScreenThree'

const routeConfiguration = {
  TabThreeScreenOne: { screen: TabThreeScreenOne },
  TabThreeScreenTwo: { screen: TabThreeScreenTwo },
  TabThreeScreenThree: { screen: TabThreeScreenThree },

}
// going to disable the header for now
const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRoute: 'TabThreeScreenOne'
}

export const NavigatorTabThree = StackNavigator(routeConfiguration,stackNavigatorConfiguration)
