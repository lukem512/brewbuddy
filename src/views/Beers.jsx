import React from 'react'
import { connect } from 'react-redux'

import Page from '../components/Page'

class BeersComponent extends React.Component {
  render() {
    return (
      <Page title='Beers'>
        <select>
          {this.props.hops.map(hop => (
            <option value={hop.name} key={hop.name}>
              {hop.name}
            </option>
          ))}
        </select>
      </Page>
    )
  }
}

const mapStateToProps = (state) => ({
  hops: state.hops,
  malts: state.malts,
  ingredients: state.ingredients,
  beers: state.ingredients
})

export default connect(
  mapStateToProps,
  null
)(BeersComponent)
