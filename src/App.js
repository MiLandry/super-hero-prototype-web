import React, { Component } from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import logo from './logo.svg'
import './App.css'
import DiceBag from './components/dicebag/DiceBag'

const setSpiderMan = () => {
  this.setState('spiermdandinec')
  alert('setSpiderMan')
}

const onChooseHeroClick = () => {
  setSpiderMan()
}


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dice: {},
    }
    // this.increment = this.increment.bind(this);
  }

  render() {
    return (
      <div className="App">
        <DiceBag
          dice={this.state.dice}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={onChooseHeroClick}

        >
          {' '}
choose hero
          {' '}
        </Button>
        <button>change dice bag</button>
        <button>create dice pool</button>
        <div className="dice-pool">wwwr</div>
      </div>
    )
  }
}

export default App
