import React, { Component } from 'react'
import styled from 'styled-components'
import Button from './components/core/Button'
import logo from './logo.svg'
import './App.css'
import DiceBag from './components/dicebag/DiceBag'
import AddDie from './components/add-die/AddDie'

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
    }
    this.pushDie = this.pushDie.bind(this)
    this.handlePushDieClick = this.handlePushDieClick.bind(this)
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
    const { dice } = this.state
    return (
      <div className="App">
        <DiceBag
          dice={dice}
        />
        <AddDie
        addDieToBag={this.pushDie}
        ></AddDie>
        <Button
        primary
          onClick={this.handlePushDieClick}
        >
        Remove die
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={this.handlePushDieClick}
        >
        Draw Dice
        </Button>
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
