export const currentLocationActionPage = (state='', action) => {
  switch(action.type){
    case "SET_CURRENT_LOCATION_ACTION_PAGE":
      return action.LocationActionPage
    default:
      return state
  }
}