import React from 'react'

import Card from './Card'
import ClickableIcon from './ClickableIcon'

const makeInfo = (props, onRemoveMaltClick) => {
  let { malt } = props, info = []
  if (malt.style) {
    info.push({
      mouseOver: 'Malt style, usually an indication of how it has been roasted',
      value: malt.style
    })
  }
  if (malt.grain) {
    info.push({
      mouseOver: 'The grain that has been malted',
      value: malt.grain
    })
  }
  info.push({
    mouseOver: 'Edit this malt',
    value: <ClickableIcon icon="arrow-alt-circle-right" size="sm" />,
    onClick: () => {
      props.history.push('/malt', { malt: props.malt })
    }
  })
  return info
}

const MaltCard = (props) => (
  <Card
    id={props.malt.id}
    title={props.malt.name}
    info={makeInfo(props)}
    {...props}
  >
    {props.malt.notes || ''}
  </Card>
)

export default MaltCard
