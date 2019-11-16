// Hops
export const ADD_HOP    = 'ADD_HOP'
export const REMOVE_HOP = 'REMOVE_HOP'

// Housekeeping
export const RESET_STATE = 'RESET_STATE'

export const addHop = hop => {
  return {
    type: ADD_HOP,
    hop
  }
}

export const removeHop = hop => {
  return {
    type: REMOVE_HOP,
    hop
  }
}

export const resetState = () => {
  return {
    type: RESET_STATE,
  }
}
