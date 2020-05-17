import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import SingleResource from '../../../components/singleResource'
import actions from '../../../actions'

const {currentActionPageActions: {setCurrentActionPageAction}} = actions
const {resourcesActions: {incrementBitsOfInfoAction}} = actions

function ResourceContainer(props) {
  
  const [incrementInterval, setIncrementInterval] = useState(false)
  const {resources: {bitsOfInfo, money}} = props

  const startIncrementInterval = () => {
    if (incrementInterval === false){
      setIncrementInterval(true)
      console.log('resource')
      setInterval(()=>{
        props.incrementBitsOfInfo(bitsOfInfo.bitsPerSecond)
      },1000)
    }
  }
  
    startIncrementInterval()
  

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
    width: "20vw",
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
  currentActionPage: state.currentActionPage
})
const mapDispatchToProps = (dispatch) => ({
  setCurrentActionPage: (actionPage) => dispatch(setCurrentActionPageAction(actionPage)),
  incrementBitsOfInfo: (incrementValue) => dispatch(incrementBitsOfInfoAction(incrementValue)),

})

export default connect(mapStateToProps, mapDispatchToProps)(ResourceContainer)
