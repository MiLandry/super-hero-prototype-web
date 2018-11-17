import React, { Component } from 'react'
import styled from 'styled-components'
import Button from './components/core/Button'
import logo from './logo.svg'
import './App.css'
import DiceBag from './components/dicebag/DiceBag'
import AddDie from './components/add-die/AddDie'
import DiceIncrementor from './components/dice-pool/DiceIncrementor'
import { removeSpecifiedElementFromArray } from './utils'

const setSpiderMan = () => {
  this.setState('spiermdandinec')
  alert('setSpiderMan')
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dice: [
        'white',
        'white',
        'white',
        'white',
        'white',
        'red',
        'red',
        'red',
      ],
      drawnDice: [
      'white',
      'blue'
      ]
    }
    this.pushDie = this.pushDie.bind(this)
    this.handlePushDieClick = this.handlePushDieClick.bind(this)
    this.removeDie = this.removeDie.bind(this)
  }

  removeDie(color) {
    const {
      dice,
    } = this.state
    const newDiceBag = removeSpecifiedElementFromArray(dice, color)
    this.setState({ dice: newDiceBag })
  }

  handlePushDieClick(event) {
    event.preventDefault()
    this.pushDie('green')
  }

  pushDie(color = 'green') {
    const { dice } = this.state
    console.log('color', color)

    const newDice = [...dice, color]
    console.log('newDice', newDice)
    this.setState({ dice: newDice })
  }


  render() {
    const { dice, drawnDice } = this.state
    return (
      <div className="App">
        <DiceBag
          dice={dice}
          removeDie={this.removeDie}
        />
        <AddDie
          addDieToBag={this.pushDie}
        />
        <DiceIncrementor></DiceIncrementor>
        <Button>DrawDice</Button>
        <DiceBag
          dice={drawnDice}
          removeDie={this.removeDie}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={this.handlePushDieClick}
        >
        Roll dice
        </Button>
      </div>
    )
  }
}

export default App
