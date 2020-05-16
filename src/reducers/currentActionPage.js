export const currentActionPage = (state='', action) => {
  switch(action.type){
    case "SET_CURRENT_ACTION_PAGE":
      return action.actionPage
    default:
      return state
  }
}