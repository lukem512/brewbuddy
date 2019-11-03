import React from 'react'
import styled from 'styled-components'

import * as Colour from '../config/colours'
import * as Style from '../config/style'

const ButtonDiv = styled.div`
  width: fit-content;
  padding: ${Style.PADDING_SMALL} ${Style.PADDING};
  border: 1px solid ${Colour.INFO_DARKER};
  border-radius: ${Style.BORDER_RADIUS};
  font-weight: bold;
  color: ${Colour.INFO_DARKER}
  background-color: ${Colour.PRIMARY_LIGHTEST};
  cursor: pointer;
  transition: all ${Style.TRANSITION};

  &:hover {
    background-color: ${Colour.PRIMARY_LIGHTER};
  }
`

const Button = ({ onClick, value, mouseOver }) => (
  <ButtonDiv className='btn' onClick={onClick} title={mouseOver}>
    {value}
  </ButtonDiv>
)

export default Button
