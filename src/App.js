import React from 'react'

import withProvider from './withProvider'
import Switch from './components/Switch'
import Toggle from './components/Toggle'

const ToggleProvider = withProvider(Toggle)

const Header = () =>
  <ToggleProvider.Connected
    render={toggle => [
      <Switch key='switch' id="switch" {...toggle.getTogglerProps() } />,
      <h1 key="h1">Hello {toggle.on ? (<span role="img" aria-label="World">🌎</span>) : 'World'}!</h1>
    ]}
    />

const Body = () =>
  <ToggleProvider.Connected
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
