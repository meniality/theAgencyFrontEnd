import React,{useEffect, useState} from 'react'
import {connect} from 'react-redux'
import actions from '../../../actions'
import ArtifactCard from './artifactCard.js'

const {artifactsActions:{setPurchasedTrueAction}} = actions

function BlackMarketContainer(props) {

  const {artifacts} = props
  const [searchCost, setSearchCost] = useState(0)
  const [artifactToPurchase, setArtifactToPurchase] = useState(0)
  const [buttonPhrase, setButtonPhrase] = useState('')

  const checkForCostOfSearch = () => {
    for (var i = 0; i < artifacts.length; i++){
      if (artifacts[i].purchased === false){
        setSearchCost(artifacts[i].searchCost)
        setArtifactToPurchase(i)
        break
      }
      else{
        setSearchCost(0)
      }
    }
  }
  
  const createArtifactCards = () => {
    return artifacts.map((artifact, index) => {
      if (artifact.purchased === true){
        return <ArtifactCard artifact={artifact} index={index}/>
      }
    })
  }

  const pickButtonPhrase = () => {
    if (searchCost === 0){
       setButtonPhrase("You have no leads right now.")
    }
    else {
      setButtonPhrase(`cost: ${searchCost} bits of info`)
    }
  }

  useEffect(() => {
    checkForCostOfSearch()
    pickButtonPhrase()
  })

  return (
    <div style={styles.div}>
      <div style={styles.outerContainer}>
        <div style={styles.addressBarContainer}>
          <div style = {styles.addressBar}>
            <p style= {styles.address}>http://blackMarketEbay.gov/secure/secret/dontTellAnyone</p>
          </div>
        </div>
        <div style={styles.welcomeMessageContainer}>
          <p style={styles.welcomeMessage}>Welcome to Black Market Ebay where you will find everything your heart desires. Please search to your hearts content and be assured all transactions are completely anonymous and impossible to trace. </p>
        </div>
        <button 
          style={styles.button} 
          className={'button'}
          onClick = {()=>{
            props.setPurchasedTrue(artifactToPurchase)
          }}
        >
          Search the black market<br/>
          {buttonPhrase}
        </button>
        <div style={styles.artifactContainer}>
          {createArtifactCards()}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  artifacts: state.artifacts
})
const mapDispatchToProps = (dispatch) => ({
  setPurchasedTrue: (index) => dispatch(setPurchasedTrueAction(index)),
})

export default connect(mapStateToProps, mapDispatchToProps)(BlackMarketContainer)


const styles = {
  div: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '70vw',
    height:500,
    marginLeft: 5,
    borderBottomStyle: 'solid',
    borderLeftStyle: 'solid',
    borderWidth: 2,
    borderColor: 'rgb(86, 85, 85)',
  },
  outerContainer:{
    width: '97%',
    height: '97%',
    borderStyle: 'solid',
    borderColor: 'rgb(86, 85, 85)',
    borderWidth: 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'scroll'
  },
  addressBarContainer:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomStyle: 'solid',
    borderColor: 'rgb(86, 85, 85)',
    borderWidth: 2,
    height: 30,
    width: '100%'
  },
  addressBar:{
    width: '98%',
    height: 26,
    backgroundColor: 'rgb(222, 222, 222)',
    borderRadius: 14,
    display: 'flex',
    alignItems: 'center',
  },
  address:{
    marginLeft: 12
  },
  welcomeMessageContainer:{
    display: 'flex',
    justifyContent:'center',
    width: '100%'
  },
  welcomeMessage:{
    width: '97%'
  },
  button: {
    height: 35,
    borderRadius: 3,
    backgroundColor: 'rgba(128, 128, 128, 0.51)',
    fontFamily: 'DM Mono',
  },
  artifactContainer:{
    display: 'flex',
  }
}