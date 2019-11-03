import React from 'react'
import styled from 'styled-components'

import * as Colour from '../config/colours'
import * as Style from '../config/style'

const InfoSpan = styled.span`
  cursor: ${({ title }) => (title ? 'help' : 'inherit')};
  margin-left: ${Style.PADDING};
  color: ${Colour.INFO_DARKER};
`

const CardInfo = ({ value, key, mouseOver }) => (
  <InfoSpan key={key} title={mouseOver}>
    {value}
  </InfoSpan>
)

export default CardInfo
