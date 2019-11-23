import React from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'

import { addMalt, editMalt, removeMalt } from '../store/actions'

import Page from '../components/Page'
import Card from '../components/Card'
import Form from '../components/Form'
import { TextInput } from '../components/Input'
import TextArea from '../components/TextArea'
import Button from '../components/Button'
import ButtonGroup from '../components/ButtonGroup'
import Modal from '../components/Modal'

class NewMaltComponent extends React.Component {
  constructor(props) {
    super(props)

    // Set up local state
    let { malt = {} } = props.location.state || {}
    this.state = {
      valid: false,
      editing: !!props.location.state,
      removeModalOpen: false,
      malt
    }

    // Bind event handler functions
    this.openRemoveModal = this.openRemoveModal.bind(this)
    this.closeRemoveModal = this.closeRemoveModal.bind(this)
    this.remove = this.remove.bind(this)
    this.edit = this.edit.bind(this)
    this.save = this.save.bind(this)
  }

  formChange({valid, values}) {
    this.setState({
      valid,
      malt: {
        ...this.state.malt,
        ...values
      }
    })
  }

  openRemoveModal() {
    this.setState({ removeModalOpen: true })
  }

  closeRemoveModal() {
    this.setState({ removeModalOpen: false })
  }

  remove() {
    this.closeRemoveModal()
    this.props.removeMalt(this.state.malt)
    this.setState({ redirect: '/malts' })
  }

  edit() {
    this.props.editMalt(this.state.malt)
    this.setState({ redirect: '/malts' })
  }

  save() {
    if (this.state.valid) {
      if (this.state.editing) {
        this.props.editMalt(this.state.malt)
      } else {
        this.props.addMalt(this.state.malt)
      }
      this.setState({ redirect: '/malts' })
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to={this.state.redirect} />
    }

    return (
      <Page title='New Malt'>
        <Card title='Add a new malt'>
          <p>
            Enter the details of the malt you would like to add. The malt will be
            added to your <Link to='/malts'>saved malts</Link> and you will be
            able to add it to your beer recipes.
          </p>
          <Form formChange={this.formChange.bind(this)}>
            <TextInput label='Name' name='name' defaultValue={this.state.malt.name} required />
            <TextArea label='Notes' name='notes' defaultValue={this.state.malt.notes} required />
            <TextInput label='Grain' name='grain' defaultValue={this.state.malt.grain} />
            <TextInput label='Style' name='style' defaultValue={this.state.malt.style} />
          </Form>
        </Card>
        <ButtonGroup>
          <Button
            success
            disabled={!this.state.valid}
            onClick={this.state.valid ? this.save : this.edit}
            mouseOver={this.state.editing ? 'Save changes' : 'Add a new malt'}
            value='Save'
          />
          {this.state.editing && <Button
            danger
            onClick={this.openRemoveModal}
            mouseOver='Remove malt'
            value='Remove'
          />}
          <Link to='/malts'>
            <Button
              mouseOver='Return back to the malts page'
              value='Cancel'
            />
          </Link>
        </ButtonGroup>
        <Modal isOpen={this.state.removeModalOpen} contentLabel='Remove Malt Confirmation'>
          <p>Are you sure you want to remove this malt? You won't be able to undo this.</p>
          <ButtonGroup>
            <Button
              danger
              onClick={this.remove}
              value='Remove'
            />
            <Button
              onClick={this.closeRemoveModal}
              value='Cancel'
            />
          </ButtonGroup>
        </Modal>
      </Page>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addMalt: (malt) => dispatch(addMalt(malt)),
  editMalt: (malt) => dispatch(editMalt(malt)),
  removeMalt: (malt) => dispatch(removeMalt(malt))
})

export default connect(
  null,
  mapDispatchToProps
)(NewMaltComponent)
