import styled, { css } from 'styled-components'

const Button = styled.button`
  background: #38796f;
  border-radius: 3px;
  border: none;
  color: white;
  margin: 1rem;
  width: 7rem;
  height: 3rem;
  font-size: 1.2rem;

  ${props => props.primary
    && css`
      background: palevioletred;
      color: white;
    `};
`

export default Button
