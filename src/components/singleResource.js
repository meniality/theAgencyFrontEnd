import React from 'react'

export default function singleResource (props) {
  const {resource} = props
  return (
    <div style = {styles.div}>
      <h3>{resource.title}</h3>
      <h3 style = {styles.number}>{resource.currentCount}</h3>
    </div>
  )
}

const styles = {
  div: {
    display: 'flex',
  },
  number: {
    marginLeft: 10
  }
}