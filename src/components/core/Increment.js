import React, { Component } from 'react'
import Button from './Button'

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
        <Button onClick={this.increment}> + </Button>
        <Button onClick={this.decrement}> - </Button>
      </div>
    )
  }
}

export default Increment
