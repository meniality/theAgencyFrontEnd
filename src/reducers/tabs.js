export const tabs = (state={}, action) => {
  switch(action.type){
    case "SET_TABS":
      return action.tabs
    case "SET_FINANCE_TRUE":
      const financeTrueNewState = Object.assign({}, state)
        financeTrueNewState.finance = true
      return financeTrueNewState
    default:
      return state
  }
}

