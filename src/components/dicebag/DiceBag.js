import React, { Component } from 'react'
import PropTypes from 'prop-types';
import GridList from '@material-ui/core/GridList'
import styled from 'styled-components'
import DiceItem from './DiceItem'
import './DiceBag.css'

const GridListWraper = styled.div`
  margin: 1rem;
  padding: 1rem;
  background-color: grey;
  border: solid;
  border-color: white;
`

class DiceBag extends Component {
  render() {
    return (
      <React.Fragment>
        <h2> Dice Bag </h2>
        <GridListWraper>
          <GridList>
            <DiceItem
            color={'white'}
            count={4}
            />
          </GridList>
        </GridListWraper>
      </React.Fragment>
    )
  }
}

DiceBag.propTypes = {
  dice: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default DiceBag
