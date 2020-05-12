const setInitialResourcesAction = (resources) => ({type: "SET_INITAL_RESOURCES", resources})
const incrementBitsOfInfoAction = (incrementValue) => ({type: "INCREMENT_BITSOFINFO", incrementValue})
const decrementBitsOfInfoAction = (decrementValue) => ({type: "DECREMENT_BITSOFINFO", decrementValue})
const incrementMoneyAction = (incrementValue) => ({type: "INCREMENT_MONEY", incrementValue})


export const resourcesActions = {
  setInitialResourcesAction,
  incrementBitsOfInfoAction,
  decrementBitsOfInfoAction,
  incrementMoneyAction
}