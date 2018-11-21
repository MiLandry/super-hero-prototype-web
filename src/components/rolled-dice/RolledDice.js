import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
// import DiceItem from 'components/dicebag/DiceItem'
import RolledDie from './RolledDie'

// const FooWraper = styled.div`
//   background-color: orange;
//   display: flex;
// `

const RolledDice = ({
  dice = [],
}) => {
  const rolledDice = dice.map(color => <RolledDie color={color} />)


  return (
    <>

      { (dice.length === 0)
        ? 'Draw dice first'
        : rolledDice
        }
    </>
  )
}

RolledDice.propTypes = {
}

export default RolledDice
