import React from 'react'
import {connect} from 'react-redux'
import {FaRegMinusSquare, FaRegPlusSquare} from 'react-icons/fa'
import { IconContext } from "react-icons";
import Actions from '../../../../actions'

const {actionsVisibilityActions:{toggleGenerateEnergyMinimizedAction}} = Actions
const {resourcesActions:{incrementEnergyAction}} = Actions

function EnergyActionPage(props){

  const {actionsVisibility} = props

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

  const createGenerateEnergyActionTab = () => {
    if(actionsVisibility.resource.energy.generateEnergy.minimized === false){
      return(
        <div style={styles.actionContainer}>
          <div style={styles.topDescriptionDiv}>
            <p style={styles.description}>Crank the battery handle to generate energy</p>
              {createMinusButton(props.toggleGenerateEnergyMinimized)}
          </div>
          <button className = {'button'}style = {styles.actionButton} 
            onClick ={()=>{
              props.incrementEnergy(1)
              // checkForStoryPoint('firstBit')
            }
          }
          >
            +1 energy
          </button>
        </div>
      )
    }
    else{
      const text = "Crank the handle to generate energy"
      return minimizedActionDiv(text, props.toggleGenerateEnergyMinimized)
    }
  }

  return (
    <div>
      {createGenerateEnergyActionTab()}
    </div>
  )
}

const mapStateToProps = (state) => ({
  resources: state.resources,
  actionsVisibility: state.actionsVisibility
  
})
const mapDispatchToProps = (dispatch) => ({
  toggleGenerateEnergyMinimized: () => dispatch(toggleGenerateEnergyMinimizedAction()),
  incrementEnergy: (incrementValue) => dispatch(incrementEnergyAction(incrementValue))
})

export default connect(mapStateToProps, mapDispatchToProps)(EnergyActionPage)

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