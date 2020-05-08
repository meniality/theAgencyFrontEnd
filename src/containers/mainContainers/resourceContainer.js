import React from 'react'

export default function resourceContainer() {
  return (
    <div style = {styles.div}>
      <h1>Resource Container</h1>
    </div>
  )
}

const styles = {
  div: {
    width: "70vw",
    height: 500,
    marginLeft: 5,
    borderStyle: 'solid',
    borderRightStyle: 'none',
    borderTopStyle: 'none',
    borderWidth: 2,
    borderColor: 'rgb(86, 85, 85)',
  }
}