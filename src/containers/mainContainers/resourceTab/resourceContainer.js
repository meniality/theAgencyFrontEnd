import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import SingleResource from '../../../components/singleResource'
import actions from '../../../actions'

const {currentActionPageActions: {setCurrentActionPageAction}} = actions
const {resourcesActions: {incrementBitsOfInfoAction}} = actions
const {incrementStartedActions:{setIncrementStartedTrueAction}} = actions

function ResourceContainer(props) {
  
  const {resources: {bitsOfInfo, money}} = props

  const startIncrementInterval = () => {
    if (props.incrementStarted === false){
      props.setIncrementStartedTrue()
      setInterval(()=>{
        props.incrementBitsOfInfo(bitsOfInfo.perSecond)
      },1000)
    }
  }
  
  useEffect(()=>{
    startIncrementInterval()
  }, [])

  return (
    <div style = {styles.div}>
      <SingleResource
      customClickEvent={()=> {props.setCurrentActionPage('money')}}
      resource={money}
      >
      </SingleResource>
      <SingleResource 
        customClickEvent={()=> {props.setCurrentActionPage('bitsOfInfo')}} 
        resource={bitsOfInfo}>
      </SingleResource>
    </div>
  )
}

const styles = {
  div: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: "25vw",
    height: 500,
    marginLeft: 5,
    borderStyle: 'solid',
    borderTopStyle: 'none',
    borderWidth: 2,
    borderColor: 'rgb(86, 85, 85)',

  }
}

const mapStateToProps = (state) => ({
  resources: state.resources,
  currentActionPage: state.currentActionPage,
  incrementStarted: state.incrementStarted
})
const mapDispatchToProps = (dispatch) => ({
  setCurrentActionPage: (actionPage) => dispatch(setCurrentActionPageAction(actionPage)),
  incrementBitsOfInfo: (incrementValue) => dispatch(incrementBitsOfInfoAction(incrementValue)),
  setIncrementStartedTrue: () => dispatch(setIncrementStartedTrueAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(ResourceContainer)
