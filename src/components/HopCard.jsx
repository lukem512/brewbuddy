import React from 'react'
import Card from './Card'

const makeInfo = (hop) => {
  var info = []
  if (hop.alpha) {
    info.push({
      mouseOver: 'Alpha acids composition (%); used for bittering',
      value: 'Alpha: ' + hop.alpha + '%'
    })
  }
  if (hop.beta) {
    info.push({
      mouseOver: 'Beta acids composition (%); less bitter than alpha acids',
      value: 'Beta: ' + hop.beta + '%'
    })
  }
  if (hop.humulone) {
    info.push({
      mouseOver: 'Co-Humulone composition (%); a very bitter, harsh-tasting compound',
      value: 'Co-Humulone: ' + hop.humulone + '%'
    })
  }
  return info.length === 0 ? undefined : info
}

const HopCard = ({hop, ...rest}) => {
  return (
    <Card
      title={hop.name}
      content={hop.notes || ''}
      info={makeInfo(hop)}
      {...rest}
    />
  )
}

export default HopCard
