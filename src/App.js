import React from 'react';
import { Provider } from 'react-redux'

import store from './store/store'

import Hops from './components/Hops'

// Log the initial state
console.log(store.getState())

// Subscribe to, and log, state changes
store.subscribe(() => console.log(store.getState()))

const App = () => (
  <Provider store={store}>
    <div className='App'>
      <Hops />
    </div>
  </Provider>
)

export default App
