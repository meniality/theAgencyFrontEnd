import React from 'react'

function BlackMarketContainer() {
  return (
    <div style={styles.div}>
      <div style={styles.outerContainer}>
        <div style={styles.addressBarContainer}>
          <div style = {styles.addressBar}>
            <p style= {styles.address}>http://blackMarketEbay.gov/secure/secret/dontTellAnyone</p>
          </div>
        </div>
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
    borderWidth: 2
  },
  addressBarContainer:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomStyle: 'solid',
    borderColor: 'rgb(86, 85, 85)',
    borderWidth: 2,
    height: 30,
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
  }
}