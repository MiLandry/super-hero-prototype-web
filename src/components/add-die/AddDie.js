import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'
import { DICE_COLORS } from '../../const'

const AddDieWrapper = styled.div`
  background-color: grey;
`
const handleClick = (e) => {
  alert('sntaohei')
}

class AddDie extends React.Component {
  constructor(props) {
    super(props)
    this.state = { selected: 'grey' }
  }

  render() {
    const radioButtons = DICE_COLORS.map(color => (
      <FormControlLabel value={color} control={<Radio />} label={color} />
    ))

    return (
      <AddDieWrapper>

        <RadioGroup
          aria-label="Gender"
          name="gender1"
        >
          {radioButtons}

        </RadioGroup>
        <Button
          variant="contained"
          color="primary"
          onClick={handleClick}
        >
    Add die
        </Button>
      </AddDieWrapper>
    )
  }
}

AddDie.propTypes = {
  dice: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default AddDie
