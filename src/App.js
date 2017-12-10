import React from 'react'

import Toggle from './components/Toggle'
import Switch from './components/Switch'

const App = () => (
  <Toggle
    onToggle={on => console.log('toggle', on)}
    render={({ on, toggle, togglerProps }) => [
      on
        ? 'The button is on'
        : 'The button is off',
      <Switch key='switch' id="switch" on={on} {...togglerProps} />,
      <hr key='hr' />,
      <button key="button" {...togglerProps}>
        {on ? 'on' : 'off'}
      </button>
    ]}
    />
)

export default App;
