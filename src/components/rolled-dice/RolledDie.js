import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import icon from 'images/fist.png'

const getDie = color => (
  styled.div`
  background-color: ${color};
  border: solid;
  margin-right: 10px;
`
)


const RolledDie = ({
  baz,
  zap,
}) => {
  const Die = getDie('blue')

  return (
    <>
    <Die > <img src={icon} alt="fist" /> </Die >
    </>
  )
}

RolledDie.propTypes = {
}

export default RolledDie
