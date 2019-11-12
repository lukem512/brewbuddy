import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { addHop } from '../store/actions'

import * as Style from '../config/style'

import Card from '../components/Card'
import TextArea from '../components/TextArea'
import Input from '../components/Input'
import InputGroup from '../components/InputGroup'
import Button, { DangerButton } from '../components/Button'
import ButtonGroup from '../components/ButtonGroup'

const newHops = [
  { name: 'East Kent Golding', alpha: 5.5, beta: 2.5, notes: 'One of the best-loved English hops. Primarily used for its aromatic compounds, East Kent Golding adds an earthy, honeyed taste and is often used in pale styles.' },
  { name: 'Brewer\'s Gold', alpha: 8.5 },
  { name: 'Cascade', alpha: 6.0, notes: 'A hugely popular, citrusy hop. Developed in Oregon in the 1950\'s, Cascade is now a pivotal hop in American brewing' },
  { name: 'Pride of Kent', alpha: 9.0, beta: 7.0, humulone: 35 },
  { name: 'Zenith', notes: 'A less-common hop with good storage properties. Used for bittering.' }
]

const Label = styled.label`
  &:after {
    content: ':';
    margin-right: ${Style.PADDING};
  }
`

class NewHopComponent extends React.Component {
  addNewHop = () => {
    // TODO: get these values from the form
    // see https://scotch.io/tutorials/managing-form-state-in-react-with-redux-form
    this.props.addHop({})
  }

  render() {
    return (
      <div style={{width: '100%'}}>
        <Card title='Add a new hop'>
          <InputGroup>
            <Label>Name</Label>
            <Input type='text' />
          </InputGroup>
          <InputGroup>
            <Label>Alpha acid (%)</Label>
            <Input type='text' />
          </InputGroup>
          <InputGroup>
            <Label>Beta acid (%)</Label>
            <Input type='text' />
          </InputGroup>
          <InputGroup>
            <Label>Notes</Label>
            <TextArea style={{resize: 'vertical'}} />
          </InputGroup>
        </Card>
        <ButtonGroup>
          <Button
            onClick={() => this.addNewHop()}
            mouseOver='Add a new hop'
            value='Save'
          />
          <Link to='/hops'>
            <DangerButton
              mouseOver='Return back to the hops page'
              value='Cancel'
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
