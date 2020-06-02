import {combineReducers} from 'redux'
import {resources} from './resources'
import {currentActionPage} from './currentActionPage'
import {locations} from './locations'
import {currentLocationActionPage} from './currentLocationActionPage'
import {currentStoryPoints} from './currentStoryPoints'
import {tabs} from './tabs'
import {incrementStarted} from './incrementStarted'
import {actionsVisibility} from './actionsVisibility'
import {artifacts} from './artifacts'


export default combineReducers({
  resources,
  currentActionPage,
  locations,
  currentLocationActionPage,
  currentStoryPoints,
  tabs,
  incrementStarted,
  actionsVisibility,
  artifacts
})