import React from 'react'
import {story} from '../../components/story'
import SingleStory from '../../components/singleStory'

export default function StoryContainer() {

  return(
    <div style = {styles.div}>
      <SingleStory storyElement={story.initialStoryPromt}/>
      {/* <p>{story.initialStoryPromt}</p> */}
    </div>
  )
}

const styles = {
  div: {
    display: 'flex',
    justifyContent: 'center',
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