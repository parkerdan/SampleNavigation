'use strict'
import { routeStack } from './navigationConfiguration'
const defaultState = {
  index: 0,
  previousIndex:0,
  routes: routeStack
}
const reducer = (state=defaultState,action) => {
  switch (action.type) {
  }
  return state
}

export default reducer
