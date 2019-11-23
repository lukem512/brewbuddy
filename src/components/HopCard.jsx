import React from 'react'

import Card from './Card'
import ClickableIcon from './ClickableIcon'

const makeInfo = (props) => {
  let { hop } = props, info = []
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
  info.push({
    mouseOver: 'Edit this hop',
    value: <ClickableIcon icon="arrow-alt-circle-right" size="sm" />,
    onClick: () => {
      props.history.push('/hop', { hop: props.hop })
    }
  })
  return info
}

const HopCard = (props) => (
  <Card
    id={props.hop.id}
    title={props.hop.name}
    info={makeInfo(props)}
    {...props}
  >
    {props.hop.notes || ''}
  </Card>
)

export default HopCard
