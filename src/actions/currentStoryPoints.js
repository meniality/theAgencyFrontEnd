const setDefaultCurrentStoryPointsAction = (storyPoints) => ({type: "SET_DEFAULT_CURRENT_STORY_POINTS", storyPoints})
const addNewStoryPointAction = (storyPoint) => ({type: "ADD_NEW_STORY_POINT", storyPoint})

export const currentStoryPointsActions = {
  setDefaultCurrentStoryPointsAction,
  addNewStoryPointAction
}