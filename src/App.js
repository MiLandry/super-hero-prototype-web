import React, { Component } from 'react'
import styled from 'styled-components'
import Button from './components/core/Button'
import logo from './logo.svg'
import './App.css'
import DiceBag from './components/dicebag/DiceBag'
import AddDie from './components/add-die/AddDie'
import DiceIncrementor from './components/dice-pool/DiceIncrementor'
import {
  removeSpecifiedElementFromArray,
  drawXfromBag,
} from './utils'
import RolledDiceModal from 'components/modal/RolledDiceModal'
import Modal from 'react-modal'
import RolledDice from 'components/rolled-dice/RolledDice'

const setSpiderMan = () => {
  this.setState('spiermdandinec')
  alert('setSpiderMan')
}

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

// Modal.setAppElement('#yourAppElement')


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
      drawnDice: [],
      dicePoolNumber: 4,
      rolledDiceModalIsOpen: false,
    }
    this.pushDie = this.pushDie.bind(this)
    this.handlePushDieClick = this.handlePushDieClick.bind(this)
    this.removeDie = this.removeDie.bind(this)
    this.drawDice = this.drawDice.bind(this)
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.openModal = this.openModal.bind(this)
    this.afterOpenModal = this.afterOpenModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  openModal() {
    this.setState({ rolledDiceModalIsOpen: true })
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00'
  }

  closeModal() {
    this.setState({ rolledDiceModalIsOpen: false })
  }

  increment() {
    this.setState({
      dicePoolNumber: this.state.dicePoolNumber + 1,
    })
  }

  decrement() {
    this.setState({
      dicePoolNumber: this.state.dicePoolNumber - 1,
    })
  }

  drawDice() {
    const {
      dice,
      dicePoolNumber,
    } = this.state
    const drawnDice = drawXfromBag(dice, dicePoolNumber)
    this.setState({ drawnDice })
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

  handleRollDiceClick(event) {
    event.preventDefault()
    // roll dice and
    // open the modal

    alert('nsatohei')
  }


  render() {
    const {
      dice,
      drawnDice,
      dicePoolNumber,
    } = this.state
    return (
      <div className="App">
        <DiceBag
          dice={dice}
          removeDie={this.removeDie}
          title="Dice Bag"
        />
        <AddDie
          addDieToBag={this.pushDie}
        />
        <DiceIncrementor
          dicePoolNumber={dicePoolNumber}
          onIncrement={this.increment}
          onDecrement={this.decrement}
        />
        <Button onClick={this.drawDice}>DrawDice</Button>
        <DiceBag
          dice={drawnDice}
          removeDie={this.removeDie}
          title=""
        />
        <Button
          variant="contained"
          color="primary"
          onClick={this.handleRollDiceClick}
        >
        Roll dice
        </Button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <RolledDice />
        </Modal>
      </div>
    )
  }
}

export default App
