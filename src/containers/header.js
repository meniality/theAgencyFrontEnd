import React from 'react'
import '../App.css'

export default function header () {
  return (
    <div style = {styles.div}>
      <h1 style = {styles.h1}>The Agency</h1>
    </div>
  )
  
}
const styles = {
  div: {
    height: '10vh',
    marginLeft: 5,
    marginRight: 5,
    padding: "10px",
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'rgb(86, 85, 85)',
    borderTopRightRadius: 9,
    borderTopLeftRadius: 9,
  },
  h1: {
    display: 'flex',
    justifyContent: 'center',
    lineHeight: '10vh',
    fontSize: '9vh',
    margin: 0,
    color: 'rgb(68, 58, 58)',
    fontFamily: 'Cormorant',
  }
}