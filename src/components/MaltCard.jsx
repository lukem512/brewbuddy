import React from 'react'
import { connect } from 'react-redux'

import { removeMalt } from '../store/actions'

import Card from './Card'
import Button from './Button'
import ButtonGroup from './ButtonGroup'
import Modal from './Modal'

import * as Colour from '../config/colours'

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
    colour: Colour.DANGER_DARKER,
    style: { fontSize: '1.5rem', lineHeight: '1rem' },
    mouseOver: 'Remove this malt',
    value: '×',
    onClick: () => onRemoveMaltClick(malt)
  })
  return info
}

class MaltCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = { removeMaltModalOpen: false }

    this.openRemoveMaltModal = this.openRemoveMaltModal.bind(this)
    this.closeRemoveMaltModal = this.closeRemoveMaltModal.bind(this)
    this.removeMalt = this.removeMalt.bind(this)
  }

  openRemoveMaltModal() {
    this.setState({ removeMaltModalOpen: true })
  }

  closeRemoveMaltModal() {
    this.setState({ removeMaltModalOpen: false })
  }

  removeMalt() {
    this.closeRemoveMaltModal()
    this.props.removeMalt(this.props.malt)
  }

  render() {
    return (
      <>
        <Card
          title={this.props.malt.name}
          info={makeInfo(this.props, this.openRemoveMaltModal)}
          {...this.props}
        >
          {this.props.malt.notes || ''}
        </Card>
        <Modal isOpen={this.state.removeMaltModalOpen} contentLabel='Remove Malt Confirmation'>
          <p>Are you sure you want to remove this malt? You won't be able to undo this.</p>
          <ButtonGroup>
            <Button
              danger
              onClick={this.removeMalt}
              value='Remove'
            />
            <Button
              onClick={this.closeRemoveMaltModal}
              value='Cancel'
            />
          </ButtonGroup>
        </Modal>
      </>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  removeMalt: (malt) => dispatch(removeMalt(malt)),
})

export default connect(
  null,
  mapDispatchToProps
)(MaltCard)
