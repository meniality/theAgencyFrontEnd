export const actionsVisibility = (state={}, action) => {
  switch(action.type){
    case "SET_INITIAL_ACTIONS_VISIBILITY":
      return action.actionsVisibility
      case "TOGGLE_SEARCH_THE_INTERNET_MINIMIZED":
        const toggledSearchTheInterenetNewState = Object.assign({}, state)
        toggledSearchTheInterenetNewState.research.bitsOfInfo.searchTheInternet.minimized = 
          !toggledSearchTheInterenetNewState.research.bitsOfInfo.searchTheInternet.minimized
        return toggledSearchTheInterenetNewState
    case "SET_HIRE_A_HACKER_VISIBLE_TRUE":
      const hireAHackerVisibleNewState= Object.assign({}, state)
      hireAHackerVisibleNewState.research.bitsOfInfo.hireAHacker.visible = true
      return hireAHackerVisibleNewState
    default:
      return state
  }
}

