import styled from 'styled-components'

import * as Colour from '../config/colours'
import * as Style from '../config/style'

const Input = styled.input`
  width: 100%;
  padding: ${Style.PADDING_SMALL};
  border: 1px solid ${Colour.BORDER};
  border-radius: ${Style.BORDER_RADIUS};
  color: ${Colour.BLACK}
  background-color: ${Colour.WHITE};
  transition: all ${Style.TRANSITION};
  font-size: 1em;

  &:focus,
  &:hover {
    background-color: ${Colour.PRIMARY_LIGHTEST};
  }
`

export default Input
