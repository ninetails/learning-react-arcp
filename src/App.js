import React from 'react'

import ReduxProvider, { withRedux } from './providers/ReduxProvider'
import Switch from './components/Switch'
import UpdateBlocker from './components/UpdateBlocker'

const MySwitch = withRedux(
  ({ state, dispatch }) =>
    <Switch
      id="switch"
      aria-expanded={state.on}
      on={state.on}
      onChange={() => dispatch({ type: 'toggle', value: !state.on })}
      />
)

const MyInput = withRedux(
  ({ state, dispatch }) =>
    <input
      type="text"
      value={state.inputValue || (state.on ? 'on' : 'off')}
      placeholder="Type 'off' or 'on'"
      onChange={
        event => {
          if (event.target.value === 'on') {
            dispatch({ type: 'toggle', value: true })
          } else if (event.target.value === 'off') {
            dispatch({ type: 'toggle', value: false })
          }
          dispatch({ type: 'input_change', value: event.target.value })
      }}
      />
)

const StatePrinter = withRedux(
  ({ state }) => (
    <pre>
      state:{'\n\n'}
      {JSON.stringify(state, null, '  ')}
    </pre>
  )
)

const App = () => (
  <ReduxProvider
    initialState={{ on: true }}
    reducer={(state, action) => {
      switch (action.type) {
        case 'toggle':
          return {
            ...state,
            on: action.value
          }
        case 'input_change':
          return {
            ...state,
            inputValue: action.value
          }
        default:
          return state;
      }
    }}
    >
    <UpdateBlocker>
      <MyInput />
      <MySwitch />
      <StatePrinter />
    </UpdateBlocker>
  </ReduxProvider>
)

export default App;
