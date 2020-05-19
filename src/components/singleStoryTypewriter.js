import React from 'react'
import Typewriter from 'typewriter-effect'

export default function SingleStoryTypewriter(props){

  return(
    <div style={styles.outerDiv}>
      <div style={styles.innerDiv}>
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