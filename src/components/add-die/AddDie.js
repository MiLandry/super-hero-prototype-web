import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button'
import styled from 'styled-components'

const GridListWraper = styled.div`
  margin: 1rem;
  padding: 1rem;
  background-color: grey;
  border: solid;
  border-color: white;
`
const handleClick = e => {
  alert('sntaohei')
}

const AddDie = (props) => {

  return (
    <React.Fragment>

      <RadioGroup
        aria-label="Gender"
        name="gender1"
        // className={classes.group}
        // value={this.state.value}
        // onChange={this.handleChange}
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        <FormControlLabel
          value="disabled"
          disabled
          control={<Radio />}
          label="(Disabled option)"
        />
      </RadioGroup>
      <Button
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
    Add die
      </Button>
    </React.Fragment>
  )
}

AddDie.propTypes = {
  dice: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default AddDie
