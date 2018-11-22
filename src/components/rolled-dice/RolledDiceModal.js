import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Modal from 'react-modal'
import RolledDice from 'components/rolled-dice/RolledDice'
import Button from 'components/core/Button'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'navy',
    height: '80%',
    width: '90%',
    color: 'black',
  },
}

const FooBar = ({
  isOpen,
  onAfterOpen,
  onRequestClose,
  drawnDice,
  closeModal,
}) => (
  <Modal
    isOpen={isOpen}
    onAfterOpen={onAfterOpen}
    onRequestClose={onRequestClose}
    style={customStyles}
    contentLabel="Example Modal"
  >
    <RolledDice dice={drawnDice} />
    <Button onClick={closeModal}>Close</Button>
  </Modal>
)

FooBar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onAfterOpen: PropTypes.func.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  drawnDice: PropTypes.arrayOf(PropTypes.string).isRequired,

}

export default FooBar
