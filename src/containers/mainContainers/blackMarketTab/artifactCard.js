import React from 'react'
import {connect} from 'react-redux'
import images from '../../../images'
import styled from 'styled-components';

function ArtifactCard(props){
  return(
    <OuterDiv>
      <p style = {styles.title}>{props.artifact.name}</p>
      <img
          style = {styles.image}
          src={images[props.artifact.image]}
          alt= {null}
        />
      <button>
        purchase: ${props.artifact.purchaseCost}
      </button>
      <div style={styles.toolTipDiv}>
        <ToolTip>
          <p style= {styles.infoText}>Seller Info: <br/> {props.artifact.sellerInfo} </p>
          <p style= {styles.infoText}>Your Info: <br/> {props.artifact.insideInfo}</p>
        </ToolTip>
      </div>
    </OuterDiv>
  )
}

const mapStateToProps = (state) => ({
  resources: state.resources,
  currentStoryPoints: state.currentStoryPoints,
})
const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(ArtifactCard)

const ToolTip=styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 200px;
  background-color: rgb(222, 222, 222);
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
  position: fixed;
  z-index: 100;
  overFlow: scroll;
  box-shadow: 0 0 2px 2px rgb(222, 222, 222);
`

const OuterDiv=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 180px;
  width: 120px;
  background-color: rgb(222, 222, 222);
  border-radius: 6px;
  font-family: DM Mono;
  margin: 20px;
  &:hover ${ToolTip}{
    display: flex;
    overFlow: scroll;
  }
`

const styles = {
  title: {
    margin: 0,
  },
  image:{
    width: 100,
    height: 100,
    margin: 10,
    fontFamily: 'DM Mono',
  },
  toolTipDiv:{
    height: 0,
    position: 'relative',
    left: '63px',
    bottom: '183px',
  },
  infoText:{
    width: '96%'
  }
}