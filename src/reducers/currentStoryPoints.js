export const currentStoryPoints = (state=[], action) => {
  switch(action.type){
    case "SET_DEFAULT_CURRENT_STORY_POINTS":
      return action.storyPoints
    default:
      return state
  }
}