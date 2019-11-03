import React from 'react';
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'

import * as Colour from './config/colours'
import * as Style from './config/style'

import Menu from './components/Menu'
import Hops from './components/Hops'

const Body = styled.div`
  width: 90%;
  display: flex;
  background-color: ${Colour.WHITE};
  padding: ${Style.PADDING}
`

const Container = styled.div`
  display: flex;
`

const App = () => (
  <Container>
    <Menu />
    <Body>
    <Switch>
      <Route path='/hops'>
        <Hops />
      </Route>

      { /*  This is the default route. As
            every URL begins with a '/', this
            will always match. */ }
      <Route path='/'>
        <div>Page not found</div>
      </Route>
    </Switch>
    </Body>
  </Container>
)

export default App
