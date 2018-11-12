import React, { Component } from 'react'
import styled from 'styled-components'
import GridList from '@material-ui/core/GridList'
// import './DiceItem.css';


class DiceItem extends Component {
  render() {
    const {
      count,
      color,
    } = this.props

    const ColoredDie = styled.div`
      background-color: ${this.props.color};
      width: 2rem;
      height: 2rem;
      border: solid;
      margin-right: 10px;

    `

    return (
      <React.Fragment>
        <ColoredDie />
        <span>
      x
          {' '}
          {count}

        </span>
      </React.Fragment>

    )
  }
}

export default DiceItem
