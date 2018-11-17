import React, { Component } from 'react'

class Increment extends Component {
    constructor(props) {
      super(props)
      this.increment = this.increment.bind(this)
      this.decrement = this.decrement.bind(this)
      this.state = {
        counter: 5
      }
    }

  increment() {
    this.setState({
      counter: this.state.counter + 1,
    })
  }

  decrement() {
    this.setState({
      counter: this.state.counter - 1,
    })
  }

  render() {
    return (
      <div>
        <div id="counter">{this.state.counter}</div>
        <button onClick={this.increment}> Add 1 </button>
        <button onClick={this.decrement}> Minus 1 </button>
      </div>
    )
  }
}

export default Increment
