import React from 'react'
import {story} from '../../components/story'
export default function storyContainer() {
  return(
    <div style = {styles.div}>
      <p>{story.initialStoryPromt}</p>
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
    overflow: 'scroll'
  }
}