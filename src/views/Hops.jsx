import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Page from '../components/Page'
import HopCard from '../components/HopCard'
import Button from '../components/Button'
import ButtonGroup from '../components/ButtonGroup'

class HopsComponent extends React.Component {
  render() {
    return (
      <Page title='Hops'>
        {this.props.items.map(hop => (
          <HopCard key={hop.id} hop={hop} {...this.props} />
        ))}
        <ButtonGroup>
          <Link to="/hop/new">
            <Button
              mouseOver='Add a new hop'
              value='Add Hop'
            />
          </Link>
        </ButtonGroup>
      </Page>
    )
  }
}

const mapStateToProps = (state) => ({
  items: state.hops
})

export default connect(
  mapStateToProps,
  null
)(HopsComponent)
