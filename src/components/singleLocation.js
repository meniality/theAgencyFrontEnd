import React from 'react';

function SingleLocation (props) {

  return (
    <div style={styles.outerDiv} 
      className = 'singleResourceDiv'
      onClick={props.customClickEvent}
    >
        <h3>{props.location.title}</h3>
    </div>
  )
}

const styles = {
  outerDiv:{
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 4,
    width: '98%',
    height: '10vh',
    display: 'flex',
    color: 'rgb(68, 58, 58)',
    fontFamily: 'DM Mono',
    justifyContent: 'center',
    alignItems: 'center'
  },
}

export default SingleLocation