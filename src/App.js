import React from 'react'

import ToggleProvider, { withToggle } from './ToggleProvider'
import Switch from './components/Switch'
import UpdateBlocker from './components/UpdateBlocker'

const Header = ({ toggle }) => [
    <Switch key='switch' id="switch" {...toggle.getTogglerProps() } />,
    <h1 key="h1">Hello {toggle.on ? (<span role="img" aria-label="World">🌎</span>) : 'World'}!</h1>
  ]

const HeaderWrapper = withToggle(Header)

const Body = ({ toggle: { on } }) => [
  <p key="paragraph" style={{ maxWidth: '80%' }}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis id odio porro quisquam! Accusantium facilis doloribus neque?
  </p>,
  <hr key='hr' />,
  on ? (<div key="end" style={{ fontSize: '5em' }}><span role="img" aria-label="happy">😎</span></div>) : null
]

const BodyWrapper = withToggle(Body)

const App = () => (
  <ToggleProvider>
    <div className="flex">
      <HeaderWrapper />
      <UpdateBlocker>
        <hr />
        <BodyWrapper />
      </UpdateBlocker>
    </div>
  </ToggleProvider>
)

export default App;
