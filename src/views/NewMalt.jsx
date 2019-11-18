import React from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'

import { addMalt } from '../store/actions'

import Page from '../components/Page'
import Card from '../components/Card'
import Form from '../components/Form'
import { TextInput } from '../components/Input'
import TextArea from '../components/TextArea'
import Button from '../components/Button'
import ButtonGroup from '../components/ButtonGroup'

class NewMaltComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = { valid: false, malt: {} }
  }

  save() {
    if (this.state.valid) {
      this.props.addMalt(this.state.malt)
      this.setState({ redirect: '/malts' })
    }
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
            <TextInput label='Name' name='name' required />
            <TextArea label='Notes' name='notes' required />
            <TextInput label='Grain' name='grain' />
            <TextInput label='Style' name='style' />
          </Form>
        </Card>
        <ButtonGroup>
          <Button
            disabled={!this.state.valid}
            onClick={this.state.valid ? this.save.bind(this) : undefined}
            mouseOver='Add a new malt'
            value='Save'
          />
          <Link to='/malts'>
            <Button
              mouseOver='Return back to the malts page'
              value='Cancel'
              danger
            />
          </Link>
        </ButtonGroup>
      </Page>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addMalt: (malt) => dispatch(addMalt(malt))
})

export default connect(
  null,
  mapDispatchToProps
)(NewMaltComponent)
