import React, { Component } from 'react'
import Increment from '../core/Increment'
// import PropTypes from 'prop-types'
// import GridList from '@material-ui/core/GridList'
// import styled from 'styled-components'
// import DiceItem from './DiceItem'
// import './DiceBag.css'

// const GridListWraper = styled.div`
//   margin: 1rem;
//   padding: 1rem;
//   background-color: grey;
//   border: solid;
//   border-color: white;
// `

const DicePool = (props) => {


  return (
    <React.Fragment>
      <h2> Dice Pool </h2>
      <Increment></Increment>
    </React.Fragment>
  )
}

DicePool.propTypes = {
  // dice: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default DicePool
