import React from 'react'
import styled from 'styled-components'

import * as Colour from '../config/colours'
import * as Style from '../config/style'

import CardInfo from './CardInfo'
import Flex from './Flex'

const mapInfo = (item, key) => {
  switch (typeof item) {
    case 'string':
      return <CardInfo key={key}>{item}</CardInfo>
    case 'object':
      return (
        <CardInfo
          key={key}
          mouseOver={item.mouseOver}
          value={item.value}
          onClick={item.onClick}
          {...item}
        >
          {item.value || ''}
        </CardInfo>
      )
    default:
      return (<span />)
  }
}

const Container = styled.div`
  margin-bottom: ${Style.PADDING};
  border: 2px solid ${Colour.BORDER};
  border-radius: ${Style.BORDER_RADIUS};
  background-color: ${Colour.WHITE};
  text-align: left;
  width: 100%;
`

const Title = styled(Flex)`
  border-bottom: 1px solid ${Colour.BORDER};
  padding: ${Style.PADDING};
  font-weight: 500;
  background-color: ${Colour.PRIMARY_LIGHTEST};
  align-items: center;
  border-top-left-radius: ${Style.BORDER_RADIUS};
  border-top-right-radius: ${Style.BORDER_RADIUS};
`

const Info = styled(Flex)`
  flex-grow: 1;
  justify-content: flex-end;
  align-items: center;
`

const Body = styled.div`
  padding: ${Style.PADDING};
`

const Card = ({ id, title, children, info, onClick, style }) => (
  <Container style={style} onClick={onClick}>
    <Title>
      {title}
      {info && <Info>
        {info.map((item, i) => mapInfo(item, `${id || title}-info-${i}`))}
      </Info>}
    </Title>
    <Body>
      {children}
    </Body>
  </Container>
)

export default Card
