export const actionsVisibility = (state={}, action) => {
  switch(action.type){
    case "SET_INITIAL_ACTIONS_VISIBILITY":
      return action.actionsVisibility
    case "SET_HIRE_A_HACKER_VISIBLE_TRUE":
      const hireAHackerVisibleNewState= Object.assign({}, state)
      hireAHackerVisibleNewState.research.bitsOfInfo.hireAHacker.visible = true
      return hireAHackerVisibleNewState
    default:
      return state
  }
}

