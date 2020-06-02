import React from 'react'
import {connect} from 'react-redux'
import BitsOfInfoActionPage from './actionPages/bitsOfInfoActionPage'
import MoneyActionPage from './actionPages/moneyActionPage'
import EnergyActionPage from './actionPages/energyActionPage'

function actionsContainer (props) {

  const {currentActionPage} = props

  const selectActionPage = () => {
    switch(currentActionPage) {
      case 'bitsOfInfo':
        return <BitsOfInfoActionPage />
      case 'money':
        return <MoneyActionPage />
      case 'energy':
        return <EnergyActionPage />
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

const mapStateToProps = (state) => ({
  currentActionPage: state.currentActionPage,
  resources: state.resources
})

export default connect(mapStateToProps, null)(actionsContainer)

const styles = {
  div: {
    width: '45vw',
    borderBottomStyle: 'solid',
    borderWidth: 2,
    borderColor: 'rgb(86, 85, 85)',
  }
}