export const bitsOfInfo = (state=0, action) => {
  switch(action.type){
    case "ADD_BITOFINFO":
      return state + 1
  }
}