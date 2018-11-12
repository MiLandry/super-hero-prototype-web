import React, { Component } from 'react';
import GridList from '@material-ui/core/GridList'
import styled from 'styled-components'
import DiceItem from './DiceItem'
import './DiceBag.css';

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
      <>
      <h2> Dice Bag </h2>
      <GridListWraper>
      <GridList >
      <DiceItem></DiceItem>
      </GridList>
      </GridListWraper>
      </>

    );
  }
}

export default DiceBag;
