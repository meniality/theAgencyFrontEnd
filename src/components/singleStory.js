import React from 'react'
import Typewriter from 'typewriter-effect'

export default function SingleStory(props){

  return(
    <div style={styles.div}>
      <Typewriter
        options={{
          delay: 10
        }}
        onInit={(typewriter) => {
        typewriter.typeString(props.storyElement)
        .pauseFor(500)
        .start()
        }}
      />
    </div>
  )
}

const styles = {
  div: {
    display: 'flex',
    justifyContent: 'center',
    width: '90%',
    fontFamily: 'Cormorant',
  }
}