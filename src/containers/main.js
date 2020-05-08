import React from 'react'
import ResourceContainer from './mainContainers/resourceContainer'
import StoryContainer from './mainContainers/storyContainer'

export default function main(){
  return(
    <div style= {styles.div}>
      <ResourceContainer />
      <StoryContainer/>
    </div>
  )
}

const styles = {
  div: {
    display: 'flex',
    justifyContent: 'space-between',
  }
}