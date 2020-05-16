export const currentStoryPoints = (state=[], action) => {
  switch(action.type){
    case "SET_DEFAULT_CURRENT_STORY_POINTS":
      return action.storyPoints
    case "ADD_NEW_STORY_POINT":
      let arrayWithNewStoryPoint = []
      arrayWithNewStoryPoint = state.slice(0)
      arrayWithNewStoryPoint.push(action.storyPoint)
      return arrayWithNewStoryPoint
    default:
      return state
  }
}