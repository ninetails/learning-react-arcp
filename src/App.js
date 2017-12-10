import React from 'react'

import Toggle from './components/Toggle'
import Switch from './components/Switch'

const App = () => (
  <Toggle
    onToggle={on => console.log('toggle', on)}
    onReset={on => console.log('reset', on)}
    render={({ on, toggle, reset, getTogglerProps }) => [
      <Switch key='switch' id="switch" on={on} {...getTogglerProps()} />,
      <hr key='hr' />,
      <button key="button" onClick={() => reset()}>Reset</button>
    ]}
    />
)

export default App;
