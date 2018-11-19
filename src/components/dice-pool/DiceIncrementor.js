import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Increment from '../core/Increment'

const DiceIncrementor = (props) => {
  const {
    dicePoolNumber,
    onIncrement,
    onDecrement,
  } = props

  return (
    <React.Fragment>
      <h2> Dice Pool </h2>
      <Increment
        dicePoolNumber={dicePoolNumber}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
      />
    </React.Fragment>
  )
}

DiceIncrementor.propTypes = {
  dicePoolNumber: PropTypes.number.isRequired,
}

export default DiceIncrementor
