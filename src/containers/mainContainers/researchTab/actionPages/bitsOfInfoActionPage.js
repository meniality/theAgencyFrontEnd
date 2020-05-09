import React from 'react'
import {connect} from 'react-redux'
import actions from '../../../../actions'

const {resourcesActions: {incrementBitsOfInfoAction}} = actions

function BitsOfInfoActionPage (props) {

  return (
    <div>
      <p>words and stuff go here</p>
      <button
        onClick ={props.incrementBitsOfInfo}
      >
      Search the Internet for proof of the unknown<br/> +1 bit of info
      </button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  incrementBitsOfInfo: () => dispatch(incrementBitsOfInfoAction())
})

export default connect(null, mapDispatchToProps)(BitsOfInfoActionPage)