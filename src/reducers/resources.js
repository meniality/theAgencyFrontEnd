export const resources = (state={}, action) => {
  switch(action.type){
    case "SET_INITAL_RESOURCES":
      return action.resources
    case "INCREMENT_BITSOFINFO":
      const incrementNewState = Object.assign({}, state)
      incrementNewState.bitsOfInfo.currentCount = 
        incrementNewState.bitsOfInfo.currentCount + action.incrementValue
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
        incrementAlgorithmsNewState.bitsOfInfo.perSecond =
           incrementAlgorithmsNewState.algorithms.currentCount * incrementAlgorithmsNewState.algorithms.currentEffeiency
      return incrementAlgorithmsNewState
    case "INCREASE_ALOGRITHM_COST":
      const increaseAlogrithmCostNewState = Object.assign({}, state)
      increaseAlogrithmCostNewState.algorithms.cost = 
        increaseAlogrithmCostNewState.algorithms.cost * 1.05
    return increaseAlogrithmCostNewState
    case "TOGGLE_ENERGY_VISIBLE":
      const toggleEnergyVisibleNewState = Object.assign({}, state)
      toggleEnergyVisibleNewState.energy.visible = true
      return toggleEnergyVisibleNewState
    case "TOGGLE_ENERGY_UNLOCKED": 
      const toggleEnergyUnlockedNewState = Object.assign({}, state)
      toggleEnergyUnlockedNewState.energy.unlocked = true
      return toggleEnergyUnlockedNewState
    default:
      return state
  }
}

