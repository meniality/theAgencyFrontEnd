import React from 'react'
import {connect} from 'react-redux'

function Money(props) {
  const {money} = props
  return(
    <div style={styles.div}>
      <div style={styles.titleDiv}>
        <p style={styles.title}>Bank Account</p>
      </div>
      <p>You currently have ${Math.round(money.currentCount)}.</p>
      <p> Your are currently making ${Math.round(money.perSecond)} per second.</p>
      {money.currentCount === 0
        ? <p>You need to worry about getting some information first. Check out the bits of info page.</p>
        : null
      }
    </div>
  )
}

const mapStateToProps = (state) => ({
  money: state.resources.money
})

export default connect(mapStateToProps, null)(Money)

const styles = {
  div:{
    fontFamily: 'DM Mono'
  },
  titleDiv:{
    display: 'flex',
    justifyContent: 'center'
  },
  title: {
    fontSize: 30,
    fontFamily: 'Cormorant',
    margin: 0,
    marginBottom: 10
  },
}