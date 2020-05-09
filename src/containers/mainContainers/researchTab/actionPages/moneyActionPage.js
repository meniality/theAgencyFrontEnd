import React from 'react'
import {connect} from 'react-redux'

function Money(props) {
  const {money} = props
  return(
    <div>
      <h3>You currently have ${money.currentCount}.</h3>
      <h3> Your are currently making ${money.incomePerSecond} per second.</h3>
      {money.currentCount === 0
        ? <h3>Perhaps you should check out the Finance tab and see how you can change this.</h3>
        : null
      }
    </div>
  )
}

const mapStateToProps = (state) => ({
  money: state.resources.money
})

export default connect(mapStateToProps, null)(Money)