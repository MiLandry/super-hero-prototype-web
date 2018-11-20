import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import icon from 'images/fist.png'

const makeDie = color => (
  styled.div`
  background-color: ${color};
  border: solid;
  margin-right: 10px;
  height: 5rem;
  width: 5rem;
`
)


const RolledDie = ({
  color,
}) => {
  const Die = makeDie(color)

  return (
    <>
    <Die > <img src={icon} alt="fist" /> </Die >
    </>
  )
}

RolledDie.propTypes = {
}

export default RolledDie
