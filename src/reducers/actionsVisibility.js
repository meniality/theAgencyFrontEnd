export const actionsVisibility = (state={}, action) => {
  switch(action.type){
    case "SET_INITIAL_ACTIONS_VISIBILITY":
      return action.actionsVisibility
      case "TOGGLE_SEARCH_THE_INTERNET_MINIMIZED":
        const toggledSearchTheInterenetNewState = Object.assign({}, state)
        toggledSearchTheInterenetNewState.research.bitsOfInfo.searchTheInternet.minimized = 
          !toggledSearchTheInterenetNewState.research.bitsOfInfo.searchTheInternet.minimized
        return toggledSearchTheInterenetNewState
      case "TOGGLE_HIRE_A_HACKER_MINIMIZED":
        const toggleHireAGackerMinimizedNewState = Object.assign({}, state)
        toggleHireAGackerMinimizedNewState.research.bitsOfInfo.hireAHacker.minimized =
          !toggleHireAGackerMinimizedNewState.research.bitsOfInfo.hireAHacker.minimized
        return toggleHireAGackerMinimizedNewState 
    case "SET_HIRE_A_HACKER_VISIBLE_TRUE":
      const hireAHackerVisibleNewState= Object.assign({}, state)
      hireAHackerVisibleNewState.research.bitsOfInfo.hireAHacker.visible = true
      return hireAHackerVisibleNewState
    case "TOGGLE_TURN_IN_40_BITS_MINIMZED":
      const toggleTurnIn40BitsMinimizedNewState = Object.assign({}, state)
      toggleTurnIn40BitsMinimizedNewState.finance.newsOutlets.turnIn40Bits.minimized = 
        !toggleTurnIn40BitsMinimizedNewState.finance.newsOutlets.turnIn40Bits.minimized
      return toggleTurnIn40BitsMinimizedNewState
    default:
      return state
  }
}

