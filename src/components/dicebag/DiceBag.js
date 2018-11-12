import React, { Component } from 'react';
import GridList from '@material-ui/core/GridList'
import DiceItem from './DiceItem'
import './DiceBag.css';

class DiceBag extends Component {
  render() {
    return (
      <GridList >
      <DiceItem></DiceItem>
      </GridList>

    );
  }
}

export default DiceBag;
