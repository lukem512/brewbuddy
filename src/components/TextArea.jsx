import React from 'react'
import styled from 'styled-components'

import * as Colour from '../config/colours'
import * as Style from '../config/style'

import Label from './Label'
import InputGroup from './InputGroup'

const TextArea = styled.textarea`
  font-family: ${Style.FONT_FAMILY};
  width: 100%;
  padding: ${Style.PADDING_SMALL};
  border: 1px solid ${Colour.BORDER};
  border-radius: ${Style.BORDER_RADIUS};
  color: ${Colour.BLACK}
  background-color: ${Colour.WHITE};
  transition: all ${Style.TRANSITION};
  font-size: 1em;
  resize: vertical;

  &:focus,
  &:hover {
    background-color: ${Colour.PRIMARY_LIGHTEST};
  }
`

class TextAreaComponent extends React.Component {
  render() {
    const {label, required, ...rest} = this.props;
    return (
      <InputGroup>
        {label && (<Label required={required}>{label}</Label>)}
        <TextArea {...rest} />
      </InputGroup>
    )
  }
}

export default TextAreaComponent
