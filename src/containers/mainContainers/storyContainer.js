import React from 'react'
import {connect} from "react-redux"
import {story} from '../../components/story'
import SingleStoryTypeWriter from '../../components/singleStoryTypewriter'
import SingleStory from '../../components/singleStory'

function StoryContainer(props) {

  const {currentStoryPoints} = props

  const checkIfNewOrOldStoryElement = () => {
    return currentStoryPoints.map(storyPoint => {
      console.log(currentStoryPoints[currentStoryPoints.length-1])
      return Object.entries(story).map((allStoryPoint) => {
        if (storyPoint === allStoryPoint[0]) {
          if(storyPoint === currentStoryPoints[currentStoryPoints.length-1]){   
            return <SingleStoryTypeWriter storyElement={allStoryPoint[1]}/> 
          }
          else {
            return <SingleStory storyElement={allStoryPoint[1]} />
          }
        }
        else console.log('none')
      })
    })
  }

  return(
    <div style = {styles.bottomOfDivScroll}>
      <div style = {styles.div}>
        {checkIfNewOrOldStoryElement()}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  currentStoryPoints: state.currentStoryPoints
})

export default connect(mapStateToProps, null)(StoryContainer)

const styles = {
  bottomOfDivScroll: {
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column-reverse'
  },
  div: {
    display: 'flex',
    flexDirection: 'column',
    width: "30vw",
    height: 500,
    marginRight: 5,
    borderStyle: 'solid',
    borderTopStyle: 'none',
    borderWidth: 2,
    borderColor: 'rgb(86, 85, 85)',
    overflow: 'scroll',
  }
}