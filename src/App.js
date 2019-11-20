import React from 'react';
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faBeer,
  faArrowAltCircleRight,
  faPencilAlt,
  faTimes
} from '@fortawesome/free-solid-svg-icons'

import * as Colour from './config/colours'
import * as Style from './config/style'

import Menu from './components/Menu'
import Flex from './components/Flex'

import Hop from './views/Hop'
import Hops from './views/Hops'
import Malt from './views/Malt'
import Malts from './views/Malts'
import Beers from './views/Beers'

// Set up Font Awesome library
library.add(faBeer, faArrowAltCircleRight, faPencilAlt, faTimes)

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
      <Route path='/hop' component={Hop} />
      <Route path='/hops' component={Hops} />
      <Route path='/malts' component={Malts} />
      <Route path='/beers' component={Beers} />
      <Route path='/malt' component={Malt} />

      { /* Extraneous routes that explicitly create new objects */ }
      <Route path='/hop/new' component={Hop} />
      <Route path='/malt/new' component={Malt} />

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
