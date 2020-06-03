export const artifacts = (state=[], action) => {
  switch(action.type){
    case "SET_CURRENT_ARTIFACTS":
      return action.artifacts
    case "SET_PURCHASED_TRUE":
      const purchasedTrueState = state.slice()
      purchasedTrueState[action.index].purchased = true
      return purchasedTrueState
    default:
      return state
  }
}