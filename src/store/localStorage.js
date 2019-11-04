// Load the state from localStorage
export const loadState = () => {
  try {
    const serialisedState = localStorage.getItem('state')
    if (serialisedState === null) {
      return undefined
    }
    return JSON.parse(serialisedState)
  }
  catch (err) {
    return undefined
  }
}

// Save the state as serialised JSON
export const saveState = (state) => {
  try {
    const serialisedState = JSON.stringify(state)
    localStorage.setItem('state', serialisedState)
  }
  catch (err) {
    console.log('Error saving state', err)
  }
}
