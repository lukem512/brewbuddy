import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { addHop } from '../store/actions'
import HopCard from './HopCard'
import Button from './Button'

const newHops = [
  { name: 'East Kent Golding' },
  { name: 'Brewer\'s Gold', alpha: 8.5 },
  { name: 'Cascade', alpha: 6.0, notes: 'A hugely popular, citrusy hop. Developed in Oregon in the 1950\'s, Cascade is now a pivotal hop in American brewing' },
  { name: 'Pride of Kent', alpha: 9.0, beta: 7.0, humulone: 35 },
  { name: 'Zenith' }
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
      <div>
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
)(HopsComponent)
