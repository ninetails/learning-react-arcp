import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Switch from '../Switch'

export const TOGGLE_CONTEXT = '__toggle__'

export function ToggleOn({ children }, context) {
  const { on } = context[TOGGLE_CONTEXT]
  return on ? children : null
}

ToggleOn.contextTypes = {
  [TOGGLE_CONTEXT]: PropTypes.object.isRequired
}

export function ToggleOff({ children }, context) {
  const { on } = context[TOGGLE_CONTEXT]
  return on ? null : children
}

ToggleOff.contextTypes = {
  [TOGGLE_CONTEXT]: PropTypes.object.isRequired
}

export function ToggleButton(props, context) {
  const { on, toggle } = context[TOGGLE_CONTEXT]
  return <Switch id="switch" on={on} onChange={toggle} {...props} />
}

ToggleButton.contextTypes = {
  [TOGGLE_CONTEXT]: PropTypes.object.isRequired
}

export default class Toggle extends Component {
  static On = ToggleOn

  static Off = ToggleOff

  static Button = ToggleButton

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
