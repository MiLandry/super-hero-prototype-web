import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import Button from './Button'

const IncrementSpan = styled.span`
  font-size: 2em;
`

const CounterWrapper = styled.div`
  font-size: 2rem;
`

const Increment = (props) => {
  const {
    dicePoolNumber,
    onIncrement,
    onDecrement,
  } = props

  return (
    <div>
      <CounterWrapper>{dicePoolNumber}</CounterWrapper>
      <Button onClick={onIncrement}>
        {' '}
        <IncrementSpan> + </IncrementSpan>
      </Button>
      <Button onClick={onDecrement}><IncrementSpan> - </IncrementSpan></Button>
    </div>
  )
}

Increment.propTypes = {
  dicePoolNumber: PropTypes.number.isRequired,
}


export default Increment
