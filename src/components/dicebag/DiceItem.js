import React, { Component } from 'react';
import styled from 'styled-components'
import GridList from '@material-ui/core/GridList'
import './DiceItem.css';

const ColoredDie = styled.div`
  background-color: white;
  width: 2rem;
  height: 2rem;
  border: solid;
  margin-right: 10px;

`


class DiceItem extends Component {
  render() {
    return (
      <>
      <ColoredDie></ColoredDie>
      <span>
      x 3
        
      </span>
      </>

    );
  }
}

export default DiceItem;
