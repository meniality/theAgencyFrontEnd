export const resources = (state={}, action) => {
  switch(action.type){
    case "SET_INITAL_RESOURCES":
      return action.resources
    case "INCREMENT_BITSOFINFO":
      const incrementNewState = Object.assign({}, state)
      incrementNewState.bitsOfInfo.currentCount = 
        incrementNewState.bitsOfInfo.currentCount + incrementNewState.bitsOfInfo.incrementValue
      return incrementNewState
    case "DECREMENT_BITSOFINFO":
      const decrementNewState = Object.assign({}, state)
      decrementNewState.bitsOfInfo.currentCount = 
        decrementNewState.bitsOfInfo.currentCount - decrementNewState.bitsOfInfo.decrementValue
      return decrementNewState
    default:
      return state
  }
}

