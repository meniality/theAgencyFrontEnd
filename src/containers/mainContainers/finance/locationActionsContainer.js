import React from 'react'
import {connect} from 'react-redux'
import NewsOutletsActionPage from './locationPages/newsOutletsActionsPage'

function LocationActionsContainer(props) {

  const {currentLocationActionPage} = props

  const selectLocationActionPage = () => {
    switch(currentLocationActionPage) {
      case 'newsOutlets':
        return <NewsOutletsActionPage />
      default:
        return null
    }
  }

  return(
    
    <div style ={styles.div}>
      {selectLocationActionPage()}
    </div>
  )
}

const mapStateToProps = (state) => ({
  currentLocationActionPage: state.currentLocationActionPage
})

export default connect(mapStateToProps, null)(LocationActionsContainer)

const styles = {
  div: {
    width: '50vw',
    borderBottomStyle: 'solid',
    borderWidth: 2,
    borderColor: 'rgb(86, 85, 85)'
  }
}