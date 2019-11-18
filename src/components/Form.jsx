import React from 'react'
import styled from 'styled-components'
import deepEqual from 'deep-equal'

const Container = styled.div`
`

class FormComponent extends React.Component {
  constructor(props) {
    super(props)

    // The state includes an object of value objects,
    // each with a current value, `value`, and
    // a boolean validity flag, `valid`
    this.state = { valid: false, values: {} }
  }

  // Called whenever the state, or props, changes
  componentDidUpdate(prevProps, prevState) {
    let valid = this.isFormValid()
    // TODO: why doesn't this fire for first field?
    if (prevState.valid === valid) {
      if (!deepEqual(prevState, this.state)) {
        if (this.props.formChange) {
          // Create a values array from the internal state object
          let values = Object.keys(this.state.values).reduce((obj, field) => ({
            ...obj,
            [field]: this.state.values[field].value
          }), {})

          // Fields that failed validation
          let failures = Object.keys(this.state.values).reduce((arr, field) => {
            return this.state.values[field].valid ? arr : [...arr, field]
          }, [])

          // Call the event handler, if one exists
          if (this.props.formChange) {
            this.props.formChange({
              valid: this.state.valid,
              values,
              failures
            })
          }
        }
      }
    } else {
      // Update local state with validity flag
      // componentDidUpdate will then run again
      this.setState({
        valid
      })
    }
  }

  // Update the component state with the new child value
  // and its validity
  valueChanged(child, index, value) {
    let fieldName = this.getFieldName(child, index)
    this.setState({
      values: {
        ...this.state.values,
        [fieldName]: {
          value,
          valid: this.validator(child, value)
        }
      }
    })
  }

  // Formula for determining a field name for a child
  getFieldName(child, index) {
    return child.props.name || child.props.label || index
  }

  // Returns a boolean value indicating
  // whether a specific value is valid for
  // a particular child
  validator(child, value) {
    if (child.props.required && value === null) {
      return false
    }
    if (child.props.required && value === '') {
      return false
    }
    if (child.props.validator) {
      return child.props.validator(value)
    }
    return true
  }

  // Returns a boolean value indicating whether
  // the form, as a whole, is valid
  isFormValid() {
    const { children } = this.props
    const { values } = this.state

    // Check all required fields are filled
    let requiredFieldsValid = true
    React.Children.forEach(children, (child, i) => {
      if (child.props.required) {
        let fieldName = this.getFieldName(child, i)
        requiredFieldsValid = values[fieldName] ? values[fieldName].valid : false
      }
    })

    // Check validity of all filled fields
    let fieldValues = Object.keys(values).map(field => values[field])
    let filledFieldsValid = fieldValues.every(field => field.valid)

    return requiredFieldsValid && filledFieldsValid
  }

  render() {
    const {children, ...rest} = this.props;
    return (
      <Container {...rest}>
        {React.Children.map(children, (child, i) => {
          return React.cloneElement(child, {
            onBlur: (event) => this.valueChanged(child, i, event.target.value)
          })
        })}
      </Container>
    )
  }
}

export default FormComponent
