import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const makeDie = (color) => {
  const backgroundColor = (color === 'black') ? 'SlateGrey' : color
  return styled.div`
  background-color: ${backgroundColor};
  border: solid;
  margin-right: 10px;
  height: 5rem;
  width: 5rem;
  float: left;
  margin: 1rem;
`
}

const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
`

const RolledDie = ({
  color,
  icon,
  alt,
}) => {
  const Die = makeDie(color)

  return (
    <>

      <Die>
        {' '}
        <Img src={icon} alt={alt} />
        {' '}
      </Die>
    </>
  )
}

RolledDie.propTypes = {
}

export default RolledDie
