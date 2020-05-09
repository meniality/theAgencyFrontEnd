import React from 'react';
import {connect} from 'react-redux'

function SingleLocation (props) {

  return (
    <div 
      style = {styles.div}
      className = 'singleResourceDiv'
      onClick={props.customClickEvent}
    > 
      <h3 style = {styles.title}>{props.location.title}</h3>
    </div>
  )
}

const styles = {
  div: {
    display: 'flex',
    color: 'rgb(68, 58, 58)',
    fontFamily: 'Cormorant',
  },
  
  title: {
    paddingLeft: 5
  },
  number: {
    marginLeft: 10
  },
}

export default SingleLocation