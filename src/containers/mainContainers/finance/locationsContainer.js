import React from 'react'
import {connect} from 'react-redux'
import SingleLocation from '../../../components/singleLocation'
import actions from '../../../actions'

const {currentLocationActionPageActions: {setCurrentLocationActionPageAction}} = actions

function LocationContainer(props) {

  const {locations:{newsOutlets}}= props
  return(
    <div style={styles.div}>
      <SingleLocation 
        location={newsOutlets}
        customClickEvent={()=> {props.setCurrentLocationActionPage('newsOutlets')}}
      />
    </div>
  )
}

const mapStateToProps = (state) => ({
  locations: state.locations,
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentLocationActionPage: (LocationActionPage) => dispatch(setCurrentLocationActionPageAction(LocationActionPage))
})

export default connect(mapStateToProps, mapDispatchToProps)(LocationContainer)

const styles = {
  div: {
    width: "20vw",
    height: 500,
    marginLeft: 5,
    borderStyle: 'solid',
    borderTopStyle: 'none',
    borderWidth: 2,
    borderColor: 'rgb(86, 85, 85)',
  }
}