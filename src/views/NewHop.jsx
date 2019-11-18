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
    this.state = { valid: false, hop: {} }
  }

  save() {
    if (this.state.valid) {
      this.props.addHop(this.state.hop)
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
      <div style={{width: '100%'}}>
        <Card title='Add a new hop'>
          <p>
            Enter the details of the hop you would like to add. The hop will be
            added to your <Link to='/hops'>saved hops</Link> and you will be
            able to add it to your beer recipes.
          </p>
          <Form formChange={this.formChange.bind(this)}>
            <TextInput label='Name' name='name' required />
            <TextArea label='Notes' name='notes' required />
            <NumberInput label='Alpha acid (%)' name='alpha' validator={this.percentageValidator} />
            <NumberInput label='Beta acid (%)' name='beta' validator={this.percentageValidator} />
            <NumberInput label='Co-Humulone (%)' name='humulone' validator={this.percentageValidator} />
          </Form>
        </Card>
        <ButtonGroup>
          <Button
            disabled={!this.state.valid}
            onClick={this.state.valid ? this.save.bind(this) : undefined}
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
