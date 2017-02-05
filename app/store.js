'use strict'
// Redux
import { applyMiddleware, combineReducers, createStore } from 'redux'
import logger from 'redux-logger'
// Reducers
import tabBar from './tabBar/reducer'
import tabOne from './tabOne/reducer'
import tabTwo from './tabTwo/reducer'
import tabThree from './tabThree/reducer'
// Middleware
const middleware = () => {
  return applyMiddleware(logger())
}
export default createStore(
  combineReducers({
    tabBar: tabBar,
    tabOne: tabOne,
    tabTwo: tabTwo,
    tabThree: tabThree,
  }),
  middleware(),
)
