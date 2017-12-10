import React, { Component } from 'react'
import PropTypes from 'prop-types'
import hoistNonReactStatics from 'hoist-non-react-statics'
import { Broadcast, Subscriber } from 'react-broadcast'

const withProvider = (Unprovided, { channel, paramName } = {}) => {
  const ProviderConnected = (props, context) =>
    <Subscriber channel={channel} children={value => props.render(value)} />

  ProviderConnected.displayName = `ProviderConnected(${Unprovided.displayName || Unprovided.name})`

  const Provider = ({ children, ...props }) => (
    <Unprovided {...props} render={value => (
      <Broadcast channel={channel} value={value} children={children} />
    )} />
  )

  Provider.Connected = ProviderConnected

  Provider.displayName = `Provider(${Unprovided.displayName || Unprovided.name})`

  Provider.WrappedComponent = Unprovided

  return hoistNonReactStatics(Provider, Unprovided)
}

export default withProvider
