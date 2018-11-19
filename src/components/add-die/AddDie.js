import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Radio from '@material-ui/core/Radio'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Button from '@material-ui/core/Button'
import styled, { css } from 'styled-components'
import autobind from 'autobind-decorator'
import { DICE_COLORS } from '../../const'
import { isLight } from 'utils'

const ButtonGroup = styled.div`
  background-color: black;
  display: flex;
  flex-wrap: wrap;
  margin: 2em;
  justify-content: space-evenly;
`

const AddDieButton = styled.button`
border-radius: 30px;
border: none;
width: 8rem;
height: 3rem;
color: white;
text-align: center;
font-size: 1.7rem;
margin: 4px 2px;

  ${(props) => {
    const color = (isLight(props.color)) ? 'black' : 'white'
    return props.color
    && css`
      background: ${props.color};
      color: ${color}
    `
  }};

`


class AddDie extends React.Component {
  constructor(props) {
    super(props)
    this.state = { selected: 'grey' }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    this.props.addDieToBag(event.target.value)
  }

  render() {
    const colorButtons = DICE_COLORS.map(color => (
      <AddDieButton
        type="button"
        value={color}
        key={color}
        label={color}
        color={color}
        onClick={this.handleClick}
      >
        {color}
      </AddDieButton>
    ))

    return (
      <>
      add Dice (AddDie)
        <ButtonGroup>

          {colorButtons}


        </ButtonGroup>
        </>
    )
  }
}

export default AddDie
