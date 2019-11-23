import React from 'react'
import { connect } from 'react-redux'

import Page from '../components/Page'
import Select from '../components/Select'

class BeersComponent extends React.Component {
  render() {
    return (
      <Page title='Beers'>
        <Select>
          {this.props.hops.map(hop => (
            <option value={hop.name} key={hop.id}>
              {hop.name}
            </option>
          ))}
        </Select>
        <Select>
          {this.props.malts.map(malt => (
            <option value={malt.name} key={malt.id}>
              {malt.name}
            </option>
          ))}
        </Select>
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
