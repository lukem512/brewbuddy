import { createStore } from 'redux'
import reducers from './reducers'
import { loadState, saveState } from './localStorage'

const persistedState = loadState()
const store = createStore(reducers, persistedState)

// Subscribe to state events
// and save them to localStorage
store.subscribe(() => saveState(store.getState()))

export default store
