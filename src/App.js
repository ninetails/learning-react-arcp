import React from 'react'

import ToggleProvider, { ConnectedToggle } from './components/Toggle/ToggleProvider'
import Switch from './components/Switch'

const Header = () =>
  <ConnectedToggle
    render={toggle => [
      <Switch key='switch' id="switch" {...toggle.getTogglerProps() } />,
      <h1 key="h1">Hello {toggle.on ? (<span role="img" aria-label="World">🌎</span>) : 'World'}!</h1>
    ]}
    />

const Body = () =>
  <ConnectedToggle
    render={({ on }) => [
      <p key="paragraph" style={{ maxWidth: '80%' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis id odio porro quisquam! Accusantium facilis doloribus neque?
      </p>,
      <hr key='hr' />,
      on ? (<div key="end" style={{ fontSize: '5em' }}><span role="img" aria-label="happy">😎</span></div>) : null
    ]}
    />

const App = () => (
  <ToggleProvider>
    <Header />
    <hr />
    <Body />
  </ToggleProvider>
)

export default App;
