import React, { Component } from 'react'
import PropTypes from 'prop-types'

const contextName = '__toggle__'

const withProvider = Unprovided => {
  const ProviderConnected = (props, context) =>
    props.render(context[contextName])

  ProviderConnected.contextTypes = {
    [contextName]: PropTypes.object.isRequired
  }

  ProviderConnected.displayName = `ProviderConnected(${Unprovided.displayName || Unprovided.name})`

  const Provider = ({ children, ...props }) => (
    <Unprovided {...props} render={toggle => (
      <Provider.Renderer toggle={toggle} children={children} />
    )} />
  )

  Provider.Renderer = class extends Component {
    static displayName = `ProviderRenderer(${Unprovided.displayName || Unprovided.name})`

    static childContextTypes = {
      [contextName]: PropTypes.object.isRequired
    }

    getChildContext() {
      return {
        [contextName]: this.props.toggle
      }
    }

    render() {
      return this.props.children
    }
  }

  Provider.Connected = ProviderConnected

  Provider.displayName = `Provider(${Unprovided.displayName || Unprovided.name})`

  return Provider
}

export default withProvider
