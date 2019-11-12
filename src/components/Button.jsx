import React from 'react'
import styled, { css } from 'styled-components'

import * as Colour from '../config/colours'
import * as Style from '../config/style'

const ButtonDiv = styled.div`
  width: fit-content;
  padding: ${Style.PADDING_SMALL} ${Style.PADDING};
  border-width: 2px;
  border-style: solid;
  border-color: ${Colour.INFO_DARKER};
  border-radius: ${Style.BORDER_RADIUS};
  font-weight: bold;
  color: ${Colour.INFO_DARKER};
  cursor: pointer;
  transition: all ${Style.TRANSITION};

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

const Button = ({ onClick, value, mouseOver }) => (
  <ButtonDiv className='btn' onClick={onClick} title={mouseOver}>
    {value}
  </ButtonDiv>
)

export const DangerButton = ({value, ...props}) => <ButtonDiv danger {...props}>{value}</ButtonDiv>
export const ExtraButton = ({value, ...props}) => <ButtonDiv extra {...props}>{value}</ButtonDiv>

export default Button
