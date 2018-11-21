import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'



const makeDie = color => (
  styled.div`
  background-color: ${color};
  border: solid;
  margin-right: 10px;
  height: 5rem;
  width: 5rem;
  float: left;
  margin: 1rem;
`
)

const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
`

const RolledDie = ({
  color,
  icon,
}) => {
  const Die = makeDie(color)

  return (
    <>

    <Die > <Img src={icon} alt="fist" /> </Die >
    </>
  )
}

RolledDie.propTypes = {
}

export default RolledDie
