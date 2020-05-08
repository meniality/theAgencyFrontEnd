import React from 'react'
import {connect} from 'react-redux'
import SingleResource from '../../components/singleResource'
// import actions from '../../actions'

function resourceContainer(props) {

  const {resources: {bitsOfInfo}} = props

  return (
    <div style = {styles.div}>
      <SingleResource resource={bitsOfInfo}/>
    </div>
  )
}

const styles = {
  div: {
    width: "70vw",
    height: 500,
    marginLeft: 5,
    borderStyle: 'solid',
    borderRightStyle: 'none',
    borderTopStyle: 'none',
    borderWidth: 2,
    borderColor: 'rgb(86, 85, 85)',
  }
}

const mapStateToProps = (state) => ({
  resources: state.resources
})

export default connect(mapStateToProps, null)(resourceContainer)
