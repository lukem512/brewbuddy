import { combineReducers } from 'redux'
import * as Action from './actions'
import initialState from './initialState'

const appReducers = combineReducers({
  hops: (state = initialState.hops, action) => {
    switch (action.type) {
      case Action.ADD_HOP:
        return [...state, action.hop]
      case Action.REMOVE_HOP:
        return state.filter(hop => hop.name !== action.hop.name)

      default:
        return state
    }
  },
  malts: (state = initialState.malts, action) => {
    return state
  },
  beers: (state = initialState.beers, action) => {
    return state
  }
})

const rootReducer = (state, action) => {
  if (action.type === Action.RESET_STATE) {
    state = undefined
  }
  return appReducers(state, action)
}

export default rootReducer
