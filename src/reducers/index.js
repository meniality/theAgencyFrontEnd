import {combineReducers} from 'redux'
import {resources} from './resources'
import {currentActionPage} from './currentActionPage'
import {locations} from './locations'
import {currentLocationActionPage} from './currentLocationActionPage'


export default combineReducers({
  resources,
  currentActionPage,
  locations,
  currentLocationActionPage,
})