import React from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'

import { addHop } from '../store/actions'

import Card from '../components/Card'
import Form from '../components/Form'
import { TextInput, NumberInput } from '../components/Input'
import TextArea from '../components/TextArea'
import Button from '../components/Button'
import ButtonGroup from '../components/ButtonGroup'

class NewHopComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hop: {} }
  }

  // validates the form input
  // SUGGESTION: return an array of error inputs on failure
  // See issue #3
  validate() {
    return !!(this.state.hop.name)
  }

  // Validates the form and adds the hop to the global state
  save() {
    if (this.validate()) {
      this.props.addHop(this.state.hop)
      this.setState({ redirect: '/hops' })
    }
  }

  // Update the local state with form values
  setNotes(event) {
    this.setState({
      hop: {
        ...this.state.hop,
        notes: event.target.value
      }
    })
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to={this.state.redirect} />
    }

    return (
      <div style={{width: '100%'}}>
        <Card title='Add a new hop'>
          <p>
            Enter the details of the hop you would like to add. The hop will be
            added to your <Link to='/hops'>saved hops</Link> and you will be
            able to add it to your beer recipes.
          </p>
          <Form formChange={({valid, values}) => { console.log('Got update', valid, values)}}>
            <TextInput label='Name' name='name' required />
            <NumberInput label='Alpha acid (%)' name='alpha' />
            <NumberInput label='Beta acid (%)' name='beta' />
            <NumberInput label='Co-Humulone (%)' name='humulone' />
            <TextArea
              label='Notes'
              onBlur={this.setNotes.bind(this)}
            />
          </Form>
        </Card>
        <ButtonGroup>
          <Button
            onClick={this.save.bind(this)}
            mouseOver='Add a new hop'
            value='Save'
          />
          <Link to='/hops'>
            <Button
              mouseOver='Return back to the hops page'
              value='Cancel'
              danger
            />
          </Link>
        </ButtonGroup>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  items: state.hops
})

const mapDispatchToProps = (dispatch) => ({
  addHop: (hop) => dispatch(addHop(hop))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewHopComponent)
