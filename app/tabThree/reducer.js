'use strict'
import { routeStack } from './navigationConfiguration'
import findRouteIndexByName from '../helperFunctions/findRouteIndexByName'
const defaultState = {
  index: 0,
  previousIndex:0,
  routes: routeStack
}
const reducer = (state=defaultState,action) => {
  switch (action.type) {
    case 'Navigation/NAVIGATE':
      var newIndex = findRouteIndexByName(routeStack,action.routeName)
      if (  newIndex !== -1 ) {
        var previousIndex = state.index
        return { ...state, index: newIndex, previousIndex: previousIndex }
      } else {
        return state
      }
      break;
  }
  return state
}

export default reducer
