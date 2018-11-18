import React, { Component } from 'react'
import Button from './Button'
import styled, { css } from 'styled-components'

const IncrementSpan = styled.span`
  font-size: 2em;
`

const CounterWrapper = styled.div`
  font-size: 2rem;
`

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
        <CounterWrapper>{this.state.counter}</CounterWrapper>
        <Button onClick={this.increment}> <IncrementSpan> + </IncrementSpan></Button>
        <Button onClick={this.decrement}><IncrementSpan> - </IncrementSpan></Button>
      </div>
    )
  }
}

export default Increment
