import React from 'react'
import { connect } from 'react-redux'

import { resetState } from '../store/actions'

import Page from '../components/Page'
import Button from '../components/Button'

const AdminComponent = (props) => (
  <Page title='Admin'>
    <Button
      danger
      onClick={() => props.resetState()}
    >
      Reset State
    </Button>
  </Page>
)

const mapDispatchToProps = (dispatch) => ({
  resetState: () => dispatch(resetState()),
})


export default connect(
  null,
  mapDispatchToProps
)(AdminComponent)
