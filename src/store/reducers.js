import { combineReducers } from 'redux'
import { ADD_HOP, REMOVE_HOP } from './actions'

export const initialState = {
  hops: [
    {
      name: 'Fuggle',
      alpha: 4.9,
      notes: 'An aromatic Kentish hop used primarily in English Ales and bitters.'
    },
    {
      name: 'Citra',
      alpha: 12.5,
      notes: 'A citrusy hop with notes of grapefruit and tropical fruits. Used extensively in Indian Pale and American Ales. Useful as a bittering agent and for aroma.'
    }
  ],
  malts: [
    {
      name: 'Maris Otter',
      notes: 'A pale malt, often used as the base of a brew.'
    }
  ],
  beers: []
}

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
