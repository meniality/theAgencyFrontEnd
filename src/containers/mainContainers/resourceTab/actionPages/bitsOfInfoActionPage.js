import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import actions from '../../../../actions'
import {FaRegMinusSquare, FaRegPlusSquare} from 'react-icons/fa'
import { IconContext } from "react-icons";

const {resourcesActions: {incrementBitsOfInfoAction, incrementAlgorithmsAction, decrementMoneyAction, increaseAlgorithmCostAction}} = actions
const {currentStoryPointsActions:{addNewStoryPointAction}}=actions
const {tabsActions:{setFinanceTabTrueAction}} = actions
const {actionsVisibilityActions:{setHireAHackerVisibleTrueAction, toggleSearchTheInternetMinimizedAction, toggleHireAHackerMinimizedAction}} = actions


function BitsOfInfoActionPage (props) {

  const {currentStoryPoints, resources, algorithms, tabs, actionsVisibility} = props

  const checkForStoryPoint = (storyPoint) => {
    if (!currentStoryPoints.includes(storyPoint))
      props.addNewStoryPoint(storyPoint)
  }

  const createMinusButton = (minimizeAction) => {
    return (
      <IconContext.Provider value={{ color: "rgb(90, 90, 90)", className: "button" }}>
        <div style={styles.minusButton}>
          <FaRegMinusSquare onClick= {()=>{minimizeAction()}}/>
        </div>
      </IconContext.Provider>
    )
  }

  const minimizedActionDiv = (text, maximizeFunction) => {
    return (
      <div style={styles.minimizedDiv}>
        <p style = {styles.description}>{text}</p>
        <IconContext.Provider value={{ color: "rgb(90, 90, 90)", className: "button" }}>
          <div style={styles.minusButton}>
            <FaRegPlusSquare onClick= {()=>{maximizeFunction()}}/>
          </div>
        </IconContext.Provider>
      </div>
    )
  }

  const checkForHireAHackerVisibility = () => {
    if (resources.money.currentCount >= 40 && actionsVisibility.resource.bitsOfInfo.hireAHacker.visible === false){
      props.setHireAHackerVisibleTrue()
    }
  }

  const buyAlgorithm = () => {
    if (resources.money.currentCount >= algorithms.cost){
      props.incrementAlgorithms()
      props.decrementMoney(algorithms.cost)
      props.increaseAlgorithmCost()
    }
  }

  const createBitsOfInfoActionTab = () => {
    if(actionsVisibility.resource.bitsOfInfo.searchTheInternet.minimized === false){
      return(
        <div style={styles.actionContainer}>
          <div style={styles.topDescriptionDiv}>
            <p style={styles.description}>Search the Internet for proof of the unknown</p>
              {createMinusButton(props.toggleSearchTheInternetMinimized)}
          </div>
          <button className = {'button'}style = {styles.actionButton} 
            onClick ={()=>{
              props.incrementBitsOfInfo(1)
              checkForStoryPoint('firstBit')
            }
          }>
            +1 bit of info
          </button>
        </div>
      )
    }
    else{
      const text = "Search the internet for  Bits of Info"
      return minimizedActionDiv(text, props.toggleSearchTheInternetMinimized)
    }
  }

  const createHireAHackerTab = () => {
    if (actionsVisibility.resource.bitsOfInfo.hireAHacker.visible === true && actionsVisibility.resource.bitsOfInfo.hireAHacker.minimized === false){
      return (
        <div style={styles.actionContainer}>
          <div style={styles.topDescriptionDiv}>
            <p style={styles.description}>Hire a hacker to write an algorithm to search the internet</p>
            {createMinusButton(props.toggleHireAHackerMinimized)}
          </div>
          <p style={styles.description}>Cost: ${Math.round(algorithms.cost)} for +1 bit of info per second</p>
          <p style={styles.description}>Current Amount: {algorithms.currentCount}</p>
          <button className = {'button'}style = {styles.actionButton} 
            onClick ={()=>{
              buyAlgorithm()
              checkForStoryPoint('firstAlgorithm')
            }
          }>
            +1 algorithm
          </button>
        </div>
      )
    }
    else if (actionsVisibility.resource.bitsOfInfo.hireAHacker.visible === true && actionsVisibility.resource.bitsOfInfo.hireAHacker.minimized === true) {
      const text = "Hire a Hacker"
      return minimizedActionDiv(text, props.toggleHireAHackerMinimized)
    }
  }

  useEffect(() => {
    checkForHireAHackerVisibility()
  })

  return (
    <div style = {styles.div}>
      <p style={styles.title}>Bits Of Information</p>
      {createBitsOfInfoActionTab()}
      {createHireAHackerTab()}
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  incrementBitsOfInfo: (incrementValue) => dispatch(incrementBitsOfInfoAction(incrementValue)),
  incrementAlgorithms: () => dispatch(incrementAlgorithmsAction()),
  increaseAlgorithmCost: () => dispatch(increaseAlgorithmCostAction()),
  addNewStoryPoint: (storyPoint) => dispatch(addNewStoryPointAction(storyPoint)),
  decrementMoney: (decrementValue) => dispatch(decrementMoneyAction(decrementValue)),
  setFinanceTabTrue: () => dispatch(setFinanceTabTrueAction()),
  toggleSearchTheInternetMinimized: () => dispatch(toggleSearchTheInternetMinimizedAction()),
  setHireAHackerVisibleTrue: () => dispatch(setHireAHackerVisibleTrueAction()),
  toggleHireAHackerMinimized: () => dispatch(toggleHireAHackerMinimizedAction())

})

const mapStateToProps = (state) => ({
  bitsOfInfo: state.resources.bitsOfInfo,
  currentStoryPoints: state.currentStoryPoints,
  resources: state.resources,
  algorithms: state.resources.algorithms,
  tabs: state.tabs,
  actionsVisibility: state.actionsVisibility
})

export default connect(mapStateToProps, mapDispatchToProps)(BitsOfInfoActionPage)

const styles = {
  div: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  topDescriptionDiv:{
    textAlign: 'center',
    display: 'inline',
    width: '100%',
    paddingBottom: 5,
  },
  minusButton:{
    display: 'inline',
    height: 10,
    float: 'right',
    marginTop: -5
  },
  title: {
    fontSize: 30,
    fontFamily: 'Cormorant',
    margin: 0,
    marginBottom: 10
  },
  actionContainer:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '95%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'rgba(105, 105, 105, 0.68)',
    padding: '5px 0px 5px 0px',
    borderRadius: 3,
    margin: 5
  },
  description: {
    fontFamily: 'DM Mono',
    margin: 0,
    paddingBottom: 5,
    display: 'inline',
  },
  actionButton: {
    height: 35,
    borderRadius: 3,
    backgroundColor: 'rgba(128, 128, 128, 0.51)'
  },
  minimizedDiv:{
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 3,
    borderColor: 'rgba(105, 105, 105, 0.68)',
    padding: '5px 0px 5px 0px',
    width: '95%',
    textAlign: 'center',

  }
}