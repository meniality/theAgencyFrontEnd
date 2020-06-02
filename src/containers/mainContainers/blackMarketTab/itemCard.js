import React from 'react'
import {connect} from 'react-redux'

function ItemCard(props){
  return(
    <div>
      <p></p>
    </div>
  )
}

const mapStateToProps = (state) => ({
  resources: state.resources,
  currentStoryPoints: state.currentStoryPoints,
})
const mapDispatchToProps = (dispatch) => ({
  toggleGenerateEnergyMinimized: () => dispatch(toggleGenerateEnergyMinimizedAction()),
  incrementEnergy: (incrementValue) => dispatch(incrementEnergyAction(incrementValue)),
  addNewStoryPoint: (storyPoint) => {dispatch(addNewStoryPointAction(storyPoint))},
  setBlackMarketTabTrue: () => {dispatch(setBlackMarketTabTrueAction())},
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemCard)