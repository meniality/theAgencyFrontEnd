import React from 'react'
import {connect} from 'react-redux'
import NewsOutletsActionPage from './locationPages/newsOutletsActionsPage'

function LocationActionsContainer(props) {

  const {currentLocationActionPage} = props

  const selectLocationActionPage = () => {
    switch(currentLocationActionPage) {
      case 'newsOutlets':
        return <NewsOutletsActionPage 
                  money={props.resources.money.currentCount}
                  bitsOfInfo={props.resources.bitsOfInfo.currentCount}
              />
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
  currentLocationActionPage: state.currentLocationActionPage,
  resources: state.resources
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