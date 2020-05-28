import React from 'react';
import {connect} from 'react-redux'
import actions from '../actions'

const {resourcesActions: {
  toggleEneregyUnlockedAction, decrementMoneyAction
}} = actions

function SingleResource (props) {

  const makeUnlockContainer = () => {
    return (
      <div style={styles.outerDiv}>
        <div style={styles.unlockDiv}>
          <h3 style={styles.unlockCost}>Cost: ${props.resource.unlockCost.money}</h3>
          <button
            onClick = {()=> {
              if(props.resources.money.currentCount >= props.resource.unlockCost.money){
                props.toggleEneregyUnlocked()
                props.decrementMoney(props.resource.unlockCost.money)
              }
            }}
          >Purchase</button>
        </div>
      </div>
    )
  }

  if(props.resource.unlocked === true) {
    return (
      <div style={styles.outerDiv} 
        className = 'singleResourceDiv'
        onClick={props.customClickEvent}
      >
        <div style = {styles.div}> 
          <h3 style = {styles.title}>{props.resource.title}</h3>
          <h3 style = {styles.number}>{Math.round(props.resource.currentCount)}</h3>
        </div>
        <p style={styles.perSecond}>+ {props.resource.perSecond} per second</p>
      </div>
    )
  } else return makeUnlockContainer()
}

const mapStateToProps = (state) => ({
  resources: state.resources
})

const mapDispatchToProps = (dispatch) => ({
  toggleEneregyUnlocked: () => {dispatch(toggleEneregyUnlockedAction())},
  decrementMoney: (decrementValue) => {dispatch(decrementMoneyAction(decrementValue))}
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleResource)

const styles = {
  outerDiv:{
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 4,
    width: '98%',
    height: '10vh',
  },
  div: {
    display: 'flex',
    color: 'rgb(68, 58, 58)',
    fontFamily: 'DM Mono',
    margin: 10,
  },
  title: {
    margin: 0,
    fontSize: 18
  },
  number: {
    margin: 0,
    paddingLeft:10
  },
  perSecond:{
    paddingLeft: 10,
    color: 'rgb(68, 58, 58)',
    fontFamily: 'DM Mono',
    marginTop: -5
  },
  unlockDiv:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height:'100%'
  },
  unlockCost:{
    fontFamily: 'DM Mono',
    margin: 0,
    color: 'rgb(68, 58, 58)',
    fontSize: 18
  }
}