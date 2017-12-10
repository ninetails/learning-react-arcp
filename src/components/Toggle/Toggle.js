import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Switch from '../Switch'

export const TOGGLE_CONTEXT = '__toggle__'

const withToggle = (Component) => {
  function Wrapper(props, context) {
    const toggleContext = context[TOGGLE_CONTEXT]
    return <Component {...toggleContext} {...props} />
  }

  Wrapper.contextTypes = {
    [TOGGLE_CONTEXT]: PropTypes.object.isRequired
  }

  return Wrapper
}

const ToggleOn = withToggle(({ children, on }) => {
  return on ? children : null
})

const ToggleOff = withToggle(({ children, on }) => {
  return on ? null : children
})

const ToggleButton = withToggle(({ on, toggle, ...props }) => {
  return <Switch id="switch" on={on} onChange={toggle} {...props} />
})

export default class Toggle extends Component {
  static On = ToggleOn

  static Off = ToggleOff

  static Button = ToggleButton

  static withToggle = withToggle

  static defaultProps = { onToggle: () => undefined };

  static childContextTypes = {
    [TOGGLE_CONTEXT]: PropTypes.object.isRequired
  }

  state = { on: false }

  toggle = () => this.setState(({ on }) => ({ on: !on }), () => this.props.onToggle(this.state.on))

  getChildContext() {
    return {
      [TOGGLE_CONTEXT]: {
        on: this.state.on,
        toggle: this.toggle
      }
    }
  }

  render() {
    return this.props.children
  }
}
