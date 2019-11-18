import React from 'react'
import { connect } from 'react-redux'

import { removeHop } from '../store/actions'
import Card from './Card'
import Button from './Button'
import ButtonGroup from './ButtonGroup'
import Modal from './Modal'

import * as Colour from '../config/colours'

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
    colour: Colour.DANGER_DARKER,
    style: { fontSize: '1.5rem', lineHeight: '1rem' },
    mouseOver: 'Remove this hop',
    value: '×',
    onClick: () => onRemoveHopClick(hop)
  })
  return info
}

class HopCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = { modalOpen: false }

    this.openRemoveHopModal = this.openRemoveHopModal.bind(this)
    this.closeRemoveHopModal = this.closeRemoveHopModal.bind(this)
    this.removeHop = this.removeHop.bind(this)
  }

  openRemoveHopModal() {
    this.setState({ removeHopModalOpen: true })
  }

  closeRemoveHopModal() {
    this.setState({ removeHopModalOpen: false })
  }

  removeHop() {
    this.closeRemoveHopModal()
    this.props.removeHop(this.props.hop)
  }

  render() {
    return (
      <>
        <Card
          title={this.props.hop.name}
          info={makeInfo(this.props, this.openRemoveHopModal)}
          {...this.props}
        >
          {this.props.hop.notes || ''}
        </Card>
        <Modal isOpen={this.state.removeHopModalOpen} contentLabel='Remove Hop Confirmation'>
          <p>Are you sure you want to remove this hop? You won't be able to undo this.</p>
          <ButtonGroup>
            <Button
              danger
              onClick={this.removeHop}
              value='Remove'
            />
            <Button
              onClick={this.closeRemoveHopModal}
              value='Cancel'
            />
          </ButtonGroup>
        </Modal>
      </>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  removeHop: (hop) => dispatch(removeHop(hop))
})

export default connect(
  null,
  mapDispatchToProps
)(HopCard)
