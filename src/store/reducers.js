import { combineReducers } from 'redux'
import { ADD_HOP, REMOVE_HOP } from './actions'
import initialState from './initialState'

export default combineReducers({
  hops: (state = initialState.hops, action) => {
    switch (action.type) {
      case ADD_HOP:
        return [...state, action.hop]
      case REMOVE_HOP:
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
