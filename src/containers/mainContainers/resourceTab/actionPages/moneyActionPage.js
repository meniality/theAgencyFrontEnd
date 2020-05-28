import React from 'react'
import {connect} from 'react-redux'
import actions from '../../../../actions'
import {FaRegMinusSquare, FaRegPlusSquare} from 'react-icons/fa'
import { IconContext } from "react-icons";

const {resourcesActions:{decrementBitsOfInfoAction,incrementMoneyAction}}=actions
const {currentStoryPointsActions:{addNewStoryPointAction}}=actions
const {actionsVisibilityActions:{toggleTurnIn40BitsMinimizedAction}} = actions

function Money(props) {

  const {currentStoryPoints, actionsVisibility, money} = props
  const {resources:{bitsOfInfo}} = props

  const checkForStoryPoint = () => {
    if (!currentStoryPoints.includes('newsOutlets'))
      props.addNewStoryPoint('newsOutlets')
  }
  
  const sellInfoForMoney = () => {
   if (bitsOfInfo.currentCount >= 40){
    props.decrementBitsOfInfo(40)
    props.incrementMoney(10)
   }
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

  const minimizedActionDiv = (text, maximizeAction) => {
    return (
      <div style={styles.minimizedDiv}>
        <p style = {styles.description}>{text}</p>
        <IconContext.Provider value={{ color: "rgb(90, 90, 90)", className: "button" }}>
          <div style={styles.minusButton}>
            <FaRegPlusSquare onClick= {()=>{maximizeAction()}}/>
          </div>
        </IconContext.Provider>
      </div>
    )
  }

  const createTurnInBitsOfInfoToTabloids = () => {
    if(actionsVisibility.resource.money.turnIn40Bits.minimized === false){
      return (
        <div style ={styles.actionContainer}>
          <div style={styles.topDescriptionDiv}>
            <p style= {styles.description}>
              Turn in 40 bits of information to the tabloids for $10
            </p>
            {createMinusButton(props.toggleTurnIn40BitsMinimized)}
          </div>
          <p>Current Bits of information:{props.bitsOfInfo} Current Money:${Math.round(money.currentCount)}</p>
          <button className = {'button'}style = {styles.actionButton} 
            onClick = {() => {
              sellInfoForMoney()
              checkForStoryPoint()
            }
          }>
            Turn In
          </button>
        </div>
      )
    }
    else{
      const text = "Turn in 40 bits for $10"
      return minimizedActionDiv(text, props.toggleTurnIn40BitsMinimized)
    }
  }
  return(
    <div style = {styles.div}>
      <p style={styles.title}>Money</p>
      {createTurnInBitsOfInfoToTabloids()}
    </div>
  )}


const mapStateToProps = (state) => ({
  currentStoryPoints: state.currentStoryPoints,
  actionsVisibility: state.actionsVisibility,
  money: state.resources.money,
  resources: state.resources
})

const mapDispatchToProps = (dispatch) => ({
  decrementBitsOfInfo: (decrementValue) => dispatch(decrementBitsOfInfoAction(decrementValue)),
  incrementMoney: (incrementValue) => dispatch(incrementMoneyAction(incrementValue)),
  addNewStoryPoint: (storyPoint) => dispatch(addNewStoryPointAction(storyPoint)),
  toggleTurnIn40BitsMinimized: () => dispatch(toggleTurnIn40BitsMinimizedAction()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Money)

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
    margin: 5,
    fontFamily: 'DM Mono',
  },
  description: {
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