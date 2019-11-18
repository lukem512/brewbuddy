import React from 'react'
import styled, { css } from 'styled-components'

import * as Colour from '../config/colours'
import * as Style from '../config/style'

import Label from './Label'
import InputGroup from './InputGroup'

const Input = styled.input`
  font-family: ${Style.FONT_FAMILY};
  width: 100%;
  padding: ${Style.PADDING_SMALL};
  border: 1px solid ${Colour.BORDER};
  border-radius: ${Style.BORDER_RADIUS};
  color: ${Colour.BLACK}
  background-color: ${Colour.WHITE};
  transition: all ${Style.TRANSITION};
  font-size: 1em;

  :focus,
  :hover {
    background-color: ${Colour.PRIMARY_LIGHTEST};
  }

  ${props => props.invalid && css`
    border: 1px solid ${Colour.DANGER_DARKER};
  `}
`

class InputComponent extends React.Component {
  render() {
    const {label, required, ...rest} = this.props;
    return (
      <InputGroup>
        {label && (<Label required={required}>{label}</Label>)}
        <Input {...rest} />
      </InputGroup>
    )
  }
}

export default InputComponent

export const TextInput = (props) => (
  <InputComponent
    type='text'
    {...props}
  />
)

export const NumberInput = (props) => (
  <InputComponent
    type='number'
    min={props.min || 0}
    step={props.step || 0.1}
    {...props}
  />
)

export const DateInput = (props) => (
  <InputComponent
    type='date'
    {...props}
  />
)
