import React from 'react'

export default function storyContainer() {
  return(
    <div style = {styles.div}>
      <h1>Story Container</h1>
    </div>
  )
}

const styles = {
  div: {
    width: "30vw",
    height: 500,
    marginRight: 5,
    borderStyle: 'solid',
    borderTopStyle: 'none',
    borderWidth: 2,
    borderColor: 'rgb(86, 85, 85)',
  }
}