import React, { Component } from 'react'

export default class MyToggle extends Component {
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
