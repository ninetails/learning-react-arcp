import React, { Component } from 'react'
import Toggle from '../Toggle'

export default class MyToggle extends Component {
  static ToggleMessage = Toggle.withToggle(
    ({ toggle: { on } }) =>
      on
        ? 'Warning: The button is toggled on'
        : null
  )

  focus = () => this.button.focus()

  render() {
    const { toggle: { on, toggle } } = this.props

    return (
      <button
        onClick={toggle}
        ref={button => this.button = button}
        >
        { on ? 'on' : 'off' }
      </button>
    )
  }
}
