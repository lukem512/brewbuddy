import React from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'

import { addHop, removeHop } from '../store/actions'

import Page from '../components/Page'
import Card from '../components/Card'
import Form from '../components/Form'
import { TextInput, NumberInput } from '../components/Input'
import TextArea from '../components/TextArea'
import Button from '../components/Button'
import ButtonGroup from '../components/ButtonGroup'
import Modal from '../components/Modal'

class NewHopComponent extends React.Component {
  constructor(props) {
    super(props)

    // Set up local state
    let { hop = {} } = props.location.state || {}
    this.state = {
      valid: false,
      editing: !!props.location.state,
      removeHopModalOpen: false,
      hop
    }

    // Bind event handler functions
    this.openRemoveHopModal = this.openRemoveHopModal.bind(this)
    this.closeRemoveHopModal = this.closeRemoveHopModal.bind(this)
    this.removeHop = this.removeHop.bind(this)
    this.saveHop = this.saveHop.bind(this)
  }

  openRemoveHopModal() {
    this.setState({ removeHopModalOpen: true })
  }

  closeRemoveHopModal() {
    this.setState({ removeHopModalOpen: false })
  }

  removeHop() {
    this.closeRemoveHopModal()
    this.props.removeHop(this.state.hop)
    this.setState({ redirect: '/hops' })
  }

  saveHop() {
    if (this.state.valid) {
      if (this.state.editing) {
        this.props.editHop(this.state.hop)
      } else {
        this.props.addHop(this.state.hop)
      }
      this.setState({ redirect: '/hops' })
    }
  }

  percentageValidator(value){
    if (!value || value === '') {
      return true
    }

    let floatVal = parseFloat(value)
    return !(isNaN(floatVal) || floatVal < 0 || floatVal > 100)
  }

  formChange({valid, values}) {
    this.setState({
      valid,
      hop: {
        ...this.state.hop,
        ...values
      }
    })
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to={this.state.redirect} />
    }

    return (
      <Page title={this.state.editing ? 'Edit Hop' : 'New Hop'}>
        <Card
          title={this.state.editing ? 'Make changes to a hop' : 'Add a new hop'}
        >
          {this.state.editing ? (
            <p>
              You can make changes to this hop below. Existing beer recipes that
              make use of this hop will not be affected.
            </p>
          ) : (
            <p>
              Enter the details of the hop you would like to add. The hop will be
              added to your <Link to='/hops'>saved hops</Link> and you will be
              able to add it to your beer recipes.
            </p>
          )}
          <Form formChange={this.formChange.bind(this)}>
            <TextInput label='Name' defaultValue={this.state.hop.name} name='name' required />
            <TextArea label='Notes' defaultValue={this.state.hop.notes} name='notes' required />
            <NumberInput label='Alpha acid (%)' name='alpha' defaultValue={this.state.hop.alpha} validator={this.percentageValidator} />
            <NumberInput label='Beta acid (%)' name='beta' defaultValue={this.state.hop.beta} validator={this.percentageValidator} />
            <NumberInput label='Co-Humulone (%)' name='humulone' defaultValue={this.state.hop.humulone} validator={this.percentageValidator} />
          </Form>
        </Card>
        <ButtonGroup>
          <Button
            success
            disabled={!this.state.valid}
            onClick={this.state.valid ? this.saveHop : undefined}
            mouseOver={this.state.editing ? 'Save changes' : 'Add a new hop'}
            value='Save'
          />
          {this.state.editing && <Button
            danger
            onClick={this.openRemoveHopModal}
            mouseOver='Remove hop'
            value='Remove'
          />}
          <Link to='/hops'>
            <Button
              mouseOver='Return back to the hops page'
              value='Cancel'
            />
          </Link>
        </ButtonGroup>
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
      </Page>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addHop: (hop) => dispatch(addHop(hop)),
  editHop: (hop) => {},
  removeHop: (hop) => dispatch(removeHop(hop))
})

export default connect(
  null,
  mapDispatchToProps
)(NewHopComponent)
