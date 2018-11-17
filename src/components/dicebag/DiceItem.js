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
    const handleDiceItemOnClick = event => {
      const {
        color,
        removeDie,
      } = this.props
      this.props.removeDie(color)
    }

    return (
      <React.Fragment>
        <ColoredDie
        onClick={handleDiceItemOnClick}
         />
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
