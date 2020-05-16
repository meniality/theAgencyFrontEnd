import React from 'react';
import {connect} from 'react-redux'

function SingleResource (props) {

  return (
    <div 
      style = {styles.div}
      className = 'singleResourceDiv'
      onClick={props.customClickEvent}
    > 
      <h3 style = {styles.title}>{props.resource.title}</h3>
      <h3 style = {styles.number}>{props.resource.currentCount}</h3>
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

const mapStateToProps = (state) => ({
  resources: state.resources
})

export default connect(mapStateToProps, null)(SingleResource)