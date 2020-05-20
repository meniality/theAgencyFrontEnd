import React from 'react'

export default function SingleStory(props){

  return(
    <div style={styles.outerDiv}>
      <div style={styles.innerDiv}>
        <p>{props.storyElement}</p>
      </div>
    </div>
  )
}

const styles = {
  outerDiv: {
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'Special Elite',
    height: 'fit-content',
    margin: 10
  },
  innerDiv: {
    padding: 13,
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'Special Elite',
    backgroundColor: "rgba(128, 128, 128, 0.22)",
    borderRadius: 4
  }
}