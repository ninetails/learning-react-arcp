import React, { cloneElement, Children, Component } from 'react'
import Switch from '../Switch'

export function ToggleOn({ on, children }) {
  return on ? children : null;
}

export function ToggleOff({ on, children }) {
  return on ? null : children;
}

export function ToggleButton({ on, toggle, ...props }) {
  return <Switch id="switch" on={on} onChange={toggle} {...props} />
}

export default class Toggle extends Component {
  static defaultProps = { onToggle: () => undefined };

  static On = ToggleOn

  static Off = ToggleOff

  static Button = ToggleButton

  state = { on: false }

  toggle = () => this.setState(({ on }) => ({ on: !on }), () => this.props.onToggle(this.state.on))

  render() {
    const children = Children.map(
      this.props.children,
      child => cloneElement(child, {
        on: this.state.on,
        toggle: this.toggle
      })
    )

    return children
  }
}
