import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Switch from '../Switch'

export const TOGGLE_CONTEXT = '__toggle__'

const withToggle = (Component) => {
  function Wrapper(props, context) {
    const toggleContext = context[TOGGLE_CONTEXT]
    return <Component toggle={toggleContext} {...props} />
  }

  Wrapper.contextTypes = {
    [TOGGLE_CONTEXT]: PropTypes.object.isRequired
  }

  Wrapper.displayName = `withToggle(${Component.displayName || Component.name})`

  return Wrapper
}

const ToggleOn = ({ children, toggle: { on } }) =>
  on ? children : null

const ToggleOff = ({ children, toggle: { on } }) =>
  on ? null : children

const ToggleButton = ({ toggle: { on, toggle }, ...props }) =>
  <Switch id="switch" on={on} onChange={toggle} {...props} />

export default class Toggle extends Component {
  static On = withToggle(ToggleOn)

  static Off = withToggle(ToggleOff)

  static Button = withToggle(ToggleButton)

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
