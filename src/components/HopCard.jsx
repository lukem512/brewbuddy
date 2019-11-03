import React from 'react'
import Card from './Card'

const makeInfo = (hop) => {
  var info = []
  if (hop.alpha) {
    info.push({
      mouseOver: 'Alpha Acid composition (%)',
      value: 'Alpha: ' + hop.alpha + '%'
    })
  }
  if (hop.beta) {
    info.push('Beta: ' + hop.beta + '%')
  }
  if (hop.humulone) {
    info.push('Co-Humulone: ' + hop.humulone + '%')
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
