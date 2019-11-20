import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Card from './Card'

const makeInfo = (props, onRemoveHopClick) => {
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
    value: <FontAwesomeIcon icon="arrow-alt-circle-right" size="sm" />,
    onClick: () => {
      props.history.push('/hop', { hop: props.hop })
    }
  })
  return info
}

class HopCard extends React.Component {
  render() {
    return (
      <Card
        title={this.props.hop.name}

        info={makeInfo(this.props, this.openRemoveHopModal)}
        {...this.props}
      >
        {this.props.hop.notes || ''}
      </Card>
    )
  }
}

export default HopCard
