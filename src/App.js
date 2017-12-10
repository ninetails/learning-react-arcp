import React from 'react'

import Toggle from './components/Toggle'
import Switch from './components/Switch'

const App = () => (
  <Toggle
    onToggle={on => console.log('toggle', on)}
    render={({ on, toggle, getTogglerProps }) => [
      on
        ? 'The button is on'
        : 'The button is off',
      <Switch key='switch' id="switch" on={on} {...getTogglerProps()} />,
      <hr key='hr' />,
      <button key="button" {...getTogglerProps({ onClick: () => alert('hi') })}>
        {on ? 'on' : 'off'}
      </button>
    ]}
    />
)

export default App;
