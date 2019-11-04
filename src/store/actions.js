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
