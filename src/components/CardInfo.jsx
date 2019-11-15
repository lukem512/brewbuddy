import React from 'react'
import styled from 'styled-components'

import * as Colour from '../config/colours'
import * as Style from '../config/style'

const InfoSpan = styled.span`
  cursor: ${(props) => {
    if (props.onClick) {
      return 'pointer'
    } else if (props.title) {
      return 'help'
    } else {
      return 'inherit'
    }
  }};
  margin-left: ${Style.PADDING};
  color: ${props => props.colour || Colour.INFO_DARKER};
`

const CardInfo = ({ infoKey, mouseOver, children, ...rest }) => (
  <InfoSpan key={infoKey} title={mouseOver} {...rest}>
    {children}
  </InfoSpan>
)

export default CardInfo
