const setCurrenntArtifactsAction = (artifacts) => ({type: "SET_CURRENT_ARTIFACTS", artifacts})
const setPurchasedTrueAction = (index) => ({type: "SET_PURCHASED_TRUE", index})

export const artifactsActions = {
  setCurrenntArtifactsAction,
  setPurchasedTrueAction
}