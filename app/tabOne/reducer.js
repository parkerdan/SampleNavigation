'use strict'

import { routeStack } from './navigationConfiguration'
import findRouteIndexByName from '../helperFunctions/findRouteIndexByName'

const defaultState = {
  index: 0,
  routes: [routeStack[0]]
}
const reducer = (state=defaultState,action) => {
  switch (action.type) {
    case 'Navigation/NAVIGATE':
      let index = findRouteIndexByName(routeStack,action.routeName)
      if (  index !== -1 ) {
        let newStack = state.routes.concat([routeStack[index]])
        return { ...state, index: newStack.length - 1, routes:newStack }
      } else {
        return state
      }
      break;

    case 'Navigation/BACK':
      let { tabIndex, routeIndexZero } = action.key
      // check if the back action is for this tab and if the currentIndex is at zero
      if (tabIndex === 0 && !routeIndexZero) {
        let newStack = state.routes.slice(0,state.index)
        let newIndex = state.index - 1
        return { ...state, index:newIndex, routes:newStack  }
      } else {
        return state
      }
      break;

  }
  return state
}

export default reducer
