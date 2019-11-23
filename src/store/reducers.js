import { combineReducers } from 'redux'
import * as Action from './actions'
import initialState from './initialState'
import uuid from 'uuid/v1'

const appReducers = combineReducers({
  hops: (state = initialState.hops, action) => {
    switch (action.type) {
      case Action.ADD_HOP:
        return [
          ...state,
          {
            ...action.hop,
            id: action.hop.id || uuid()
          }
        ]

      case Action.EDIT_HOP:
        return state.map(hop =>
          (hop.id === action.hop.id) ? action.hop : hop)

      case Action.REMOVE_HOP:
        return state.filter(hop => hop.id !== action.hop.id)

      default:
        return state
    }
  },
  malts: (state = initialState.malts, action) => {
    switch (action.type) {
      case Action.ADD_MALT:
        return [
          ...state,
          {
            ...action.malt,
            id: action.malt.id || uuid()
          }
        ]

      case Action.EDIT_MALT:
        return state.map(malt =>
          (malt.id === action.malt.id) ? action.malt : malt)

      case Action.REMOVE_MALT:
        return state.filter(malt => malt.id !== action.malt.id)

      default:
        return state
    }
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
