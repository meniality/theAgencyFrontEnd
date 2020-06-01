import React from 'react'
import images from '../../../images'

function BlackMarketContainer() {
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
        <button style={styles.button} className={'button'}>
          Search the black market <br/>
          cost: 1212 bits of info
        </button>
        <img
          src={images.slotMachine}
          alt= 'slot machine'
        />
      </div>
    </div>
  )
}

export default BlackMarketContainer

const styles = {
  div: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '70vw',
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
    alignItems: 'center'
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
    backgroundColor: 'rgba(128, 128, 128, 0.51)'
  }
}