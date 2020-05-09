export const resources = (state={}, action) => {
  switch(action.type){
    case "SET_INITAL_RESOURCES":
      return action.resources
    case "INCREMENT_BITSOFINFO":
      const newState = Object.assign({}, state)
        newState.bitsOfInfo.currentCount = 
          newState.bitsOfInfo.currentCount + newState.bitsOfInfo.incrementValue
        return newState
    default:
      return state
  }
}

