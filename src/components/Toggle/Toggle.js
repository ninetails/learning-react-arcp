import { Component } from 'react'

export default class Toggle extends Component {
  state = { on: false }

  toggle = () => this.setState(({ on }) => ({ on: !on }), () => this.props.onToggle(this.state.on))

  render = () => this.props.render({
    on: this.state.on,
    toggle: this.toggle,
    togglerProps: {
      'aria-expanded': this.state.on,
      onClick: this.toggle
    }
  })
}
