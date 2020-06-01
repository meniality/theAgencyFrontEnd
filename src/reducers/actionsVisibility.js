export const actionsVisibility = (state={}, action) => {
  switch(action.type){
    case "SET_INITIAL_ACTIONS_VISIBILITY":
      return action.actionsVisibility
      case "TOGGLE_SEARCH_THE_INTERNET_MINIMIZED":
        const toggledSearchTheInterenetNewState = Object.assign({}, state)
        toggledSearchTheInterenetNewState.resource.bitsOfInfo.searchTheInternet.minimized = 
          !toggledSearchTheInterenetNewState.resource.bitsOfInfo.searchTheInternet.minimized
        return toggledSearchTheInterenetNewState
      case "TOGGLE_HIRE_A_HACKER_MINIMIZED":
        const toggleHireAGackerMinimizedNewState = Object.assign({}, state)
        toggleHireAGackerMinimizedNewState.resource.bitsOfInfo.hireAHacker.minimized =
          !toggleHireAGackerMinimizedNewState.resource.bitsOfInfo.hireAHacker.minimized
        return toggleHireAGackerMinimizedNewState 
    case "SET_HIRE_A_HACKER_VISIBLE_TRUE":
      const hireAHackerVisibleNewState= Object.assign({}, state)
      hireAHackerVisibleNewState.resource.bitsOfInfo.hireAHacker.visible = true
      return hireAHackerVisibleNewState
    case "TOGGLE_TURN_IN_40_BITS_MINIMZED":
      const toggleTurnIn40BitsMinimizedNewState = Object.assign({}, state)
      toggleTurnIn40BitsMinimizedNewState.resource.money.turnIn40Bits.minimized = 
        !toggleTurnIn40BitsMinimizedNewState.resource.money.turnIn40Bits.minimized
      return toggleTurnIn40BitsMinimizedNewState
    case "TOGGLE_GENERATE_ENERGY_MINIMIZED":
      const toggleGenerateEnergyMinimized = Object.assign({}, state)
      toggleGenerateEnergyMinimized.resource.energy.generateEnergy.minimized = 
        !toggleGenerateEnergyMinimized.resource.energy.generateEnergy.minimized
      return toggleGenerateEnergyMinimized
    default:
      return state
  }
}

