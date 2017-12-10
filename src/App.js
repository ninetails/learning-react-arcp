import React from 'react'

import Toggle from './components/Toggle'
import Switch from './components/Switch'
import MyToggle from './components/MyToggle'

export function renderSwitch({ on, toggle }) {
  return <Switch id="switch" on={on} onChange={toggle} />
}

const App = () => (
  <Toggle
    onToggle={on => console.log('toggle', on)}
    render={({ on, toggle }) => [
      on
        ? 'The button is on'
        : 'The button is off',
      <Switch key='switch' id="switch" on={on} onChange={toggle} />,
      <hr key='hr' />,
      <MyToggle key="myToggle" on={on} toggle={toggle} />
    ]}
    />
)

export default App;
