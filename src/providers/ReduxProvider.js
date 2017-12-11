import React from 'react'
import PropTypes from 'prop-types'
import hoistNonReactStatics from 'hoist-non-react-statics'

import withProvider from './withProvider'
import Redux from '../components/Redux'

const ReduxProvider = withProvider(Redux, { channel: '__redux_channel__' })

export const withRedux = Component => {
  function Wrapper(props, context) {
    const { innerRef, ...remainingProps } = props

    return (
      <ReduxProvider.Connected
        render={props =>
          <Component
            ref={innerRef}
            {...props}
            {...remainingProps}
          />
        }
      />
    )
  }

  Wrapper.displayName = `withRedux(${Component.displayName || Component.name})`

  Wrapper.propTypes = { innerRef: PropTypes.func }

  Wrapper.WrappedComponent = Component

  return hoistNonReactStatics(Wrapper, Component)
}

export default ReduxProvider
