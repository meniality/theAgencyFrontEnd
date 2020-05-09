import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import actions from './actions'
import Header from './containers/header'
import Main from './containers/main'

const {resourcesActions: {setInitialResourcesAction}} = actions

function App(props) {

  window.localStorage.getItem('resources')
    ? props.setInitialResources(window.localStorage.getItem('resources'))
    : props.setInitialResources(
        {bitsOfInfo: 
          {currentCount: 0, 
            title: "Bits Of Info:",
            visible: true, 
            incrementValue: 1
          },
        money: {
          currentCount: 0,
          title: "$",
          incomePerSecond: 0
        } 
        })
  

  return (
      <div className="App">
        <Header/>
        <Main />
      </div>   
  );
}

const mapDispatchToProps = (dispatch) => ({
  setInitialResources: (resources) => dispatch(setInitialResourcesAction(resources))
})

export default connect(null, mapDispatchToProps)(App)
