export const locations = (state={}, action) => {
  switch(action.type){
    case "SET_INITIAL_LOCATIONS":
      return action.locations
    default:
      return state
  }
}

