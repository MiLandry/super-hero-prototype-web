import React, { Component } from 'react'
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
            <DiceItem />
          </GridList>
        </GridListWraper>
      </React.Fragment>
    )
  }
}

DiceBag.propTypes = {
  lat: React.PropTypes.number,
  lon: React.PropTypes.number,
  mapsApiHostname: React.PropTypes.string,
  markers: React.PropTypes.array,
  onChange: React.PropTypes.func,
}

export default DiceBag
