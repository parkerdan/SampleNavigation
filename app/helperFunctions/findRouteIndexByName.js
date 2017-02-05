'use strict'
const findRouteIndexByName = (routeStack,targetRouteName) => {
  var index = -1
  for (let i = 0; i < routeStack.length; i++) {
    if (routeStack[i].routeName === targetRouteName) {
      index = i
      break
    }
  }
  return index
}
export default findRouteIndexByName
