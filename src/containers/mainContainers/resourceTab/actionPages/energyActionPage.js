import React from 'react'
import {connect} from 'react-redux'

function EnergyActionPage(){
  return (
    <div>
      energy
    </div>
  )
}

const mapStateToProps = (state) => ({
  resources: state.resources,
  
})
const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(EnergyActionPage)