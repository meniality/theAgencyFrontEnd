const setInitialActionsVisibilityAction = (actionsVisibility) => ({type: "SET_INITIAL_ACTIONS_VISIBILITY", actionsVisibility})
const setHireAHackerVisibleTrueAction = () => ({type: "SET_HIRE_A_HACKER_VISIBLE_TRUE"})
const toggleSearchTheInternetMinimizedAction = () => ({type: "TOGGLE_SEARCH_THE_INTERNET_MINIMIZED"})
const toggleHireAHackerMinimizedAction = () => ({type: "TOGGLE_HIRE_A_HACKER_MINIMIZED"})


export const actionsVisibilityActions = {
  setInitialActionsVisibilityAction,
  setHireAHackerVisibleTrueAction,
  toggleSearchTheInternetMinimizedAction,
  toggleHireAHackerMinimizedAction
}

