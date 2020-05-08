import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import actions from './actions'
import Header from './containers/header'
import Main from './containers/main'

const {bitsOfInfoActions: {incrementBitsOfInfoAction}} = actions

function App(props) {


const {bitsOfInfo} = props

  return (
      <div className="App">
        <Header/>
        <Main />
        <h1>Bits Of Info</h1>
        <h2> {bitsOfInfo} </h2>
        <button 
          onClick = {() => {props.incrementBitsOfInfo(1)}}>
        +
        </button>
      </div>   
  );
}

const mapDispatchToProps = (dispatch) => ({
  incrementBitsOfInfo: (incrementValue) => dispatch(incrementBitsOfInfoAction(incrementValue)),
})

const mapStateToProps = (state) => ({
  bitsOfInfo: state.bitsOfInfo
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
