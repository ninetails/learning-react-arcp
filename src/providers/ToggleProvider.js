import React from 'react'
import PropTypes from 'prop-types'
import hoistNonReactStatics from 'hoist-non-react-statics'

import withProvider from './withProvider'
import Toggle from '../components/Toggle'

const ToggleProvider = withProvider(Toggle, { channel: '__toggle_channel__', paramName: 'toggle' })

export const withToggle = Component => {
  function Wrapper(props, context) {
    const { innerRef, ...remainingProps } = props

    return (
      <ToggleProvider.Connected
        render={toggle =>
          <Component
            ref={innerRef}
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

export default ToggleProvider
