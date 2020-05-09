import React, {useState} from 'react'
import ResourceContainer from './mainContainers/resourceContainer'
import StoryContainer from './mainContainers/storyContainer'
import ActionsContainer from './mainContainers/actionsContainer'

export default function Main(){

  const[selectedTab, setSelectedTab] = useState('research')

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
      default:
        return null
    }
  }

  return(
    <div>
      <div style = {styles.navbar}>
        <button 
          className = "navBarTab"
          style = {
            selectedTab === 'research'
            ? styles.greyTab
            : styles.tab
          }
          onClick = {() => setSelectedTab('research')}>Research
        </button>
        <button 
          className = "navBarTab"
          style = {
            selectedTab === 'finance'
            ? styles.greyTab
            : styles.tab
          } onClick = {() => setSelectedTab('finance')}>Finance</button>
      </div>
      <div style= {styles.div}>
        {selectTab()}
      </div>
    </div>
  )
}

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