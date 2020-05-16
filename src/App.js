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

function App(props) {

  const setSaveFromLocalStorage = () => {
    props.setInitialResources(window.localStorage.getItem('resources'))
    props.setInitialLocation(window.localStorage.getItem('locations'))
    props.setDefaultCurrentStoryPoint(window.localStorage.getItem('CurrentStoryPoints'))
  }

  const SetDefaultOpen = () => {
    props.setInitialResources(initialSetup.resources)
    props.setInitialLocation(initialSetup.locations)
    props.setDefaultCurrentStoryPoint([Object.keys(story)[0]])
  }

  window.localStorage.getItem('resources')
    ? setSaveFromLocalStorage()
    : SetDefaultOpen()
      
  

  return (
      <div className="App">
        <Header/>
        <Main />
      </div>   
  );
}

const mapDispatchToProps = (dispatch) => ({
  setInitialResources: (resources) => dispatch(setInitialResourcesAction(resources)),
  setInitialLocation: (locations) => dispatch(setInitialLocationsActions(locations)),
  setDefaultCurrentStoryPoint: (storyPoints) => dispatch(setDefaultCurrentStoryPointsAction(storyPoints))
})

export default connect(null, mapDispatchToProps)(App)
