import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Radio from '@material-ui/core/Radio'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Button from '@material-ui/core/Button'
import styled, { css } from 'styled-components'
import { DICE_COLORS } from '../../const'
import autobind from 'autobind-decorator'

const ButtonGroup = styled.div`
  background-color: black;
  display: flex;
  flex-wrap: wrap;
  margin: 2em;
  justify-content: space-evenly;
`

const AddDieButton = styled.button`
border-radius: 30px;
background-color: #4CAF50;
border: none;
color: white;
padding: 20px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
margin: 4px 2px;

  ${props => props.color
    && css`
      background: ${props.color};
    `};

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
      >{color}</AddDieButton>
    ))

    return (
      <>
      add Dice
        <ButtonGroup>

          {colorButtons}


        </ButtonGroup>
        </>
    )
  }
}

export default AddDie
