import {combineReducers} from 'redux'
import {resources} from './resources'
import {currentActionPage} from './currentActionPage'
import {locations} from './locations'
import {currentLocationActionPage} from './currentLocationActionPage'
import {currentStoryPoints} from './currentStoryPoints'


export default combineReducers({
  resources,
  currentActionPage,
  locations,
  currentLocationActionPage,
  currentStoryPoints
})