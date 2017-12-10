import React from 'react'
import PropTypes from 'prop-types'
import hoistNonReactStatics from 'hoist-non-react-statics'

import withProvider from './withProvider'
import Switch from './components/Switch'
import Toggle from './components/Toggle'

const ToggleProvider = withProvider(Toggle, { contextName: '__toggle__', paramName: 'toggle' })

const withToggle = Component => {
  function Wrapper(props, context) {
    const { innerRef, ...remainingProps } = props

    return (
      <ToggleProvider.Connected
        render={toggle =>
          <Component
            {...remainingProps}
            toggle={toggle}
            />
        }
        />
    )
  }

  Wrapper.displayName = `withToggle(${Component.displayName || Component.name})`

  Wrapper.propTypes = { innerRef: PropTypes.func }

  Wrapper.WrappedComponent = Component

  return hoistNonReactStatics(Wrapper, Component)
}

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
    <HeaderWrapper />
    <hr />
    <BodyWrapper />
  </ToggleProvider>
)

export default App;
