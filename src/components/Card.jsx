import React from 'react'

import CardInfo from './CardInfo'

const mapInfo = (item, key) => {
  switch (typeof item) {
    case 'string':
      return <CardInfo key={key} value={item} />
    case 'object':
      return (
        <CardInfo
          key={key}
          mouseOver={item.mouseOver}
          value={item.value}
        />
      )
    default:
      return (<span />)
  }
}

const Card = ({ title, content, info, onClick, style }) => (
  <div className='card' style={style} onClick={onClick}>
    <div className='card-title'>
      {title}
      {info && <div className='card-title-info'>
        {info.map((item, i) => mapInfo(item, `${title}-info-${i}`))}
      </div>}
    </div>
    <div className='card-body'>
      {content}
    </div>
  </div>
)

export default Card
