import React from 'react'
import {connect} from 'react-redux'
import actions from '../../../../actions'

function NewsOutletsActionPage(props) {

  const {money, bitsOfInfo} = props
  return(
    <div>
      <p>Turn in 40 bits of information
        ({bitsOfInfo.currentCount}) for 
        $10(${money.currentCount}}
      </p>
      <button>Turn In</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  money: state.resources.money,
  bitsOfInfo: state.resources.bitsOfInfo
})

const mapDispatchToProps = (dispatch) => ({
  // incrementBitsOfInfo: () => dispatch(incrementBitsOfInfoAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(NewsOutletsActionPage)