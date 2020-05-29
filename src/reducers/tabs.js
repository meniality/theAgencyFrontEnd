export const tabs = (state={}, action) => {
  switch(action.type){
    case "SET_TABS":
      return action.tabs
    case "SET_BLACKMARKET_TRUE":
      const blackMarketTrueNewState = Object.assign({}, state)
        blackMarketTrueNewState.blackMarket = true
      return blackMarketTrueNewState
    default:
      return state
  }
}

