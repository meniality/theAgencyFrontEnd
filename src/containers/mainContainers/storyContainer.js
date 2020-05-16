import React,{useEffect, useRef} from 'react'
import {connect} from "react-redux"
import {story} from '../../components/story'
import SingleStoryTypeWriter from '../../components/singleStoryTypewriter'
import SingleStory from '../../components/singleStory'




function StoryContainer(props) {

  const {currentStoryPoints} = props
  
  const el = useRef(null);

useEffect(() => {
    el.current.scrollIntoView({ block: 'end', behavior: 'smooth' });
    console.log('useEffect')
});
   
  const checkIfNewOrOldStoryElement = () => {
    return currentStoryPoints.map(storyPoint => {
      return Object.entries(story).map((allStoryPoint) => {
        if (storyPoint === allStoryPoint[0]) {
          if(storyPoint === currentStoryPoints[currentStoryPoints.length-1]){   
            return <SingleStoryTypeWriter storyElement={allStoryPoint[1]}/> 
          }
          else {
            return <SingleStory storyElement={allStoryPoint[1]} />
          }
        }
      })
    })
  }
  
  
  return(
    <>
      <div style = {styles.div}>
        {checkIfNewOrOldStoryElement()}
        <div style={styles.focus}id={'el'} ref={el} />
      </div>
    </>
  )
}

const mapStateToProps = (state) => ({
  currentStoryPoints: state.currentStoryPoints
})

export default connect(mapStateToProps, null)(StoryContainer)

const styles = {
  div: {
    display: 'block',
    width: "30vw",
    height: 500,
    marginRight: 5,
    borderStyle: 'solid',
    borderTopStyle: 'none',
    borderWidth: 2,
    borderColor: 'rgb(86, 85, 85)',
    overflow: 'scroll',
    float: 'left',
    clear: 'both',
    backgroundImage: 'linear-gradient(to bottom, rgba(255,255,255, 0), rgba(255,255,255, 1) 90%)'
  },
  focus:{
    width: 0,
    height: 400
  },
  bottomSpacing: {
    width: '30vh',
    height:500
  }
}