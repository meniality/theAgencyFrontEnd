import React from 'react'
import {connect} from 'react-redux'
import actions from '../../../../actions'

const {resourcesActions: {incrementBitsOfInfoAction, incrementAlgorithmsAction, decrementMoneyAction, increaseAlgorithmCostAction}} = actions
const {currentStoryPointsActions:{addNewStoryPointAction}}=actions
const {tabsActions:{setFinanceTabTrueAction}} = actions


function BitsOfInfoActionPage (props) {

  const {currentStoryPoints, resources, algorithms, tabs} = props

  const checkForStoryPoint = () => {
    if (!currentStoryPoints.includes('firstBit'))
      props.addNewStoryPoint('firstBit')
  }

  const checkForFinanceTabVisibility = () => {
    if (resources.bitsOfInfo.currentCount >= 40 && tabs.finance === false){
      props.setFinanceTabTrue()
    }
  }

  const buyAlgorithm = () => {
    if (resources.money.currentCount >= algorithms.cost){
      props.incrementAlgorithms()
      props.decrementMoney(algorithms.cost)
      props.increaseAlgorithmCost()
    }
  }

  return (
    <div style = {styles.div}>
      <p style={styles.title}>Bits Of Information</p>
      <div style={styles.actionContainer}>
        <p style={styles.description}>Search the Internet for proof of the unknown</p>
        <button className = {'button'}style = {styles.actionButton} 
          onClick ={()=>{
            props.incrementBitsOfInfo(1)
            checkForStoryPoint()
            checkForFinanceTabVisibility()
          }
        }>
          +1 bit of info
        </button>
      </div>
      <div style={styles.actionContainer}>
        <p style={styles.description}>Hire a hacker to write an algorithm to search the internet</p>
        <p style={styles.description}>Cost: ${Math.round(algorithms.cost)} for +1 bit of info per second</p>
        <p style={styles.description}>Current Amount: {algorithms.currentCount}</p>
        <button className = {'button'}style = {styles.actionButton} 
          onClick ={()=>{
            buyAlgorithm()
          }
        }>
          +1 algorithm
        </button>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  incrementBitsOfInfo: (incrementValue) => dispatch(incrementBitsOfInfoAction(incrementValue)),
  incrementAlgorithms: () => dispatch(incrementAlgorithmsAction()),
  increaseAlgorithmCost: () => dispatch(increaseAlgorithmCostAction()),
  addNewStoryPoint: (storyPoint) => dispatch(addNewStoryPointAction(storyPoint)),
  decrementMoney: (decrementValue) => dispatch(decrementMoneyAction(decrementValue)),
  setFinanceTabTrue: () => dispatch(setFinanceTabTrueAction())
})

const mapStateToProps = (state) => ({
  bitsOfInfo: state.resources.bitsOfInfo,
  currentStoryPoints: state.currentStoryPoints,
  resources: state.resources,
  algorithms: state.resources.algorithms,
  tabs: state.tabs
})

export default connect(mapStateToProps, mapDispatchToProps)(BitsOfInfoActionPage)

const styles = {
  div: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
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
    fontFamily: 'Cormorant',
    margin: 0,
    paddingBottom: 5
  },
  actionButton: {
    height: 35,
    borderRadius: 3,
    backgroundColor: 'rgba(128, 128, 128, 0.51)'
  }
}