import React from 'react'

import ToggleProvider, { withToggle } from './providers/ToggleProvider'
import Switch from './components/Switch'
import UpdateBlocker from './components/UpdateBlocker'

const MySwitch = withToggle(
  ({ toggle: { on, toggle, getTogglerProps } }) =>
    <Switch id="switch" on={on} onChange={toggle} {...getTogglerProps() } />
)

const MyInput = withToggle(
  ({ toggle: { on, toggle } }) =>
    <input
      type="text"
      defaultValue={on ? 'on' : 'off'}
      placeholder="Type 'off' or 'on'"
      onChange={
        event => {
          if (event.target.value === 'on') {
            toggle(true)
          } else if (event.target.value === 'off') {
            toggle(false)
          }
      }}
      />
)

const StatePrinter = withToggle(
  ({ toggle }) => (
    <pre>
      state:{'\n\n'}
      {JSON.stringify(toggle, null, '  ')}
    </pre>
  )
)

const App = () => (
  <ToggleProvider>
    <UpdateBlocker>
      <MyInput />
      <MySwitch />
      <StatePrinter />
    </UpdateBlocker>
  </ToggleProvider>
)

export default App;
