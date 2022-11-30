// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

const COUNTER_ACTIONS = {INCREMENT: 'INCREMENT'}

const incrementCounter = payload => ({
  type: COUNTER_ACTIONS.INCREMENT,
  payload,
})

const counterReducer = (state, {type, payload}) => {
  switch (type) {
    case COUNTER_ACTIONS.INCREMENT:
      return {...state, count: state.count + payload}
    default:
      throw new Error('Invalid action type')
  }
}

function Counter({initialCount = 0, step = 1}) {
  // 🐨 replace React.useState with React.useReducer.
  // 💰 React.useReducer(countReducer, initialCount)
  const [{count}, dispatchCount] = React.useReducer(counterReducer, {
    count: initialCount,
  })

  // 💰 you can write the countReducer function so you don't have to make any
  // changes to the next two lines of code! Remember:
  // The 1st argument is called "state" - the current value of count
  // The 2nd argument is called "newState" - the value passed to setCount
  const increment = () => dispatchCount(incrementCounter(step))
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
