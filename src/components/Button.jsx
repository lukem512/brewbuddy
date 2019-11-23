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

  ${props => props.primary && css`
    border-color: ${Colour.PRIMARY};
    color: ${Colour.PRIMARY};
  `}

  ${props => props.success && css`
    border-color: ${Colour.SUCCESS_DARKER};
    color: ${Colour.SUCCESS_DARKER};
  `}

  ${props => props.danger && css`
    border-color: ${Colour.DANGER};
    color: ${Colour.DANGER};
  `}

  ${props => props.extra && css`
    border-color: ${Colour.BLACK};
    color: ${Colour.BLACK};
  `}

  ${props => props.disabled && css`
    cursor: default;
    opacity: 0.4;

    :hover {
      background-color: transparent;
    }
  `}
`

const Button = ({ onClick, value, mouseOver, ...rest}) => (
  <ButtonDiv className='btn' onClick={onClick} title={mouseOver} {...rest}>
    {value}
  </ButtonDiv>
)

export default Button
