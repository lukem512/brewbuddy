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
import Button from '../components/Button'
import ButtonGroup from '../components/ButtonGroup'

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
