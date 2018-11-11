import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DiceBag from './components/DiceBag'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <DiceBag/>
          <button>choose hero</button>
          <button>change dice bag</button>
          <button>create dice pool</button>
          <div className="dice-pool">wwwr</div>
        </header>
      </div>
    );
  }
}

export default App;
