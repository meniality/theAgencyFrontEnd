export const resources = (state={}, action) => {
  switch(action.type){
      case "SET_INITAL_RESOURCES":
        return action.resources
    default:
      return state
  }
}

