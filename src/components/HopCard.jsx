import React from 'react'
import { connect } from 'react-redux'

import { removeHop } from '../store/actions'
import Card from './Card'

import * as Colour from '../config/colours'

const makeInfo = (hop, props) => {
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
  info.push({
    colour: Colour.DANGER_DARKER,
    style: { fontSize: '1.5rem', lineHeight: '1rem' },
    mouseOver: 'Remove this hop',
    value: '×',
    onClick: () => { props.removeHop(hop) }
  })
  return info
}

const HopCard = ({hop, ...rest}) => {
  return (
    <Card
      title={hop.name}
      info={makeInfo(hop, rest)}
      {...rest}
    >
      {hop.notes || ''}
    </Card>
  )
}

const mapDispatchToProps = (dispatch) => ({
  removeHop: (hop) => dispatch(removeHop(hop))
})

export default connect(
  null,
  mapDispatchToProps
)(HopCard)
