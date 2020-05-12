import React from 'react'
import {connect} from 'react-redux'
import actions from '../../../../actions'

const {resourcesActions: {incrementBitsOfInfoAction}} = actions

function BitsOfInfoActionPage (props) {

  return (
    <div style = {styles.div}>
      <p style={styles.title}>Bits Of Information</p>
      <div style={styles.actionContainer}>
        <p style={styles.description}>Search the Internet for proof of the unknown</p>
        <button className = {'button'}style = {styles.actionButton} onClick ={props.incrementBitsOfInfo}>
          +1 bit of info
        </button>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  incrementBitsOfInfo: () => dispatch(incrementBitsOfInfoAction())
})

const mapStateToProps = (state) => ({
  bitsOfInfo: state.resources.bitsOfInfo
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