import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { addHop } from '../store/actions'

import Page from './Page'
import HopCard from './HopCard'
import Button from './Button'

const newHops = [
  { name: 'East Kent Golding', alpha: 5.5, beta: 2.5, notes: 'One of the best-loved English hops. Primarily used for its aromatic compounds, East Kent Golding adds an earthy, honeyed taste and is often used in pale styles.' },
  { name: 'Brewer\'s Gold', alpha: 8.5 },
  { name: 'Cascade', alpha: 6.0, notes: 'A hugely popular, citrusy hop. Developed in Oregon in the 1950\'s, Cascade is now a pivotal hop in American brewing' },
  { name: 'Pride of Kent', alpha: 9.0, beta: 7.0, humulone: 35 },
  { name: 'Zenith', notes: 'A less-common hop with good storage properties. Used for bittering.' }
]

const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
`

class HopsComponent extends React.Component {
  getNewHop = () => {
    return newHops[Math.floor(Math.random() * newHops.length)]
  }

  addNewHop = () => {
    this.props.addHop(this.getNewHop())
  }

  render() {
    return (
      <Page title='Hops'>
        {this.props.items.map(hop => (
          <HopCard key={hop.name} hop={hop} />
        ))}
        <CenteredDiv>
          <Button
            onClick={() => this.addNewHop()}
            mouseOver='Add a new hop'
            value='Add Hop'
          />
        </CenteredDiv>
      </Page>
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
)(HopsComponent)
