import styled, { css } from 'styled-components'

const Button = styled.button`
  background: #38796f;
  border-radius: 3px;
  border: none;
  color: white;
  margin: 1em;
  padding: 1em;
  width: 6em;
  font-size: 16px;

  ${props => props.primary
    && css`
      background: palevioletred;
      color: white;
    `};
`

export default Button
