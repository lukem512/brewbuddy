import React from 'react'
import styled from 'styled-components'

import * as Colour from '../config/colours'
import * as Style from '../config/style'

import CardInfo from './CardInfo'

const mapInfo = (item, key) => {
  console.log(key)
  switch (typeof item) {
    case 'string':
      return <CardInfo infoKey={key}>{item}</CardInfo>
    case 'object':
      return (
        <CardInfo
          infoKey={key}
          mouseOver={item.mouseOver}
          value={item.value}
          onClick={item.onClick}
        >
          {item.value}
        </CardInfo>
      )
    default:
      return (<span />)
  }
}

const Container = styled.div`
  margin-bottom: ${Style.PADDING};
  border: 1px solid ${Colour.BORDER};
  border-radius: ${Style.BORDER_RADIUS};
  background-colour: ${Colour.WHITE};
  text-align: left;
`

const Title = styled.div`
  display: flex;
  border-bottom: 1px solid ${Colour.BORDER};
  padding: ${Style.PADDING};
  font-weight: 500;
  background-color: ${Colour.PRIMARY_LIGHTEST};
`

const Info = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
`

const Body = styled.div`
  padding: ${Style.PADDING};
`

const Card = ({ title, content, info, onClick, style }) => (
  <Container style={style} onClick={onClick}>
    <Title>
      {title}
      {info && <Info>
        {info.map((item, i) => mapInfo(item, `${title}-info-${i}`))}
      </Info>}
    </Title>
    <Body>
      {content}
    </Body>
  </Container>
)

export default Card
