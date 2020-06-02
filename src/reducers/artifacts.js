export const artifacts = (state=[], action) => {
  switch(action.type){
    case "SET_CURRENT_ARTIFACTS":
      return action.artifacts
    default:
      return state
  }
}