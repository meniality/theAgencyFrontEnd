import React from 'react';
import {connect} from 'react-redux'

function SingleResource (props) {

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
}

const mapStateToProps = (state) => ({
  resources: state.resources
})

export default connect(mapStateToProps, null)(SingleResource)

const styles = {
  outerDiv:{
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 4,
    width: '98%',
    height: '10vh'
  },
  div: {
    display: 'flex',
    color: 'rgb(68, 58, 58)',
    fontFamily: 'Cormorant',
    margin: 10,
  },
  
  title: {
    margin: 0
  },
  number: {
    margin: 0,
    paddingLeft:10
  },
  perSecond:{
    paddingLeft: 10,
    color: 'rgb(68, 58, 58)',
    fontFamily: 'Cormorant',
    marginTop: -5
  }
}