export const incrementStarted = (state=false, action) => {
  switch(action.type){
    case "SET_INCREMENTED_STARTED_TRUE":
      return true
    default:
      return state
  }
}

