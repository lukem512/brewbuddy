import { createStore } from 'redux'
import throttle from 'lodash.throttle'

import reducers from './reducers'
import { loadState, saveState } from './localStorage'

const persistedState = loadState()
const store = createStore(reducers, persistedState)

// Subscribe to state events
// and save them to localStorage.
// Throttle to only update once per second, maximum
store.subscribe(throttle(() => saveState(store.getState()), 1000))

export default store
