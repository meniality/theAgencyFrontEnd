import React, {useState} from 'react'
import {connect} from 'react-redux'
import ResourceContainer from './mainContainers/researchTab/resourceContainer'
import StoryContainer from './mainContainers/storyContainer'
import ActionsContainer from './mainContainers/researchTab/actionsContainer'
import LocationContainer from './mainContainers/finance/locationsContainer'
import LocationActionsContainer from './mainContainers/finance/locationActionsContainer'

function Main(props){

  const[selectedTab, setSelectedTab] = useState('research')
  const {tabs} = props

  const selectTab = () => {
    switch(selectedTab) {
      case 'research':
        return (
          <>
            <ResourceContainer />
            <ActionsContainer />
            <StoryContainer/>
          </>
        )
      case 'finance':
        return (
          <>
            <LocationContainer />
            <LocationActionsContainer />
            <StoryContainer />
          </>
        )
      default:
        return null
    }
  }

  const createResearchTab = () => {
    return (
      <button 
        className = "navBarTab"
        style = {
          selectedTab === 'research'
          ? styles.greyTab
          : styles.tab
        }
        onClick = {() => setSelectedTab('research')}>Research
      </button>
    )
  }

  const createFinanceTab = () => {
    if(tabs.finance === true){
      return (
        <button 
          className = "navBarTab"
          style = {
            selectedTab === 'finance'
            ? styles.greyTab
            : styles.tab
          } 
          onClick = {() => setSelectedTab('finance')}>
          Finance
        </button>
      )
    }
  }

  return(
    <div>
      <div style = {styles.navbar}>
       {createResearchTab()}
       {createFinanceTab()}
      </div>
      <div style= {styles.div}>
        {selectTab()}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  tabs: state.tabs,
})

export default connect(mapStateToProps,null)(Main)

const styles = {
  div: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  navbar: {
    display: 'flex',
    height: '5vh',
    marginLeft: 5,
    marginRight: 5,
    borderStyle: 'solid',
    borderTopStyle: 'none',
    borderWidth: 2,
    borderColor: 'rgb(86, 85, 85)',
  },
  tab: {
    width: '15%',
    height: '4.5vh',
    display: 'flex',
    marginTop: '.5vh',
    backgroundColor: 'white',
    borderBottomStyle: 'none',
    borderTopRightRadius: 9,
    borderTopLeftRadius: 9,
    borderWidth: 2,
    borderColor: 'rgb(86, 85, 85)',
    marginLeft:-1,
    alighText: 'center',
    justifyContent: 'center',
    fontFamily: 'Cormorant',
    fontSize: '3.5vh',
    outline: 0
  },
  greyTab: {
    width: '15%',
    height: '4.5vh',
    display: 'flex',
    marginTop: '.5vh',
    backgroundColor: 'rgb(170, 171, 173)',
    borderBottomStyle: 'none',
    borderTopRightRadius: 9,
    borderTopLeftRadius: 9,
    borderWidth: 2,
    borderColor: 'rgb(86, 85, 85)',
    marginLeft:-1,
    alighText: 'center',
    justifyContent: 'center',
    fontFamily: 'Cormorant',
    fontSize: '3.5vh'
  }
}