import React from 'react'
import styled, { css } from 'styled-components'

import * as Colour from '../config/colours'
import * as Style from '../config/style'

const ButtonDiv = styled.div`
  width: fit-content;
  padding: ${Style.PADDING_SMALL} ${Style.PADDING};
  border-width: 2px;
  border-style: solid;
  border-radius: ${Style.BORDER_RADIUS};
  font-weight: bold;
  cursor: pointer;
  transition: all ${Style.TRANSITION};

  border-color: ${Colour.INFO_DARKER};
  color: ${Colour.INFO_DARKER};

  :hover {
    background-color: ${Colour.PRIMARY_LIGHTER};
  }

  ${props => props.danger && css`
    border-color: ${Colour.DANGER};
    color: ${Colour.DANGER};
  `}

  ${props => props.extra && css`
    border-color: ${Colour.BORDER};
    color: ${Colour.BORDER};
  `}
`

const Button = ({ onClick, value, mouseOver, ...rest}) => (
  <ButtonDiv className='btn' onClick={onClick} title={mouseOver} {...rest}>
    {value}
  </ButtonDiv>
)

export default Button
