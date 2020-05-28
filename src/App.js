import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import actions from './actions'
import Header from './containers/header'
import Main from './containers/main'
import initialSetup from './components/initialSetupJSON'
import {story} from './components/story'

const {resourcesActions: {setInitialResourcesAction}} = actions
const {locationsActions:{setInitialLocationsActions}} = actions
const {currentStoryPointsActions:{setDefaultCurrentStoryPointsAction}} = actions
const {tabsActions:{setTabsAction}} = actions
const {actionsVisibilityActions:{setInitialActionsVisibilityAction}} = actions

function App(props) {

  const setSaveFromLocalStorage = () => {
    props.setInitialResources(window.localStorage.getItem('resources'))
    props.setDefaultCurrentStoryPoint(window.localStorage.getItem('CurrentStoryPoints'))
    props.setTabs(window.localStorage.getItem('tabs'))
    props.setInitialActionsVisibility(window.localStorage.getItem('actionsVisibility'))
  }

  const SetDefaultOpen = () => {
    props.setInitialResources(initialSetup.resources)
    props.setDefaultCurrentStoryPoint([Object.keys(story)[0]])
    props.setTabs(initialSetup.tabs)
    props.setInitialActionsVisibility(initialSetup.actionVisibility)
  }

  window.localStorage.getItem('resources')
    ? setSaveFromLocalStorage()
    : SetDefaultOpen()

  return (
    console.log('app'),
      <div className="App">
        <Header/>
        <Main />
      </div>   
  );
}

const mapDispatchToProps = (dispatch) => ({
  setInitialResources: (resources) => dispatch(setInitialResourcesAction(resources)),
  setDefaultCurrentStoryPoint: (storyPoints) => dispatch(setDefaultCurrentStoryPointsAction(storyPoints)),
  setTabs: (tabs) => dispatch(setTabsAction(tabs)),
  setInitialActionsVisibility: (actionsVisibility) => dispatch(setInitialActionsVisibilityAction(actionsVisibility))
})

export default connect(null, mapDispatchToProps)(App)
