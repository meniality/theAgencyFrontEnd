import React, {useState} from 'react'
import {connect} from 'react-redux'
import ResourceContainer from './mainContainers/resourceTab/resourceContainer'
import StoryContainer from './mainContainers/storyContainer'
import ActionsContainer from './mainContainers/resourceTab/actionsContainer'
import BlackMarketContainer from './mainContainers/blackMarketTab/blackMarket'

function Main(props){

  const[selectedTab, setSelectedTab] = useState('resources')
  const {tabs} = props

  const selectTab = () => {
    switch(selectedTab) {
      case 'resources':
        return (
          <>
            <ResourceContainer />
            <ActionsContainer />
          </>
        )
      case 'blackMarket':
        return (
          <>
            <BlackMarketContainer />
          </>
        )
      default :
        return null
    }
  }

  const createResearchTab = () => {
    return (
      <button 
        className = "navBarTab"
        style = {
          selectedTab === 'resources'
          ? styles.greyTab
          : styles.tab
        }
        onClick = {() => setSelectedTab('resources')}>Resources
      </button>
    )
  }

  const createBlackMarketTab = () => {
    return tabs.blackMarket
     ? (
        <button 
          className = "navBarTab"
          style = {
            selectedTab === 'blackMarket'
            ? styles.greyTab
            : styles.tab
          }
          onClick = {() => setSelectedTab('blackMarket')}>Black Market
        </button>
      )
      :null
  }

  return(
    <div>
      <div style = {styles.navbar}>
       {createResearchTab()}
       {createBlackMarketTab()}
      </div>
      <div style= {styles.div}>
        {selectTab()}
        <StoryContainer />
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