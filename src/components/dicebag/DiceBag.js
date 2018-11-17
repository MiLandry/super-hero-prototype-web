import React, { Component } from 'react'
import PropTypes from 'prop-types'
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

const DiceBag = (props) => {
  const {
    dice,
    removeDie,
  } = props

  const bucketedDice = dice.reduce((acc, color) => {
    // if the colored bucket exists, increment the count
    const bucket = acc.find(diceItem => diceItem.color === color)
    if (bucket) {
      const i = acc.indexOf(bucket)
      acc[i].count += 1
      return acc
    }

    // otherwise add the bucket
    acc.push({
      color,
      count: 1,
    })
    return acc
  }, [])


  const diceItems = bucketedDice.map(diceItem => (
    <DiceItem
      key={diceItem.color}
      color={diceItem.color}
      count={diceItem.count}
      removeDie={removeDie}
    />
  ))

  return (
    <React.Fragment>
      <h2> Dice Bag </h2>
      <p>(click on dice to remove)</p>
      <GridListWraper>
        <GridList>
          {diceItems}
        </GridList>
      </GridListWraper>
    </React.Fragment>
  )
}

DiceBag.propTypes = {
  dice: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default DiceBag
