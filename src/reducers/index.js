import {combineReducers} from 'redux'
import {resources} from './resources'
import {currentActionPage}from './currentActionPage'


export default combineReducers({
  resources,
  currentActionPage
})