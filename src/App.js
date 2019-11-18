import React from 'react';
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'

import * as Colour from './config/colours'
import * as Style from './config/style'

import Menu from './components/Menu'
import Flex from './components/Flex'

import Hops from './views/Hops'
import Malts from './views/Malts'
import Beers from './views/Beers'
import NewHop from './views/NewHop'
import NewMalt from './views/NewMalt'

const Container = styled(Flex)`
  flex-direction: row;

  @media (max-width: ${Style.MOBILE}) {
    flex-direction: column;
  }
`

const Body = styled(Flex)`
  max-width: 100vw;
  background-color: ${Colour.WHITE};
  padding: ${Style.PADDING_LARGE};

  @media (min-width: ${Style.MOBILE}) {
    width: 100%;
  }
`

const App = () => (
  <Container>
    <Menu />
    <Body>
    <Switch>
      <Route path='/' exact component={Hops} />
      <Route path='/hops' component={Hops} />
      <Route path='/malts' component={Malts} />
      <Route path='/beers' component={Beers} />
      <Route path='/new/hop' component={NewHop} />
      <Route path='/new/malt' component={NewMalt} />

      { /*  This is the default route. */}
      <Route>
        <Flex style={{
          width: '100%',
          justifyContent: 'center'
        }}>
          Page not found
        </Flex>
      </Route>
    </Switch>
    </Body>
  </Container>
)

export default App
