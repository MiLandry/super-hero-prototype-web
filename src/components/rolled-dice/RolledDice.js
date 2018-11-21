import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
// import DiceItem from 'components/dicebag/DiceItem'

import { randomIconFromDie } from 'utils'
import RolledDie from './RolledDie'

const DiceContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
`

const RolledDice = ({
  dice = [],
}) => {
  const rolledDice = dice.map((color) => {
    const icon = randomIconFromDie(color)
    return (<RolledDie color={color} icon={icon.icon} alt={icon.alt} />)
  })


  return (
    <>
<DiceContainer>
  
      { (dice.length === 0)
        ? 'Draw dice first'
        : rolledDice
        }
</DiceContainer>
    </>
  )
}

RolledDice.propTypes = {
}

export default RolledDice
