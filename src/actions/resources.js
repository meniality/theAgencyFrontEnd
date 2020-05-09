const setInitialResourcesAction = (resources) => ({type: "SET_INITAL_RESOURCES", resources})
const incrementBitsOfInfoAction = (incrementValue) => ({type: "INCREMENT_BITSOFINFO", incrementValue})

export const resourcesActions = {
  setInitialResourcesAction,
  incrementBitsOfInfoAction
}