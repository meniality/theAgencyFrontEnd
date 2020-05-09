import React from 'react'
import {connect} from 'react-redux'
import BitsOfInfoActionPage from './actionPages/bitsOfInfoActionPage'
import MoneyActionPage from './actionPages/moneyActionPage'

function actionsContainer (props) {

  const {currentActionPage} = props

  const selectActionPage = () => {
    switch(currentActionPage) {
      case 'bitsOfInfo':
        return <BitsOfInfoActionPage />
      case 'money':
        return <MoneyActionPage />
      default:
        return null
    }
  }

  return (
    <div style = {styles.div}>
      {selectActionPage()}
    </div>
  )
}

const styles = {
  div: {
    width: '50vw',
    borderBottomStyle: 'solid',
    borderWidth: 2,
    borderColor: 'rgb(86, 85, 85)',
  }
}

const mapStateToProps = (state) => ({
  currentActionPage: state.currentActionPage
})
const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(actionsContainer)
