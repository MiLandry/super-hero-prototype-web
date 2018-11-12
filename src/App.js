import React, { Component } from 'react';
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import logo from './logo.svg';
import './App.css';
import DiceBag from './components/dicebag/DiceBag'

class App extends Component {
  render() {
    return (
      <div className="App">
        <DiceBag/>
        <Button variant="contained" color="primary"> choose hero  </Button>
          <button>change dice bag</button>
          <button>create dice pool</button>
          <div className="dice-pool">wwwr</div>
      </div>
    );
  }
}

export default App;
