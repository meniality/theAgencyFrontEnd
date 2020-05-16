export const resources = (state={}, action) => {
  switch(action.type){
    case "SET_INITAL_RESOURCES":
      return action.resources
    case "INCREMENT_BITSOFINFO":
      const incrementNewState = Object.assign({}, state)
      incrementNewState.bitsOfInfo.currentCount = 
        incrementNewState.bitsOfInfo.currentCount + 1
      return incrementNewState
    case "DECREMENT_BITSOFINFO":
      const decrementNewState = Object.assign({}, state)
      decrementNewState.bitsOfInfo.currentCount = 
        decrementNewState.bitsOfInfo.currentCount - action.decrementValue
      return decrementNewState
    case "INCREMENT_MONEY":
      const incrementMoneyNewState = Object.assign({}, state)
      incrementMoneyNewState.money.currentCount =
        incrementMoneyNewState.money.currentCount + action.incrementValue
      return incrementMoneyNewState
    case "DECREMENT_MONEY":
      const decrementMoneyNewState = Object.assign({}, state)
      decrementMoneyNewState.money.currentCount =
        decrementMoneyNewState.money.currentCount - action.decrementValue
    return decrementMoneyNewState
    case "INCREMENT_ALGORITHMS":
      const incrementAlgorithmsNewState = Object.assign({}, state)
        incrementAlgorithmsNewState.algorithms.currentCount =
          incrementAlgorithmsNewState.algorithms.currentCount + 1
      return incrementAlgorithmsNewState
    default:
      return state
  }
}

