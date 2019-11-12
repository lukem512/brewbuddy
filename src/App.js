import React from 'react';
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'

import * as Colour from './config/colours'
import * as Style from './config/style'

import Menu from './components/Menu'
import Flex from './components/Flex'

import Hops from './views/Hops'
import Beers from './views/Beers'
import NewHop from './views/NewHop'

const Body = styled(Flex  )`
  width: 90%;
  background-color: ${Colour.WHITE};
  padding: ${Style.PADDING_LARGE}
`

const App = () => (
  <Flex>
    <Menu />
    <Body>
    <Switch>
      <Route path='/hops'>
        <Hops />
      </Route>
      <Route path='/beers'>
        <Beers />
      </Route>
      <Route path='/new/hops'>
        <NewHop />
      </Route>

      { /*  This is the default route. As
            every URL begins with a '/', this
            will always match. */ }
      <Route path='/'>
        <Flex style={{
          width: '100%',
          justifyContent: 'center'
        }}>
          Page not found
        </Flex>
      </Route>
    </Switch>
    </Body>
  </Flex>
)

export default App
