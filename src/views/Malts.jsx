import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Page from '../components/Page'
import MaltCard from '../components/MaltCard'
import Button from '../components/Button'
import ButtonGroup from '../components/ButtonGroup'

class MaltsComponent extends React.Component {
  render() {
    return (
      <Page title='Malts'>
        {this.props.items.map(malt => (
          <MaltCard key={malt.name} malt={malt} />
        ))}
        <ButtonGroup>
          <Link to="/malt/new">
            <Button
              mouseOver='Add a new malt'
              value='Add Malt'
            />
          </Link>
        </ButtonGroup>
      </Page>
    )
  }
}

const mapStateToProps = (state) => ({
  items: state.malts
})

export default connect(
  mapStateToProps,
  null
)(MaltsComponent)
