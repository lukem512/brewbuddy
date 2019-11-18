// Hops
export const ADD_HOP    = 'ADD_HOP'
export const REMOVE_HOP = 'REMOVE_HOP'

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

// Malts
export const ADD_MALT = 'ADD_MALT'
export const REMOVE_MALT = 'REMOVE_MALT'

export const addMalt = malt => {
  return {
    type: ADD_MALT,
    malt
  }
}

export const removeMalt = malt => {
  return {
    type: REMOVE_MALT,
    malt
  }
}

// Housekeeping
export const RESET_STATE = 'RESET_STATE'

export const resetState = () => {
  return {
    type: RESET_STATE,
  }
}
