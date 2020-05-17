import React from 'react'
import {connect} from 'react-redux'
import actions from '../../../../actions'

const {resourcesActions:{decrementBitsOfInfoAction,incrementMoneyAction}}=actions
const {currentStoryPointsActions:{addNewStoryPointAction}}=actions

function NewsOutletsActionPage (props) {

  const {currentStoryPoints} = props

  const checkForStoryPoint = () => {
    if (!currentStoryPoints.includes('newsOutlets'))
      props.addNewStoryPoint('newsOutlets')
  }
  
  const sellInfoForMoney = () => {
   if (props.bitsOfInfo >= 40){
    props.decrementBitsOfInfo(40)
    props.incrementMoney(10)
   }
  }

  return(
    <div style = {styles.div}>
      <p style={styles.title}>News Outlets</p>
      <div style ={styles.actionContainer}>
        <p style= {styles.description}>
          Turn in 40 bits of information to the tabloids for $10
        </p>
        <p>Current Bits of information:{props.bitsOfInfo} Current Money:${Math.round(props.money)}</p>
        <button className = {'button'}style = {styles.actionButton} 
          onClick = {() => {
            sellInfoForMoney()
            checkForStoryPoint()
          }
        }>
          Turn In
        </button>
      </div>
    </div>
  )
}

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
    borderRadius: 3
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

const mapDispatchToProps = (dispatch) => ({
  decrementBitsOfInfo: (decrementValue) => dispatch(decrementBitsOfInfoAction(decrementValue)),
  incrementMoney: (incrementValue) => dispatch(incrementMoneyAction(incrementValue)),
  addNewStoryPoint: (storyPoint) => dispatch(addNewStoryPointAction(storyPoint))
})

const mapStateToProps = (state) => ({
  currentStoryPoints: state.currentStoryPoints
})

export default connect(mapStateToProps, mapDispatchToProps)(NewsOutletsActionPage)