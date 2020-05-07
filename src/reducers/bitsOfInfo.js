export const bitsOfInfo = (state=0, action) => {
  switch(action.type){
    case "INCREMENT_BITSOFINFO":
      return state + action.incrementValue
    default:
      return state
  }
}