import React from 'react'
import { connect } from 'react-redux'
import styled, { css } from 'styled-components'
import { Link, Redirect } from 'react-router-dom'

import { addHop } from '../store/actions'

import * as Style from '../config/style'
import * as Colour from '../config/colours'

import Card from '../components/Card'
import TextArea from '../components/TextArea'
import Input from '../components/Input'
import InputGroup from '../components/InputGroup'
import Button from '../components/Button'
import ButtonGroup from '../components/ButtonGroup'

const Label = styled.label`
  margin-right: ${Style.PADDING};
  white-space: nowrap;

  ${props => props.required && css`
    ::after {
      content: '*';
    }
  `}
`

const InfoContainer = styled.div`
  border: 1px solid ${Colour.BORDER};
  border-radius: ${Style.BORDER_RADIUS};
  padding: ${Style.PADDING};
`

class NewHopComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hop: {} }
  }

  // validates the form input
  // SUGGESTION: return an array of error inputs on failure
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
  setName(event) {
    this.setState({
      hop: {
        ...this.state.hop,
        name: event.target.value
      }
    })
  }

  setNotes(event) {
    this.setState({
      hop: {
        ...this.state.hop,
        notes: event.target.value
      }
    })
  }

  setField(name, value) {
    console.log(name, value)
    this.setState({
      hop: {
        ...this.state.hop,
        [name]: value
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
          <InputGroup>
            <Label required>Name</Label>
            <Input
              type='text'
              onBlur={this.setName.bind(this)}
            />
          </InputGroup>
          <InputGroup>
            <Label>Alpha acid (%)</Label>
            <Input
              type='number'
              min='0'
              step='0.1'
              onBlur={(event) => this.setField('alpha', event.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <Label>Beta acid (%)</Label>
            <Input
              type='number'
              min='0'
              step='0.1'
              onBlur={(event) => this.setField('beta', event.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <Label>Co-Humulone (%)</Label>
            <Input
              type='number'
              min='0'
              step='0.1'
              onBlur={(event) => this.setField('humulone', event.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <Label>Notes</Label>
            <TextArea
              style={{resize: 'vertical'}}
              onBlur={this.setNotes.bind(this)}
            />
          </InputGroup>
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
